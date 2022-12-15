//Manejo del nav en dispositivos mobiles
//Seleccion de los elementos html
const nav_mobile = document.querySelector('.nav-mobile');
const menu_list_mobile = document.querySelector('.menu__list--mobile');
const nav__mobile = document.querySelector('#navegacion')
const nav__mobile__items = document.querySelector('#nav-items')
//bandera 
let bandera = true;
//captura del evento de redimension  de pantalla
addEventListener('resize', () => {
    const width = screen.width
    if (width < 768 && (bandera)) {
        bandera = false;
        console.log('nav quitado');
    } else if (width >= 765 && (!bandera)) {
        bandera = true
        console.log('nav agregado');
        nav_mobile.style.display = "none"
        menu_list_mobile.style.display = "none"
    }
})
//seleccion de la imagen - simbolo de x o emparedado
const nav_img = document.querySelector('.nav-img');
nav_img.addEventListener('click', (e) => {
    e.preventDefault();
    nav_mobile.style.display = "block"
    menu_list_mobile.style.display = "block"

})

const close = document.querySelector('#close')
close.addEventListener('click', (e) => {
    e.preventDefault();
    menu_list_mobile.style.display = 'none'
})
//mensajes de errores posibles a la hora de completar el formulario
const mensajes = {
    nombre: {
        min: 'Nombre ingresado demasiado corto',
        max: 'Nombre ingresado demasiado largo',
        caracteres: 'El nombre no  debe tener caracteres especiales'
    },
    email: {
        min: 'Email ingresado demasiado corto',
        max: 'Email ingresado demasiado largo',
    },
    asunto: {
        min: 'Asunto ingresado demasiado corto',
        max: 'Asunto ingresado demasiado largo',
        caracteres: 'El asunto no  debe tener caracteres especiales'
    }
}
//simbolos no permitidos
const simbolos = '~!@#$%^&*()_}{":?><.,'
const inputs = document.querySelectorAll('input')
let enviar = false;
//funcion validar
const validar = (input) => {
    input.addEventListener('input', tecla => {
        let cadena =  input.value
        let mensaje = ''
        let ban = (input.name=='email')?true:false;
        if (cadena.length < 3) {
            mensaje = mensajes[input.name].min;
        }
        if(cadena.length>20){
            mensaje = mensajes[input.name].max;
        }
        if(simbolos.includes(tecla.data)&&!ban){
            mensaje = mensajes[input.name].caracteres;
        }
        if(mensaje!=''){
            input.setCustomValidity(mensaje)
            input.reportValidity();
        }
        else{
            enviar= true;
        }
        
        
    })
}
inputs.forEach(input=>{
    input.addEventListener('blur',e=>{
        console.log('hola');
        validar(input)
    })
})
const btn_enviar = document.querySelector('.formcontato__botao')
btn_enviar.addEventListener('click', (e) => {
    if(!enviar){
        e.preventDefault();
    }
})