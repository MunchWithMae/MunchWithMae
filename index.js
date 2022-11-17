let slideIndex = 1;
var timer;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function onImagesLoaded(container, event) {
    var images = container.getElementsByTagName("img");
    var loaded = images.length;
    for (var i = 0; i < images.length; i++) {
        if (images[i].complete) {
            loaded--;
        }
        else {
            images[i].addEventListener("load", function() {
                loaded--;
                if (loaded == 0) {
                    event();
                }
            });
        }
        if (loaded == 0) {
            event();
        }
    }
}





function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

  var container = document.getElementById("mainImageHolder");

  onImagesLoaded(container, function() {
      clearTimeout(timer);
      timer = setTimeout(() => plusSlides(1), 5000);
  });
}


let recipe = {
  name : "",
  link : "",
  description : "",
  image : ""
}

function recipeObject(name, link, description, image) {
  this.name = name;
  this.link = link;
  this.description = description;
  this.image = image;
}



let recipeNames = ["Massaman Curry", "Mushroom Celery Curry"]
let recipeDescriptions = ["A hearty, earthy curry that can be made in 25 minutes with minimal prep.", 
"a hearty, stick-to-your-ribs kind of meal that will always leave you satisfied on a hungry, cold night"]
let recipeImage = []
let recipeLink = [];

for (let i = 0; i < recipeNames.length; i++)
{
  let linky = recipeNames[i].replace(/ /g,"_");;
  recipeLink[i] = "Recipes\\"+recipeNames[i]+"\\"+linky+".html";
  console.log(recipeLink[i]);
}

for (let i = 0; i < recipeNames.length; i++)
{
  let linky2 = recipeNames[i].replace(/ /g,"_");;
  recipeImage[i] = "Recipes\\"+recipeNames[i]+"\\"+linky2+"\\image1.jpg";
  console.log(recipeImage[i]);
}


for (let i = 0; i < recipeNames.length; i++)
{
  recipeObject[i] = new recipeObject(recipeNames[i], recipeLink[i], recipeDescriptions[i], recipeImage[i])
}



console.log(recipeObject[1])