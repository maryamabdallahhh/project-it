let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick=() => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');
}
// product slider 
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
  

productContainers.forEach((item,i) => {
let containerDimensions = item.getBoundingClientRect();
let containerWidth = containerDimensions.width;
nxtBtn[i].addEventListener('click',() =>{
    item.scrollLeft += containerWidth;
})
preBtn[i].addEventListener('click',() =>{
    item.scrollLeft -= containerWidth;
})
})