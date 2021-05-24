  /*导航条点击*/
  var navElements = document.querySelectorAll(".nav ul li");
  navElements.forEach( navItem =>{
      navItem.addEventListener("click",(e)=>{
          navElements.forEach( _navItem =>{
              _navItem.classList.remove("nav-active")
          })
          navItem.classList.add("nav-active")
      })
  })
  
  /* 滚动导航栏改变active */
  function scrollChangeNav(nav,element){
      let navNodes = document.querySelectorAll(nav)
      let elements = document.querySelectorAll(element)
      console.log(navNodes)
      console.log(elements)
      window.onscroll = ()=>{
          elements.forEach((ele, index)=>{
              let top = ele.getClientRects()[0].top
              let height = ele.getClientRects()[0].height
              if( -top <= height && top <= 0){
                  navElements.forEach( _navItem =>{
                       _navItem.classList.remove("nav-active")
                    })
                    navElements[index].classList.add("nav-active")
              }
          })
      }
  }
  scrollChangeNav(".nav li","[id^=section]")

var goTop = document.querySelector(".top")
goTop.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
})
window.addEventListener("scroll",(e)=>{
    if(window.scrollY<window.innerHeight){
        goTop.style.display="none"
    }else{
        goTop.style.display="block"
    }
})