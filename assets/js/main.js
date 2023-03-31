//--------------FAQ Manual yazılış-----------

// const mainsectionvideo=document.querySelector('.accardion-menu1')
// mainsectionvideo.addEventListener('click',function(){
//     const youtubelink=document.querySelector('.accardion-menu1')
//     link.classList.toggle('active')
//     const lists=document.querySelector('.list-text')
//     lists.classList.toggle('active')
//     const rotate=document.querySelector('.accardion-menu1 svg')
//     rotate.classList.toggle('active')
// })

//----------Portfolio---Filter-------------

const filterButtons = document.querySelectorAll('.filter-button');
const imageItems = document.querySelectorAll('.image-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(button => {
      button.classList.remove('active');
    });
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    imageItems.forEach(item => {
      if (filterValue === 'all') {
        item.style.display = 'block';
      } else if (item.classList.contains(filterValue)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

//---------Scroll to class---------
const servicelink=document.querySelector('.servicelink')
servicelink.addEventListener('click', function(event){
  event.preventDefault()
     const servicesection=document.querySelector('.services');
     servicesection.scrollIntoView()
 
})
const portfoliolink=document.querySelector('.portfoliolink')
portfoliolink.addEventListener('click', function(event){
  event.preventDefault()
     const portfoliosection=document.querySelector('.portfolio');
     portfoliosection.scrollIntoView()
 
})
const contactlink=document.querySelector('.contactlink')
contactlink.addEventListener('click', function(event){
  event.preventDefault()
     const contactsection=document.querySelector('.contact');
     contactsection.scrollIntoView()
 
})


//-----------Scroll to Top----------

  
  document.onscroll=function(){Myfunction()}
  function Myfunction(){
  if(document.documentElement.scrollTop>700  ){
    const elements=document.querySelector('.backtotop');
    elements.classList.add('active');
  }
  else{
    const elements=document.querySelector('.backtotop');
    elements.classList.remove('active')
  }
}

//-----------------Navbar-toggle-list---------------

const listmenu=document.querySelector('#list-menu')
listmenu.addEventListener('click', function(){
  const navlist=document.querySelector('.navbar-for-mobile').classList.add('active')
})
const closesvg=document.querySelector('#closesvg')
closesvg.addEventListener('click',function(){
  const navlist=document.querySelector('.navbar-for-mobile').classList.remove('active')
})