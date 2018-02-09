var input = document.getElementById('toggle');
var select = document.querySelectorAll('.select')[0];
input.onchange = function(){
   select.style.display = this.checked? 'block': 'none';
}