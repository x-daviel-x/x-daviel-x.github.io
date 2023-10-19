
function change(item){
  const buttons = document.querySelectorAll('ion-icon');
  buttons.forEach(function(obj){
      obj.classList.remove("active");
  });
  item.classList.add("active");
}