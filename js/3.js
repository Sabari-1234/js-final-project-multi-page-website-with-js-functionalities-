var submit=document.getElementById('submit')
var correct=document.getElementsByClassName('correct')
var total=document.getElementById('total')
var res=document.getElementById('res')
var blu=document.getElementById('blur')
var result=0
submit.onclick=function(e){
    e.preventDefault()
    for (var i=0; i<=correct.length-1;i++)
    {
        if(correct[i].checked)
        {
            
            result++

        }
    }
    total.innerHTML=result+'/5'
    res.style.visibility='visible'
    blu.style.filter='blur(20px)'

    result=0


}
res.onclick=function(){
    res.style.visibility='hidden'
    blu.style.filter='blur(0px)'
}
var back=document.getElementById('back')
back.onclick=function(){
history.back()
}
