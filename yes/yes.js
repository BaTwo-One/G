const memeImg = document.getElementById("meme");
const yes = document.getElementById("yes");
const yes1 = document.getElementById("yes1");
const no = document.getElementById("no1");
const test = document.getElementById("text");
const audio = document.getElementById("audioPlayer");
const audio1 = document.getElementById("audio");
audioPlayer.volume = 0.3;
audio1.volume = 0.2;


function myFunction() {
    audio1.play();
    test.innerHTML = "TAKLA X4!";
    test.style.color = "red";
    test.style.fontSize = "20px"
    no.style.display = "none";
}

no.addEventListener("click", myFunction);





 //!Evet kısmı
 function showCustomConfirm() {

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
        audio.play();
        yes.style.display = "none";
        yes1.style.display = "none";

        const newSrc = "error/cenk.png";
        memeImg.src = newSrc;
        no.style.display = "none";
        text.innerHTML = "Zamanını boşa harcattığın için teşekkkürler. 👍"

        confirmationBox.remove();
    });

    noButton.addEventListener("click", function() {
        noButton.innerHTML = "Takla"
        text.innerHTML = ":D"

        const newSrc = "error/mal.png";
        memeImg.src = newSrc;

    });
    
    document.body.appendChild(confirmationBox);

}
