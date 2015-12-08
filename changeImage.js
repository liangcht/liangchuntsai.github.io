
var image_array = ["Yosemite.jpg", "Yosemite_2.jpg", "Yosemite_3.jpg", "Yosemite_4.jpg", "Yosemite_5.jpg"];
var current_img = 0;
var image = document.getElementById('myImage2');
image.src = "images/" + image_array[current_img];

function changeImageTwoPhotos() {

    var image = document.getElementById('myImage');
    if (image.src.match("images/IMG_4051.jpg")) {
        image.src = "images/IMG_8492.jpg";
    } else {
        image.src = "images/IMG_4051.jpg";
    }
}

function changeImagePhotoArray() {

    var image = document.getElementById('myImage2');
    if (current_img < image_array.length -1 ) {
    	current_img += 1;
        image.src = "images/" + image_array[current_img];
    } else {
    	current_img = 0;
        image.src = "images/" + image_array[current_img];
    }
}