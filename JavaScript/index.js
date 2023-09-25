const slideBtns = document.querySelectorAll(".slide_conteiner")
const slideNames = document.querySelectorAll(".section_2_li_style")
const slidePhoto = document.querySelectorAll(".eye")

const prev = document.getElementById("leftArrow")
const next = document.getElementById("rightArrow")

let currentIndex = 0

function changeImage (imageIndex){
    slidePhoto.forEach((photo) => {
        photo.style.display = "none";
        })
    slidePhoto[imageIndex].style.display = "block"
}

changeImage(0)

function btnChange(){
    slideNames.forEach((name, index) =>{
        name.addEventListener("click", ()=>{
            changeImage(index);
            if(name.classList.contains("clicked")){
                name.style.color = "#E3B873"
                name.style.textDecoration = "underline;"
                name.classList.add("clicked");
            }else{
                name.style.color = "";
                name.style.textDecoration = "";
                name.classList.remove("clicked");
            }
        })
    })
    
    slideBtns.forEach((name, index) =>{
        name.addEventListener("click", ()=>{
            changeImage(index)
        })
    })

    prev.addEventListener("click", ()=>{
        changeImage(slidePhoto - 1);
        currentIndex -= 1;
    })
    
    prev.addEventListener("click", ()=>{
        changeImage(currentIndex + 1);
        currentIndex += 1;
    })
}


btnChange()
