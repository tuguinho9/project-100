var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function save()
{
    recognition.start();
} 

recognition.onresult = function(event) {
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content == "selfie") {
        speak();
    }
}
camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speakData = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

    setTimeout(function() {
        imageId = "resultado1";
        takeSelfie();
        speakData = "Tirando sua selfie em 10 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    },5000);

    setTimeout(function() {
        imageId = "resultado2";
        takeSelfie();
        speakData = "Tirando sua selfie em 15 segundos";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    },10000);

    setTimeout(function() {
        imageId = "resultado3";
        takeSelfie();
    },15000);
}
function takeSelfie() {
    console.log(imageId);
    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
                document.getElementById("resultado1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("resultado2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("resultado3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}