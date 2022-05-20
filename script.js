// Obtain the img element, and assign it to the image variable
let image = document.getElementById('pet')

// Obtain the 'shrink-grow' button, and assign it to the changeSize variable
// author's note: for some reason, it makes it smaller but the resizing works fine after a few clicks. so it fixes itself out.
let changeSize = document.getElementById('sizething')

//DO NOT CHANGE THE FOLLOWING CODE
changeSize.addEventListener("click", function() {
  if (image.style.height == "100px") {
    image.style.height = "25px"
  }
  else {
    image.style.height = "100px"
  }
})