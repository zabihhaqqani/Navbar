// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// selecting button and links
const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

//adding and removing classes using add and remove
// navToggle.addEventListener("click",function(){
    
//     if(links.classList.contains("show-links")){
//         links.classList.remove("show-links")
//     }
//     else{
//         links.classList.add("show-links")
//     }
// })

// to add and remove classes - toggle

navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links")
})
