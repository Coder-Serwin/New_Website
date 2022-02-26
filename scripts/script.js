const speechBtn = document.querySelector(".texttospeechbBtn"),
inputText = document.querySelector(".quote"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;


speechBtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${inputText.value}`);
    synth.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(inputText.value);
});