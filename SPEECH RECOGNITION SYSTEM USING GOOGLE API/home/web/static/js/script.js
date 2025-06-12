click_to_convert.addEventListener('click',function(){
    var speech=true;
    window.SpeechRecognition=window.webkitSpeechRecognition;
    const Recognition = new SpeechRecognition();

    Recognition.addEventListener('result',e=>{
        const transcript=Array.from(e.results)
        .map(result=>result[0])
        .map(result=>result.transcript)

        convert_text.innerHTML+= ' ' + transcript;
    })
    if(speech==true){
        Recognition.start();
    }
})

document.getElementById("download_pdf").addEventListener("click", downloadPDF);

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const text = document.getElementById("convert_text").value;

    doc.text(text, 10, 10); 
    doc.save("Voice_to_Text.pdf"); 
}
