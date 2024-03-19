
//button get by id
var orange=document.getElementById('orange')
var green=document.getElementById('green')
var red=document.getElementById('red')
//get emoji div by id
var emoji=document.getElementById('emoji')
//left and right div
var left=document.getElementById('left')
var left1=document.getElementById('left1')
var left2=document.getElementById('left2')

orange.onclick=function(){
    emoji.style.backgroundColor='rgba(250, 195, 14, 0.904)'
    emoji.style.visibility='visible'
    left1.style.visibility='visible'

}
green.onclick=function(){
    emoji.style.backgroundColor='green'
    emoji.style.visibility='visible'
    left1.style.visibility='visible'

}
red.onclick=function(){
    emoji.style.backgroundColor='red'
    emoji.style.visibility='visible'
    left1.style.visibility='visible'

}


//previous and next buttons
var move =document.getElementsByClassName('move')
move[0].onclick=function(){
    left1.style.visibility='hidden'
}
move[1].onclick=function(){
    left2.style.visibility='visible'
}
move[2].onclick=function(){
    left2.style.visibility='hidden'
}

//eyes and mouth


var b2=document.getElementsByClassName('b2')
console.log(typeof(b2[0].innerHTML))

var eye=document.getElementById('eye')
var mouth=document.getElementById('mouth')
var a={}
for (var i=0;i<=b2.length-1;i++)
{
   
    a[i]=b2[i].innerHTML
    

    

}
console.log(a)

b2[0].onclick=function(){
    eye.innerHTML=a[0]
    left2.style.visibility='visible'


}
b2[1].onclick=function(){
    eye.innerHTML=a[1]
    left2.style.visibility='visible'


}
b2[2].onclick=function(){
    eye.innerHTML=a[2]
    left2.style.visibility='visible'


}
b2[3].onclick=function(){
    eye.innerHTML=a[3]
    left2.style.visibility='visible'


}
b2[4].onclick=function(){
    eye.innerHTML=a[4]
    left2.style.visibility='visible'


}
b2[5].onclick=function(){
    eye.innerHTML=a[5]
    left2.style.visibility='visible'


}
b2[6].onclick=function(){
    mouth.innerHTML=a[6]
    


}
b2[7].onclick=function(){
    mouth.innerHTML=a[7]


}
b2[8].onclick=function(){
    mouth.innerHTML=a[8]


}
b2[9].onclick=function(){
    mouth.innerHTML=a[9]


}
b2[10].onclick=function(){
    mouth.innerHTML=a[10]


}

//back button
var back=document.getElementById('back')
back.onclick=function(){
 history.back()
}