const speechBtn = document.querySelector(".texttospeechbBtn"),
inputText = document.querySelector(".quote"),
copyBtn = document.querySelector(".copy"),
credit = document.querySelector(".link"),
synth = speechSynthesis;


speechBtn.addEventListener("click", ()=>{
    if (!synth.speaking) {
    let utterance = new SpeechSynthesisUtterance(`${inputText.value}`);
    synth.speak(utterance);
}
});

credit.addEventListener("click", ()=>{
    location.replace("www.youtube.com");
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputText.value);
});