const speechBtn = document.querySelector(".texttospeechbBtn"),
inputText = document.querySelector(".quote"),
copyBtn = document.querySelector(".copy"),
voiceList = document.querySelector("select"),
credit = document.querySelector(".link"),
synth = speechSynthesis;
let isSpeaking = true;


function Voices () {
    for (let voice of synth.getVoices()) {
        let option1 = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML("beforeend",option1);
    }
}

synth.addEventListener("voiceschanged",Voices)

speechBtn.addEventListener("click", ()=>{
    if (inputText.value !== "") {
        if (!synth.speaking) {
            let utterance = new SpeechSynthesisUtterance(`${inputText.value}`);
            for(let voices of synth.getVoices()) {
                if (voices.name == voiceList.value) {
                    utterance.voice = voices;
                    synth.speak(utterance);
                };
            };
    };
        if (inputText.value.length > 80 ) {
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