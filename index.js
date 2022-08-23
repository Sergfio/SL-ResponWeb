function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "./assets/images/img_bulboff.gif";
    } else {
      image.src = "./assets/images/img_bulbon.gif";
    }
  }