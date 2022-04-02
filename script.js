let lighting_mode = document.querySelector(".lighting_mode_phone ul");
let links = document.querySelector(".links");

lighting_mode.onclick = function () {
    if (links.hasAttribute("title") === true ) {
        links.style.display = "block";
        links.removeAttribute("title")
    } else if (links.hasAttribute("title") === false) {
        links.style.display = "none";
        links.setAttribute("title", "links")
    }
   }


let dark_mode = document.getElementById("dark_mode");
let light_mode = document.getElementById("light_mode");
let lighting_mode_image = document.querySelector(".lighting_mode_phone ul li .light_mode_image");


let textear = document.querySelector("#textear")
let output = document.querySelector("#output")
let h3 = document.getElementById("h3")
let h3cy = document.getElementById("Cypher")
let byIshakAmzil = document .getElementById("ishak")






light_mode.onclick = function () {
    lighting_mode_image.setAttribute("src", "image/sunny.png");
    links.style.display = "none";
   document.body.style.cssText = "background-color: #BAE8E8; color: black;"
   textear.style.cssText = " background-color: #EFFBFF ; color: black;"
   output.style.cssText = " background-color: #EFFBFF ; color: rgb(101, 200, 1);"
   h3.style.cssText = " background-color: #EFFBFF ; color: black;"
   h3cy.style.cssText = " background-color: #EFFBFF ; color: black;"
   byIshakAmzil.style.cssText = "color: black;"

    
}

dark_mode.onclick = function () {
    links.style.display = "none"
    lighting_mode_image.setAttribute("src", "image/crescent.png")
    document.body.style.cssText = "background-color: #1A1B2F; color: color: white;;"
    textear.style.cssText = "background-color: #162447; color: ghostwhite;"
    output.style.cssText = " background-color: #162447; color: ghostwhite;"
    h3.style.cssText = "background-color: #162447; color: ghostwhite"
    h3cy.style.cssText = " background-color: #162447; color: ghostwhite"
    byIshakAmzil.style.cssText = "color: white;"
 
     
}








window.onload = function () {
 textear.innerHTML =  localStorage.getItem("input")
}

let change = document.querySelector("#change");
let main = document.querySelector(".main");


change.onclick = function () {
    if (main.hasAttribute("title") === true ) {
        encode()
        main.removeAttribute("title")
    } else if (main.hasAttribute("title") === false) {
        code()
        main.setAttribute("title", "code")
    }
};



function encode() {
    h3.innerHTML = "Cipher Text"
    h3cy.innerHTML = " Encode Text "

    play.onclick = function () {
        output.innerText = atob(textear.value);
        window.localStorage.setItem("input", textear.value)
       }

    play.innerHTML = "Encode"
}

play.onclick = function () {
    output.innerText = btoa(textear.value);
    window.localStorage.setItem("input", textear.value)
   }

function code() {
    h3.innerHTML = "Text"
    h3cy.innerHTML = " Cipher Text"


    play.innerHTML = "Cipher"
}


let smbutt = document.querySelector("#sm")
let smLinks = document.querySelector(".linksSoc");

smbutt.onclick = function () {
    if (smLinks.hasAttribute("title") === true ) {
        smLinks.style.display = "block";
        smLinks.removeAttribute("title")
    } else if (smLinks.hasAttribute("title") === false) {
        smLinks.style.display = "none";
        smLinks.setAttribute("title", "SM")
    }
   }



