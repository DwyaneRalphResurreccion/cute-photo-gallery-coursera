function upDate(previewPic){
    let displayDiv = document.getElementById("image");
    
    displayDiv.innerHTML = previewPic.alt;
    
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    displayDiv.style.color = "#ffffff";
}

function unDo(){
    let displayDiv = document.getElementById("image");
    
    displayDiv.style.backgroundImage = "url('')";
    
    displayDiv.innerHTML = "Hover over an image below to display here.";
    
    displayDiv.style.color = "#5d5d5d";
}

function addTabindex() {
    console.log("Adding tab indexes");
    let images = document.querySelectorAll(".preview");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}