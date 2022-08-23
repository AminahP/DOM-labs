// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
  ];



const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var( --main-bg)'

mainEl.innerHTML = '<h1> SEI ROCKS</h1>' 

mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = '100%';

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around');

for (link of menuLinks) {
  let newAnchor = document.createElement('a')
  newAnchor.setAttribute('href', link.href)
  newAnchor.textContent = link.text
  topMenuEl.appendChild(newAnchor)
}

const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around')

//Set the CSS positionproperty of subMenuElto the value of absolute.

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

  //5.1

//Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll('#top-menu a');
//Declare a global showingSubMenu variable and initialize it to false;
 let showingSubMenu = false;
 
  //5.2
 topMenuEl.addEventListener('click', function(ev){
  ev.preventDefault();
  let link = ev.target;
if (link.tag !== 'A') return;
console.log(link.textContent)
 })
 
  //5.3
if (link.classList.contains('active')){
  link.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  return;
}
  //5.4
topMenuLinks.forEach(function(link){
  link.classList.remove('active');
});

//5.5

link.classList.add('active')

//5.6
 let linkData = menuLinks.find(function(linkObj){
  return linkObj.text ===link.textContent;
 });

 showingSubMenu = 'subLinks' in linkData;
  
 if (showingSubMenu) {
   buildSubMenu(linkData.subLinks);
   subMenuEl.style.top = '100%';
 } else {
   subMenuEl.style.top = '0';
 };

 function buildSubMenu(subLinks) {
   subMenuEl.innerHTML = '';
   subLinks.forEach(function(link) {
     let linkEl = document.createElement('a');
     linkEl.setAttribute('href', link.href);
     linkEl.textContent = link.text;
     subMenuEl.appendChild(linkEl);
   });
 }

 subMenuEl.addEventListener('click', function(event) {
   event.preventDefault();
   let link = event.target;
   if (link.tagName !== 'A') return;
   console.log(link.textContent);
   
   showingSubMenu = false;
   subMenuEl.style.top = '0';
   
   topMenuLinks.forEach(function(link) {
     link.classList.remove('active');
   });
   
   mainEl.innerHTML = `<h1>${link.textContent}</h1>`;

});

// the webpage eneded up blank . i also commented everything out and it was still blnk
// or the website is dead