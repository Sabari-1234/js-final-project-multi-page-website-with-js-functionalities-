var required=document.getElementsByClassName('required')
var submit=document.getElementsByClassName('submit')
var form=document.getElementsByTagName('form')
var final=document.getElementById('final')

var need=document.getElementsByClassName('need')
submit[0].onclick=function(e){

    e.preventDefault()
    for(var i=0;i<=1;i++){
        required[i].innerHTML='This field cannot be empty'
    if(need[i].value===''||need[i].value===' ' ){

        
        required[i].classList.remove('d-none')
    }
    else{
        required[i].classList.add('d-none')
    }
}

if(required[0].classList.contains('d-none') && required[1].classList.contains('d-none')){
    if(/[a-z][a-z0-9]{0,}/i.test(need[0].value)){
        if(/[a-z]{1,}(@gmail.com)$/.test(need[1].value)){
                form[1].style.visibility='visible'
        }
        else{
            required[1].innerHTML='email should contain @gmail.com at end'
            required[1].classList.remove('d-none')
        }

    }
    else{
        required[0].innerHTML='enter valid name'
        required[0].classList.remove('d-none')
    }
    
 
}}



submit[2].onclick=function(e){
    e.preventDefault()
    for(var i=2;i<=3;i++){
    if(need[i].value===''||need[i].value===' ' ){

        
        required[i].classList.remove('d-none')
    }
    else{
        required[i].classList.add('d-none')
    }
}
if(required[2].classList.contains('d-none') && required[3].classList.contains('d-none')){
    if(/^(\+91)?[0-9]{10}$/i.test(need[2].value)){
        if(/^[a-z]{0,}$/i.test(need[3].value)){
                form[2].style.visibility='visible'
        }
        else{
            required[3].innerHTML='enter valid country name'
            required[3].classList.remove('d-none')
        }

    }
    else{
        required[2].innerHTML='enter valid phone number'
        required[2].classList.remove('d-none')
    }
}

}
submit[4].onclick=function(e){
    e.preventDefault()
    for(var i=4;i<=5;i++){
    if(need[i].value===''||need[i].value===' '||need[i].value==='-Select Program-' ){

        
        required[i].classList.remove('d-none')
    }
    else{
        required[i].classList.add('d-none')
    }
}
if(required[4].classList.contains('d-none') && required[5].classList.contains('d-none')){
    form[0].style.visibility='hidden'
    form[1].style.visibility='hidden'
    form[2].style.visibility='hidden'
   final.style.visibility='visible'
}

}


submit[1].onclick=function(e){
    e.preventDefault()
    form[1].style.visibility='hidden'
}
submit[3].onclick=function(e){
    e.preventDefault()
    form[2].style.visibility='hidden'
}
var back=document.getElementById('back')
back.onclick=function(){
history.back()
}
