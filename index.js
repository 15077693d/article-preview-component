const btn = document.querySelector(".share-icon-container")


let flag = true
const clickHandler = () => {
    const popUpLocation = document.querySelector("#pop-up-location")
    if (flag){
        popUpLocation.innerHTML = '<div id="pop-up"><div><span>SHARE</span><img alt=\
        "face-icon" title="face-icon" src="images/icon-facebook.svg"/><img alt="face-icon\
        "title="face-icon" src="images/icon-twitter.svg"/><img id="face-icon" alt="face-icon" title="face-icon" src="images/icon-pinterest.svg"/></div></div>'
        flag =false
        btn.classList.add("click")
    }
    else{
        popUpLocation.innerHTML = ""
        flag = true
        btn.classList.remove("click")
    }
}

btn.addEventListener("click", clickHandler)