document.getElementById("buttonContainer").addEventListener("click", () => {
  history.back();
});

let slideIndex = 1;
var timer;
showSlides(slideIndex);

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.1) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  clearTimeout(timer);
  //timer = setTimeout(() => plusSlides(1), 10000);
}

let directionsLength = document.querySelectorAll(".directions tr").length;

function boxChecked(element) {
  element.closest("tr").classList.toggle("completed");

  let numberChecked = document.getElementsByClassName("completed").length;

  if (numberChecked == directionsLength) {
    console.log("completed");

    // Get the modal
    var modalCG = document.getElementById("myModalCG");
    let pHead = document.querySelector(".modal-headerCG h1");
    let pOne = document.querySelector(".modal-headerCG p");
    let pTwo = document.querySelector(".modal-headerCG p:nth-child(4)");
    let pThree = document.querySelector(".modal-headerCG p:nth-child(6)");

    modalCG.style.display = "block";
    pHead.innerHTML =
      '<span class="ornament">[ </span>Congratulations<span class="ornament"> ]</span>';
    pOne.innerHTML = "You've completed this recipe!";
    pTwo.innerHTML = "I hope it's delicious!";
    pThree.innerHTML =
      "If you enjoy this recipe, please share it with your friends!";
    modalCG.style.display = "block";

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modalCG) {
        modalCG.style.display = "none";
      }
    };
  }
}

// Get the modal
var modalCG = document.getElementById("myModalCG");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("cancelButton");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let ingredientsCollapse = document.querySelector("#ingredientsContainer h2");

let ingredientsCollapseContainer = document.createElement("button");

ingredientsCollapseContainer.innerHTML = "[-]";

ingredientsCollapseContainer.classList.add("collapseIngredients");

ingredientsCollapse.appendChild(ingredientsCollapseContainer);

$(ingredientsCollapse).click(function () {
  let ingredientsTable = document.querySelector(
    "#ingredientsContainer .tableContainer"
  );
  ingredientsTable.classList.toggle("collapsed");

  if (ingredientsTable.classList.contains("collapsed")) {
    ingredientsCollapseContainer.innerHTML = "[+]";
  } else {
    ingredientsCollapseContainer.innerHTML = "[-]";
  }
  $(ingredientsTable).slideToggle("slow");
});





let directionsCollapse = document.querySelector("#directionsContainer h2");

let directionsCollapseContainer = document.createElement("button");

directionsCollapseContainer.innerHTML = "[-]";

directionsCollapseContainer.classList.add("collapseDirections");

directionsCollapse.appendChild(directionsCollapseContainer);

$(directionsCollapse).click(function () {
  let directionsTable = document.querySelector(
    "#directionsContainer .tableContainer"
  );
  directionsTable.classList.toggle("collapsed");

  if (directionsTable.classList.contains("collapsed")) {
    directionsCollapseContainer.innerHTML = "[+]";
  } else {
    directionsCollapseContainer.innerHTML = "[-]";
  }
  $(directionsTable).slideToggle("slow");
});

let ingredientsTable = document.querySelector("#ingredientsContainer div");

let url = document.getElementById("urlFill");
url.innerHTML = window.location.href;
url.style.overflow = "hidden";

function copyLinkFunc() {
  navigator.clipboard.writeText(window.location.href);
  $(".checkie").toggle(500);

  let pagewidth = document.body.offsetWidth;
  if (pagewidth > 1200){
    url.innerHTML = "Link copied! Thank you for sharing!";
  }else{
    url.innerHTML = "Link copied!";
  }
  
  timeout2 = setTimeout(changeLink, 3000);
  function changeLink() {
    url.innerHTML = window.location.href;
    $(".checkie").toggle(500);
  }
}

let recipeName = document.querySelector("#content h1").innerHTML;
let downloadLink = document.getElementById("downloadLink");
downloadLink.setAttribute("download", recipeName);

function shareModal() {
  let modalCG = document.getElementById("myModalCG");
  let pHead = document.querySelector(".modal-headerCG h1");
  let pOne = document.querySelector(".modal-headerCG p");
  let pTwo = document.querySelector(".modal-headerCG p:nth-child(4)");
  let pThree = document.querySelector(".modal-headerCG p:nth-child(6)");

  modalCG.style.display = "block";
  pHead.innerHTML =
    '<span class="ornament">[ </span>SHARE RECIPE<span class="ornament"> ]</span>';
  pOne.innerHTML = "Thank you for checking out this recipe!";
  pTwo.innerHTML =
    "If you liked it, please share it with your friends with the link below!";
  pThree.innerHTML = "";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modalCG) {
      modalCG.style.display = "none";
    }

    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

var cookingTime = document.querySelector(".circle").innerHTML;
var oldDateObj = new Date();
var newDateObj = new Date();
newDateObj.setTime(oldDateObj.getTime() + cookingTime * 60 * 1000);

let hours = newDateObj.getHours();
let minutes = newDateObj.getMinutes();

if (hours < 10) {
  hours = "0" + hours;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}
console.log(newDateObj);
console.log("ETA: " + hours + ":" + minutes);

let etaString =
  "If you began cooking now, you would finish around " + hours + ":" + minutes;

let estimated = document.getElementById("ETA");
estimated.innerHTML = etaString;

// var element = document.getElementById('content');
// html2pdf().from(element).save();

// function download(url) {
//   const a = document.createElement('a')
//   a.href = url
//   a.download = url.split('/').pop()
//   document.body.appendChild(a)
//   a.click()
//   document.body.removeChild(a)
// }
