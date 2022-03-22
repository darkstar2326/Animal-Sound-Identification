function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/RODAjTT2t/model.json" , modelloaded);
}

function modelloaded(){
    console.log("Model is Loaded");
    classifier.classify(gotressults);
}

function gotressults(error,result){
    if(error){
        alert("We Encountered an Unknown Error!!")
    }
    else{
        console.log(result);
        document.getElementById("audio_name").innerHTML = "I Can Hear:" + " " + result[0].label;
        document.getElementById("accuracy").innerHTML = "Accuracy:" + " " + (result[0].confidence*100).toFixed(1) + "%";
        var red = Math.floor(Math.random()*255);
        var green = Math.floor(Math.random()*255);
        var blue = Math.floor(Math.random()*255);
        var red2 = Math.floor(Math.random()*255);
        var green2 = Math.floor(Math.random()*255);
        var blue2 = Math.floor(Math.random()*255);
        document.getElementById("audio_name").style.color = "rgb("+red+" , "+green+" , "+blue+")";
        document.getElementById("accuracy").style.color = "rgb("+red2+" , "+green2+" , "+blue2+")";

        if(result[0].label == "Mooing"){
            document.getElementById("img").src = "cow.png";
        }
        else if(result[0].label == "Meowing"){
            document.getElementById("img").src = "cat.png";   
        }
        else if(result[0].label == "Roaring"){
            document.getElementById("img").src = "lion.png";   
        }
        else if(result[0].label == "Background Noise"){
            document.getElementById("img").src = "back.png";
        }
        else if(result[0].label == "Barking"){
            document.getElementById("img").src = "dog.png";
        }
        else{
            document.getElementById("img").src= "ear.png";
        }
    }
}