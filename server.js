const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const { MongoClient, ObjectId } = require('mongodb')


app.listen(8080, function () {
	console.log('listening on 8080')
  });

app.use(express.static(path.join(__dirname, '/build')));


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(passport.initialize())
app.use(session({
  secret: '암호화에 쓸 비번',
  resave : false,
  saveUninitialized : false
}))

app.use(passport.session()) 

let db
const url ='mongodb+srv://llv7417:jks0308@cluster0.wewyamo.mongodb.net/?retryWrites=true&w=majority';
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
  
}).catch((err)=>{
  console.log(err)
})

app.get('/', function (요청, 응답) {
	응답.sendFile(path.join(__dirname, '/build/index.html'));
  
  });


// app.get('*', function (요청, 응답) {
// 	응답.sendFile(path.join(__dirname, '/build/index.html'));
//   console.log(1);
  
//   });



passport.use(new LocalStrategy(async (입력한아이디, 입력한비번, cb) => {
  let result = await db.collection('user').findOne({ username : 입력한아이디})
  if (!result) {
    return cb(null, false, { message: '아이디 DB에 없음' })
  }
  if (result.password == 입력한비번) {
    return cb(null, result)
  } else {
    return cb(null, false, { message: '비번불일치' });
  }
}))


passport.serializeUser((user, done) => {

   process.nextTick(() => {
     done(null, { id: user._id, username: user.username })
   })
}) 

passport.deserializeUser(async(user, done) => {
  let result = await db.collection('user').findOne({_id : new ObjectId(user.id) })
  delete result.password
  process.nextTick(() => {
    return done(null, result)
  })
})
app.post('/Login', async (요청, 응답, next) => {

  passport.authenticate('local', (error, user, info) => {
      if (error) return 응답.status(500).json(error)
      if (!user) return 응답.status(401).json(info.message)
      요청.logIn(user, (err) => {
        if (err) return next(err)
        응답.redirect('/')
      })
  })(요청, 응답, next)

})

app.get('/Login', (요청, 응답)=>{
  응답.render('Login.js')
}) 

app.post('/Register', async (요청, 응답) => {
  await db.collection('user').insertOne({
    username : 요청.body.username,
    password : 요청.body.password
  })
  응답.redirect('/')
})


app.get('/Register', (요청, 응답)=>{
  응답.render('Register.js')
})
