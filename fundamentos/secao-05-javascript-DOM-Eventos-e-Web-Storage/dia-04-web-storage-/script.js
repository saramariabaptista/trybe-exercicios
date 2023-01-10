window.onload = function() {
let select = document.querySelector('select');
   select.addEventListener('change', function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
   })
let selectTextcolor = document.getElementById('textcolor');
    selectTextcolor.addEventListener('change', function(){
    let selectedTextcolor = selectTextcolor.selectedOptions[0];
    let textToChange = document.getElementById('text');
    textToChange.style.color = selectedTextcolor.value;
   }) 
}
