let list =document.querySelector(".slider .list")
//console.log(list)
let items =document.querySelectorAll(".slider .list .item")
//console.log(items)
let dots =document.querySelectorAll(".slider .dots li")
//console.log(dots)
let prev =document.getElementById("prev")
let next =document.getElementById("next")
let active =0
let  lengthItems = items.length -1
next.onclick =function(){
   if(active +1>lengthItems) {
    active=0
   }
   else{
    active =active+1
   }
     reloadSlider()
}
prev.onclick=function(){
    if(active-1<0){
        active=0
    }
    else{
        active=active-1
    }
    reloadSlider()
}
let refreshslider =setInterval(()=>{next.click()},7000)
const reloadSlider =()=>{
    let checkleft = items[active].offsetLeft
    list.style.left = -checkleft + 'px'
    console.log(checkleft)
    let lastActiveDot = document.querySelector(".slider .dots li.active-one")
    lastActiveDot.classList.remove('active-one')
    dots[active].classList.add('active-one')

    clearInterval(refreshslider)
    refreshslider =setInterval(()=>{next.click()},7000)
}

dots.forEach((li,key)=>{

    li.addEventListener('click',function(){
        active=key
        reloadSlider()
    })
})





// for responsive navbar
const toggleButton = document.getElementById("toggleButton");
const section = document.getElementById("responsive-navbar");
const listItems = document.querySelectorAll(".responsive-navbar li");

// Set initial state
let isMenuOpen = false;

toggleButton.addEventListener("click", () => {
  if (!isMenuOpen) {
    // Open the menu
    section.style.display = "block";
    setTimeout(() => {
      section.style.opacity = 1;
    }, 10);
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      }, index * 300);
    });
    toggleButton.textContent = "✕";
  } else {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.display = "none";
      listItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(10px)';
      });
    }, 500);
    toggleButton.textContent = "☰";
  }

  isMenuOpen = !isMenuOpen; 
});
// function so that responsive doesnot show on big screens
function hide() {
    if (window.innerWidth > 767) {
      isMenuOpen = false;  
      section.style.display = "none"; 
      toggleButton.textContent = "☰";
    }
  }
  window.addEventListener('resize', hide);

  if (window.innerWidth > 767) {
    hide(); 
  }