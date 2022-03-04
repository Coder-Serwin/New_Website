const speechBtn = document.querySelector(".texttospeechbBtn"),
inputText = document.querySelector(".quote"),
copyBtn = document.querySelector(".copy"),
credit = document.querySelector(".link"),
synth = speechSynthesis;
let isSpeaking = true;

speechBtn.addEventListener("click", ()=>{
    if (inputText.value !== "") {
        if (!synth.speaking) {
            let utterance = new SpeechSynthesisUtterance(`${inputText.value}`);
            synth.speak(utterance);
    };
        if (inputText.value.length > 210000000 ) {
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                speechBtn.innerText = "Pause Speech";
            }else {
                synth.pause();
                isSpeaking = true;
                speechBtn.innerText = "Resume Speech";
            };
        };
};
});

credit.addEventListener("click", ()=>{
    let url = "https://www.youtube.com/channel/UCKE1e1IcGQnpDDzA-cddraw";
    window.open(url,"_blank");
});

copyBtn.addEventListener("click", ()=>{
    if (inputText.value !== "") {
    navigator.clipboard.writeText(inputText.value);
    }
});