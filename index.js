const ham=document.querySelector('#ham')
const dropUL=document.querySelector('#navMenu')
const home=document.querySelector("#Home")
const home2=document.querySelector("#Home2")
// const img=document.querySelector('#Home-img')
// if (window.innerWidth<=600){
//   home.style.animation='none'
// }else{
//   home.style.animation='moveLeftRight 5s linear infinite'

// }
const homeImg = document.getElementById('Home-img');

function handleAnimation() {
    if (window.innerWidth <= 993) {
        homeImg.style.animation='none' // Stop the animation
    } else {
        homeImg.style.animation = 'moveLeftRight 5s cubic-bezier(0.4, 2.6, 0.2, 0.9) infinite alternate'; // Restart the animation
    }
}

// Initially check and set the animation based on the window width
handleAnimation();

// Listen for window resize events to update the animation
window.addEventListener('resize', handleAnimation);

ham.addEventListener("click",()=>{
 ham.classList.toggle("active")
 dropUL.classList.toggle("active")

})
const homesec=document.querySelector("#HomeSec")
home.addEventListener("click",()=>{
  homesec.scrollIntoView({behavior:"smooth"})

})



const servNav=document.querySelector('#servNav')
const servSec=document.querySelector('#services')
servNav.addEventListener("click",()=>{
    servSec.scrollIntoView({behavior:"smooth"})
  
  })


