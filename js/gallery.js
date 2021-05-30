function upDate(previewPic){
  
    document.getElementById('image').style.background = "url(" + previewPic.src + ") #8e68ff";
   
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo(){
    var img = document.getElementById('image');

    img.style.background = "#8e68ff";

    img.innerHTML= "Hover over an image below to display here.";
}
