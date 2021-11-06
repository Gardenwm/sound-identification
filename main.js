function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YrCWdJ3m_/model.json', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

var cat = 0;
var dog = 0;
var horse = 0;
var tiger = 0; 

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_times").innerHTML = 'Dog - '+dog+ ', Cat - '+cat+ ', Horse - '+horse+', Tiger - '+tiger;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_times").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('default_gif');

        if (results[0].label == "Barking") {
          img.src = 'dog.gif';
          dog = dog+1;
        }

        else if (results[0].label == "Meowing") {
          img.src = 'cat.gif';
          cat = cat + 1;
        } 
        
        else if (results[0].label == "Neighing") {
            img.src = 'horse.gif';
            horse = horse + 1;
        }

        else if (results[0].label == "Roaring") {
            img.src = 'tiger.gif';
            tiger = tiger + 1;
          } 

        else{
          img.src = 'listening.gif';
        }
    }
}
