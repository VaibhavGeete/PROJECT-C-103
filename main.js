Webcam.set(
{
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
}
);
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("output").innerHTML='<img src="'+data_uri+'"id="capture_image">';
    });
}
console.log('ml5version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aw8xmzrSs/model.json',modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded");
}    