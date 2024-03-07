
const memeImg = document.getElementById("meme");
const btnNo = document.getElementById("no");
const btnNoBug = document.getElementById("noBug");
const btnYes = document.getElementById("yes");
const fake = document.getElementById("fakeNo");
const text = document.getElementById("text");
const info = document.getElementById("info");
const rage = document.getElementById("rage");

btnNoBug.style.display = "none";






function playVideo() {
    var videoURL = "https://www.youtube.com/watch?v=qRjLS1m2Lao" + "?autoplay=1";
    window.open(videoURL, "_blank");
    window.location.reload();
}





//!Hayır kısmı
var clicks = 1;

function increaseCounter() {

    clicks += 1;
    

    switch (clicks) {
        case 2:
            myFunctions.devam()
            showCustomConfirm(remove())
            break;
        case 3:
            myFunctions.devam1()
            break;
        case 4:
            myFunctions.devam2()
            break;
        case 5:
            myFunctions.devam3()
            break;
        case 6:
            myFunctions.devam4()
            break;
        case 7:
            myFunctions.devam5()
            break;  
        case 8:
            myFunctions.devam6()   
            break; 
        case 9:  
            myFunctions.devam7()
            break;        
    }

};


class myFunctions {

    static devam(){
        btnNo.style.display = "flex";
        btnNo.style.position = "absolute";
        btnNo.style.marginTop = "200px";
        btnNo.style.marginRight = "900px";
        rage.style.display = "block";
        text.innerHTML = "NEO, O BUTONU YAKALAMAN LAZIM!";
    }
    static devam1(){
        btnNo.style.marginTop = "200px";
        btnNo.style.marginLeft = "400px";
    }
    static devam2(){
        btnNo.style.marginTop = "3px";
        btnNo.style.marginRight = "100px";
    }
    static devam3(){
        btnNo.style.marginTop = "150px";
        btnNo.style.marginRight = "900px";
    }
    static devam4(){
        yes.innerHTML = "😲";
        rage.innerHTML = "ups..";
        text.innerHTML = "LANET OLSUN NEO, BUTON AŞAĞI DÜŞTÜ ADAMIM!";
        text.style.color = "red";
        btnNo.style.marginTop = "1000px"
        btnNo.style.position = "relative";
        btnNo.style.marginBottom = "200px";
    }
    static devam5(){
        rage.style.display = "flex";
        rage.innerHTML = "HOOUP TAKLA X2!";
        rage.style.marginTop = "1000px";
        rage.style.fontSize = "20px";
    }
    static devam6(){
        rage.innerHTML = "X3 !!TAKLA!! X3!";
        rage.style.fontSize = "40px";
        rage.style.marginLeft = "200px";
        rage.style.marginTop = "2000px";
    
        startBackgroundColorAnimation()
    
        function startBackgroundColorAnimation() {
            var body = document.body;
            var opacity = 0.1;
            var interval = setInterval(function() {
                if (opacity >= 0.8) {
                    clearInterval(interval);
                } else {
                    opacity += 0.1;
                    body.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
                }
            }, 100);
            btnNo.removeEventListener('mouseenter', startBackgroundColorAnimation);
        }
    }
    static devam7() {
        rage.innerHTML = "Ahh.. sanırım bir şey bozuldu?";
        btnNoBug.style.marginTop = "1000px";
        btnNoBug.style.position = "relative";
        btnNoBug.style.marginBottom = "200px";
        btnNo.style.display = "none";
        btnNoBug.style.display = "flex";
        rage.style.color = "Blue";
        rage.style.fontSize = "20px";
        rage.style.marginLeft = "200px";
        rage.style.marginTop = "3000px";
        btnNoBug.innerHTML = "Reset";
    }
}



    //!Evet kısmı
function showCustomConfirm() {


    const newSrc = "error/angry.png";
    memeImg.src = newSrc;
    text.innerHTML = "!¿NEO!?";

    btnNo.addEventListener("mouseenter", function() {
        btnNo.style.display = "none";
        rage.style.display = "block";
        rage.innerHTML = "CİDDEN HALA UĞRAŞIYOR MUSUN?";
    });
    
   
    // Onay kutusunu içeren bir div oluştur
    var confirmationBox = document.createElement("div");
    confirmationBox.innerHTML = `
        <div>Emin misin?</div>
        <button id="yesButton">Evet</button>
        <button id="noButton">Hayır</button>
    `;
    confirmationBox.style.border = "1px solid #ccc";
    confirmationBox.style.padding = "20px";
    confirmationBox.style.backgroundColor = "#f9f9f9";
    confirmationBox.style.width = "200px";
    confirmationBox.style.position = "absolute";
    confirmationBox.style.top = "50%";
    confirmationBox.style.left = "50%";
    confirmationBox.style.transform = "translate(-50%, -50%)";
    confirmationBox.style.textAlign = "center";
    
    var yesButton = confirmationBox.querySelector("#yesButton");
    var noButton = confirmationBox.querySelector("#noButton");
    
    yesButton.addEventListener("click", function() {
        alert("YANLIŞ YOLU SEÇTİN NEO!");
        window.location.reload();
        confirmationBox.remove();
    });
    
    noButton.addEventListener("click", function() {
        noButton.innerHTML = "TAKLAE!!"

    });
    
    document.body.appendChild(confirmationBox);
}




