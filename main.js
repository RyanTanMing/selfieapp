SpeechRecognition = window.webkitSpeechRecognition;
r = new SpeechRecognition()
function start() {
    document.getElementById("textbox").innerHTML = ''
    r.start()
}
r.onresult = function (event) { console.log(event)
content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content
speak()
 }
function speak() {
    s=window.speechSynthesis;
    speakdata=document.getElementById("textbox").value
utter=new SpeechSynthesisUtterance(speakdata)
s.speak(utter)
setTimeout(function () {
    takesnap()
    save()
},3000)
}
Webcam.set({
    width: 360,height: 360,image_format: "png",png_quality: 90
})
camera=document.getElementById("camera")
Webcam.attach(camera)
function takesnap() {
    Webcam.snap(function(dataurl){
        document.getElementById('result').innerHTML='<img id="selfie_image" src="'+dataurl+'">'
    })
}
function save() {
    link=document.getElementById("link")
    image=document.getElementById('selfie_image').src
    link.href=image
    link.click()
}