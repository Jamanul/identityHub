let list =document.querySelector(".slider .list")
console.log(list)
let items =document.querySelectorAll(".slider .list .item")
console.log(items)
let dots =document.querySelectorAll(".slider .dots li")
console.log(dots)
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





// 
const toggleButton = document.getElementById("toggleButton");
const testSection = document.getElementById("test-section");
const testListItems = document.querySelectorAll(".test-section li");

toggleButton.addEventListener("click", () => {
  if (testSection.style.display === "none" || testSection.style.display === "") {
    testSection.style.display = "block"; // Show the div
    
    // Delay to trigger opacity transition
    setTimeout(() => {
      testSection.style.opacity = 1; // Fade in the entire section
    }, 10); 

    // Typewriter effect for list items
    testListItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)'; // Move to original position
      }, index * 300); // Delay each item by 300ms
    });
  } else {
    // Fade out the entire section
    testSection.style.opacity = 0;

    // Hide after fade-out completes
    setTimeout(() => {
      testSection.style.display = "none"; 
      
      // Reset the list items for next time
      testListItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(10px)'; 
      });
    }, 500); 
  }
});