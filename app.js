let main = document.getElementById('text');
let bold = document.getElementById('bold');
let Italic = document.getElementById('italic');
let Underline = document.getElementById('underline');
let color = document.getElementById('color');
let Strike = document.getElementById('strike');


bold.addEventListener('click' , ()=> {
    if(main.style.fontWeight === 'bold' ){
        main.style.fontWeight = ''
    } else {
        main.style.fontWeight = 'bold'; 
      }
  ;    
})

Italic.addEventListener('click' , ()=> {
if(main.style.fontStyle === 'italic'){
    main.style.fontStyle = '';
}else {
    main.style.fontStyle = 'italic'
}
})


Underline.addEventListener('click', ()=>{
    if(main.style.textDecoration === 'underline'){
        main.style.textDecoration= ''
    }else {
        main.style.textDecoration = 'underline'
    }
})

Strike.addEventListener('click', ()=>{
    if(main.style.textDecoration === 'line-through'){ 
        main.style.textDecoration= ''
    }else {
        main.style.textDecoration = 'line-through'
    }
})

let input_val = document.getElementById('fontSize');
input_val.addEventListener('input', () => {
    main.style.fontSize = input_val.value + 'px';
});

color.addEventListener("click", function(){
let change = event.target.value;
main.style.color = change ;
})