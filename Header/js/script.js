// Setting Color Site
document.querySelector(".settingClr").onclick = () => {

    document.querySelector('.clrs').classList.toggle("block");
    
}

// Color system
function colorTxt() {
    let toggle = document.getElementById("colorSystem");

    toggle.addEventListener("click", function () {
        this.classList.toggle("fa-cubes");
    })
    const colorSelector = document.querySelectorAll('.clrs li');
    let colorList = ['#00ff00','#a9a9a9','#ffff00','#dc143c']
    colorSelector.forEach((clrSelector, i) => {
        clrSelector.addEventListener('click', function () {
            
            const selectedColor = colorList[i];
        
            const specialTextElements = document.querySelectorAll('.clr');
            specialTextElements.forEach(function(element) {
                element.style.color = selectedColor;
          });
        });
    })
}

// Aside open 
function aside() {
    const btn = document.querySelector('.menu');
    const btnClosed = document.querySelector('.fa-close');
    const navigation = document.querySelector('.aside');
    const navigationItems = document.querySelectorAll('.aside a');

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        navigation.classList.toggle('active')
    })


    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            btn.classList.remove('active');
            navigation.classList.remove('active');
        })
    })
    btnClosed.addEventListener('click', () => {
        navigation.classList.remove('active');
    })
}

function goToPages() {
    const buttonsLink = document.querySelectorAll(".menu-list button")
    const adress = [
        "./index.html",
        "/Loyihalar/index.html",
        "/Aloqa Page/index.html",
        "/Aloqa Page/index.html",
        "/Aloqa Page/index.html",
    ]
    buttonsLink[3].addEventListener("click", () => {
        window.location.href = adress[3]
    })
    // aloqa.addEventListener('click', () => {
    //     window.location.href = "/Aloqa Page/index.html";
    // })
} 
// Dark Light Mode
function darkLightMode() {
    let toggle = document.getElementById("mode");
    let body = document.querySelector("body");
    let header = document.querySelector("header");
    toggle.addEventListener("click", function () {
        this.classList.toggle("fa-moon-o");
        body.classList.toggle("azure")
        header.classList.toggle("cornsilk")
    })
}
// Already All Funtions
function startFunctions() {
    // screenDarkMode()
    aside()
    colorTxt()
    goToPages()
    // darkLightMode()
}
startFunctions()