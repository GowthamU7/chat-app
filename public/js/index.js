var socket=io()
var dv=document.getElementById('row')
var our=document.getElementById('our')
var from=document.getElementById('from')
var sender=document.getElementById('inc')
var scl=40
sender.addEventListener('click',(e)=>{
    var msg=document.getElementById('msg').value
    if(msg==""){
        return 
    }
    let divl=document.createElement('div')
    let divr=document.createElement('div')
    divl.innerHTML=`<br><div class="badge bg-primary">${msg}</div><br>`
    divr.innerHTML=`<br><div></div><br>`
    our.appendChild(divl)
    from.appendChild(divr)
    socket.emit('increment',msg)
    dv.scrollTo(0,scl)
    scl+=40
})
socket.on('countupdate',(rsv)=>{
    let divr=document.createElement('div')
    let divl=document.createElement('div')
    divl.innerHTML=`<br><div></div><br>`
    divr.innerHTML=`<br><div class="badge bg-success">${rsv}</div><br>`
    from.appendChild(divr)
    our.appendChild(divl)
    dv.scrollTo(0,scl)
    scl+=40
})
