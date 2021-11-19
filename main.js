https://teachablemachine.withgoogle.com/models/l2FUOAvOc/
function Startclassification(){
 navigator.mediaDevices.getUserMedia({ audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/l2FUOAvOc/model.json",modelready)
}
function modelready(){
classifier.classify(gotresult)    
}
function gotresult(error,result){
if(error)    {
 console.error(error);   
}
else{
console.log(result)
soundname=result[0].label;
confidence=(result[0].confidence*100).toFixed(2)
document.getElementById("soundname").innerHTML="I can hear   "+ soundname;
document.getElementById("soundconfidence").innerHTML='Accuracy  -'+confidence;
r=Math.floor(Math.random()*255)+1
g=Math.floor(Math.random()*255)+1
b=Math.floor(Math.random()*255)+1
document.getElementById("soundname").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("soundconfidence").style.color="rgb("+r+","+g+","+b+")";
img1=document.getElementById('alien1')
img2=document.getElementById('alien2')
img3=document.getElementById('alien3')
img4=document.getElementById('alien4')
if (soundname=="clapping"){
img1.src="alien-01.gif"
img2.src="aliens-02.png"    
img3.src="aliens-03.png"   
img4.src="aliens-04.png"         
}
else if(soundname=="snapping"){
img1.src="aliens-01.png" 
img2.src="aliens-02.gif"  
img3.src="aliens-03.png" 
img4.src="aliens-04.png"    
}

}
}