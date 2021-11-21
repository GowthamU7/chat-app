const exp=require('express')
const app=exp()
const pt=require('path')
const pub=pt.join(__dirname,'../public')
const socketio=require('socket.io')
const http=require('http')
const crserver=http.createServer(app)
const io=socketio(crserver)
app.set('view engine','hbs')
app.use(exp.static(pub))

io.on('connection',(socket)=>{
    socket.on('increment',(msg)=>{
        socket.broadcast.emit('countupdate',msg)
    })
})


app.get('',(req,res)=>{
    res.render('index')
})



crserver.listen(3000,()=>{
    console.log("Listening on port 3000")
})





