const slideBtns = document.querySelectorAll(".slide_conteiner")
const slideNames = document.querySelectorAll(".section_2_li_style")
const slidePhoto = document.querySelectorAll(".photo_hero2")

const prev = document.getElementById("leftArrow")
const next = document.getElementById("rightArrow")

let currentIndex = 0;

function changeImage (imageIndex){
    slidePhoto.forEach((photo) => {
        photo.style.display = "none";
        })
    slidePhoto[imageIndex].style.display = "block"
    changeTextName()
}

changeImage(0)


function changeTextName(){
    slideNames.forEach((name, index) =>{
        if(index === currentIndex){
            name.classList.add("clicked")
        }else{
            name.classList.remove("clicked")
        }
    })

    slideBtns.forEach((name, index) => {
        if(index === currentIndex){
            name.classList.add("push")
        }else{
            name.classList.remove("push")
        }
    })
}

function btnChange(){
    slideNames.forEach((name, index) =>{
        name.addEventListener("click", ()=>{
            currentIndex = index
            changeImage(index)
        })
    })
    
    slideBtns.forEach((name, index) =>{
        name.addEventListener("click", ()=>{
            currentIndex = index
            changeImage(index)
        })
    })

    prev.addEventListener("click", ()=>{
        if(currentIndex === 0){
            currentIndex = slidePhoto.length - 1;
        }else{
            currentIndex -=1;
        }
        changeImage(currentIndex); 
    })
    
    next.addEventListener("click", ()=>{
        if(currentIndex === slidePhoto.length - 1){
            currentIndex = 0;
        }else{
            currentIndex +=1;
        }
        changeImage(currentIndex); 
    })
}


btnChange()
