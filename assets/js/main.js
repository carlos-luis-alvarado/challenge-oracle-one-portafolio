
// const imagen_nav =  document.querySelector('.nav-img')
// imagen_nav.addEventListener('click',()=>{
//     console.log('Hola');
// })

const nav_mobile = document.querySelector('.nav-mobile');
const menu_list_mobile = document.querySelector('.menu__list--mobile');

const nav__mobile = document.querySelector('#navegacion')
const nav__mobile__items = document.querySelector('#nav-items')
let bandera = true;
addEventListener('resize',()=>{
    const width = screen.width
    if(width<768&&(bandera)){     
       
        bandera=false;
        console.log('nav quitado');
    }else if(width>=765&&(!bandera)){
        bandera=true
        console.log('nav agregado');
        nav_mobile.style.display="none"
    menu_list_mobile.style.display="none"
        // nav__mobile.classList.toggle('nav__mobile')
        // nav__mobile.classList.toggle('nav')
    }
})

const nav_img = document.querySelector('.nav-img');
nav_img.addEventListener('click',(e)=>{
    e.preventDefault();
    
    nav_mobile.style.display="block"
    menu_list_mobile.style.display="block"

})

const close = document.querySelector('#close')
close.addEventListener('click',(e)=>{
    e.preventDefault();
    menu_list_mobile.style.display='none'
})