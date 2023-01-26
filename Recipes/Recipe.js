// document.getElementById("backButtonContainer").addEventListener("click", () => {
//   history.back();
// });

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

    //modalCG.style.display = "block";
    $(modalCG).fadeIn();
    pHead.innerHTML =
      '<span class="ornament">[ </span>Congratulations<span class="ornament"> ]</span>';
    pOne.innerHTML = "You've completed this recipe!";
    pTwo.innerHTML = "I hope it's delicious!";
    pThree.innerHTML = "If you enjoy this recipe, please share it with your friends!";
    //modalCG.style.display = "block";
    $(modalCG).fadeIn();

    // When the user clicks anywhere outside of the modal, close it
    // !window.onclick = function (event) {
    // !  if (event.target == modalCG) {
    // !    // modalCG.style.display = "none";
    // !    $(modalCG).fadeOut();
    // !  }
    // !};
  }
}

let ingredientsCollapse = document.querySelector("#ingredientsContainer h2");

let ingredientsCollapseContainer = document.createElement("button");

ingredientsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-up'></i>";

ingredientsCollapseContainer.classList.add("collapseIngredients");

ingredientsCollapse.appendChild(ingredientsCollapseContainer);

$(ingredientsCollapseContainer).click(function () {
  let ingredientsTable = document.querySelector("#ingredientsContainer .tableContainer");
  var width = $(window).width();

  ingredientsTable.classList.toggle("collapsed");

  if (ingredientsTable.classList.contains("collapsed")) {
    // ingredientsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-down'></i>";
    if (width < 600) {
      $(ingredientsCollapseContainer).find("i").css("transform", "rotateX(180deg) translateY(25%)");
    } else {
      $(ingredientsCollapseContainer).find("i").css("transform", "rotateX(180deg)");
    }
  } else {
    // ingredientsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-up'></i>";
    if (width < 600) {
      $(ingredientsCollapseContainer).find("i").css("transform", "rotateX(0) translateY(-25%)");
    } else {
      $(ingredientsCollapseContainer).find("i").css("transform", "rotateX(0)");
    }
  }
  $(ingredientsTable).slideToggle("slow");
});

let directionsCollapse = document.querySelector("#directionsContainer h2");

let directionsCollapseContainer = document.createElement("button");

directionsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-up'></i>";

directionsCollapseContainer.classList.add("collapseDirections");

directionsCollapse.appendChild(directionsCollapseContainer);

$(directionsCollapseContainer).click(function () {
  let directionsTable = document.querySelector("#directionsContainer .tableContainer");
  var width = $(window).width();
  directionsTable.classList.toggle("collapsed");

  if (directionsTable.classList.contains("collapsed")) {
    // directionsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-down'></i>";
    if (width < 600) {
      $(directionsCollapseContainer).find("i").css("transform", "rotateX(180deg) translateY(25%)");
    } else {
      $(directionsCollapseContainer).find("i").css("transform", "rotateX(180deg)");
    }
  } else {
    // directionsCollapseContainer.innerHTML = "<i class='fa-solid fa-angles-up'></i>";
    if (width < 600) {
      $(directionsCollapseContainer).find("i").css("transform", "rotateX(0) translateY(-25%)");
    } else {
      $(directionsCollapseContainer).find("i").css("transform", "rotateX(0)");
    }
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
  if (pagewidth > 1200) {
    url.innerHTML = "Link copied! Thank you for sharing!";
  } else {
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

  // modalCG.style.display = "block";
  $(modalCG).fadeIn();
  pHead.innerHTML = '<span class="ornament">[ </span>SHARE RECIPE<span class="ornament"> ]</span>';
  pOne.innerHTML = "Thank you for checking out this recipe!";
  pTwo.innerHTML = "If you liked it, please share it with your friends with the link below!";
  pThree.innerHTML = "";

  // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
  //   if (event.target == modalCG) {
  //     // modalCG.style.display = "none";
  //     $(modalCG).fadeOut();
  //   }

  //   if (event.target == modal) {
  //     // modal.style.display = "none";
  //     $(modalCG).fadeOut();
  //   }
  // };
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

let etaString = "If you began cooking now, you would finish around " + hours + ":" + minutes;

let estimated = document.getElementById("ETA");
estimated.innerHTML = etaString;

let fbshare = document.querySelector(".fbshare");
linkStringFB = "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href;
fbshare.setAttribute("href", linkStringFB);

let twtShare = document.querySelector(".twitter-share-button");
linkStringTWT =
  "https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20recipe%20I%20just%20got%20from%20https://www.munchwithmae.github.io.%0A%0AYou%20can%20find%20the%20recipe%20here!%0A" +
  window.location.href;
twtShare.setAttribute("href", linkStringTWT);

let waShare = document.querySelector(".whatsApp-share-button");
linkStringWA =
  "https://api.whatsapp.com/send/?text=" +
  window.location.href +
  "%2F&type=custom_url&app_absent=0";
waShare.setAttribute("href", linkStringWA);

let redditShare = document.querySelector(".reddit-share-button");
linkStringReddit =
  "https://www.reddit.com/submit?url=" +
  window.location.href +
  "/&title=Check%20out%20this%20awesome%20recipe%20I%20found%20on%20munchwithmae.github.io";
redditShare.setAttribute("href", linkStringReddit);

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

//! jquery loaded
$(document).ready(function () {
  //* Action buttons image text functions

  $("#downloadLink").mouseenter(function () {
    $(".actionText").css("display", "none");
    // $(this).find("span").fadeIn(600);
    // $(this).find("button").css("width", "150%");
    var width = $(window).width();
    if (width > 1020) {
      $(this)
        .find("button")
        .animate(
          {
            width: "150%",
          },
          500,
          function () {
            $(this).find("span").fadeIn(500);
          }
        );
    }
  });

  $("#downloadLink").mouseleave(function () {
    // $(this).find("span").fadeOut(400);
    // $(this).find("button").css("width", "100%");
    var width = $(window).width();
    if (width > 1020) {
      $(this)
        .find("button")
        .animate(
          {
            width: "100%",
          },
          0,
          function () {
            $(this).find("span").fadeOut(200);
          }
        );
    }
  });

  $("#printButton").mouseenter(function () {
    var width = $(window).width();
    if (width > 1020) {
      $(".actionText").css("display", "none");
      $(this).animate(
        {
          width: "150%",
        },
        500,
        function () {
          $(this).find("span").fadeIn(500);
        }
      );
    }
  });

  $("#printButton").mouseleave(function () {
    var width = $(window).width();
    if (width > 1020) {
      $(this).animate(
        {
          width: "100%",
        },
        0,
        function () {
          $(this).find("span").fadeOut(200);
        }
      );
    }
  });

  $("#sharebutton").mouseenter(function () {
    var width = $(window).width();
    if (width > 1020) {
      $(".actionText").css("display", "none");
      $(this).animate(
        {
          width: "150%",
        },
        500,
        function () {
          $(this).find("span").fadeIn(500);
        }
      );
    }
  });

  $("#sharebutton").mouseleave(function () {
    var width = $(window).width();
    if (width > 1020) {
      $(this).animate(
        {
          width: "100%",
        },
        0,
        function () {
          $(this).find("span").fadeOut(200);
        }
      );
    }
  });

  $("#resetButton").click(function () {
    $(".container input").prop("checked", false);
    $("#directionsContainer tr").removeClass("completed");
  });

  $("#backButtonContainer").click(function(){
    var element = document.getElementById('content');
    html2pdf(element);
    //history.back();
  });

  
  //html2pdf(element);

}); //! end document.ready
