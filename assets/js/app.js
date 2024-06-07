let search = document.querySelector('.search');
let crossBtn = document.querySelector('.cross-btn');
let searchBox = document.querySelector('.search-box');

searchBox.addEventListener('click',function(e){
  if(e.target.classList.contains('active_search')){
    
    searchBox.classList.remove('active_search');
  }
  e.preventDefault();

})
search.addEventListener('click', function(e){
  e.preventDefault();
  searchBox.classList.add('active_search');
  document.querySelector('.test').classList.add('search-active');
  document.querySelector('.test').placeholder.style.color = "#fff"
    
});
crossBtn.addEventListener('click', function(e){
  e.preventDefault();
  searchBox.classList.remove('active_search');
  document.querySelector('.test').classList.remove('search-active');
});
