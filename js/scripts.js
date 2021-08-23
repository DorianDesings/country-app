const toggleColor = document.getElementById('toggle-color');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

toggleColor.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')
  if(toggleIcon.classList.contains('fa-moon')){
    toggleIcon.classList.replace('fa-moon', 'fa-sun')
    toggleText.textContent = 'Light Mode'
  }else{
    toggleIcon.classList.replace('fa-sun', 'fa-moon')
    toggleText.textContent = 'Dark Mode'
  }
})