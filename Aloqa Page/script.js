function navigationEduExp() {
    const leftItems = document.querySelectorAll(".contact-right .left");
    const rightItems = document.querySelectorAll(".contact-right .right");
    leftItems.forEach((i, o) => i.onclick = function () {
        rightItems[o].classList.toggle("opening")
        
    })
}
navigationEduExp()

function userConnectMeTgBot() {
    let form = document.querySelector("form")

    let bot = {
        TOKEN: "6718547391:AAEF_67eMIx3zTktxSVD-KUIwazDOd8ZMyc",
        chatID: "5126880787"
    }
    form.addEventListener("submit", e => {
        e.preventDefault();

        let msg = document.querySelector("#msg");
        let username = document.querySelector("#ism");
        let email = document.querySelector("#email");
        let information = `Ism: ${username.value} \n Email: ${email.value}\n Xabar: ${msg.value}`

        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${information}`, {
            method: "GET"
        })
            .then(success => {
            alert("Xabar yuborildi! \nElektron pochtangizga izoh qoldiriladi, salomat bo'ling!")
            }, error => {
                alert("Xabar yuborilmadi!")
                console.log(error);
            })
    
    
        

    })
}
userConnectMeTgBot()