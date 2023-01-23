/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let slideIndex = 1;
var timer;

const $e = document.getElementById.bind(document);
const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function onImagesLoaded(container, event) {
  var images = container.getElementsByTagName("img");
  var loaded = images.length;
  for (var i = 0; i < images.length; i++) {
    if (images[i].complete) {
      loaded--;
    } else {
      images[i].addEventListener("load", function () {
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
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  var container = document.getElementById("mainImageHolder");

  onImagesLoaded(container, function () {
    clearTimeout(timer);
    timer = setTimeout(() => plusSlides(1), 5000);
  });
}

$(document).ready(function () {
  console.log("Ready!");

  showSlides(slideIndex);

  function recipeObject(name, link, description, image) {
    this.name = name;
    this.link = link;
    this.description = description;
    this.image = image;
  }

  let recipeNames = [
    "Massaman Curry",
    "Mushroom Celery Curry",
    "Chicken Alfredo",
    "Hoisin Stir Fry & Spicy Peanut Sauce",
  ];
  let recipeDescriptions = [
    "A hearty, earthy curry that can be made in 25 minutes with minimal prep.",
    "a hearty, stick-to-your-ribs kind of meal that will always leave you satisfied on a hungry, cold night",
    "You can never go wrong with a classic chicken alfredo. It's quick, nearly impossible to mess up, and takes just about as long as heating up a jar of store bought sauce would.",
    "A sweet and spicy stir fry that will never let you down with its unique flavor & texture",
  ];
  let recipeImage = [];
  let recipeLink = [];

  for (let i = 0; i < recipeNames.length; i++) {
    let linky = recipeNames[i].replace(/ /g, "_");
    recipeLink[i] = "Recipes\\" + recipeNames[i] + "\\" + linky + ".html";
    //console.log(recipeLink[i]);
  }

  for (let i = 0; i < recipeNames.length; i++) {
    let linky2 = recipeNames[i].replace(/ /g, "_");
    recipeImage[i] = "Recipes\\" + recipeNames[i] + "\\image1.jpg";
    //console.log(recipeImage[i]);
  }

  for (let i = 0; i < recipeNames.length; i++) {
    recipeObject[i] = new recipeObject(
      recipeNames[i],
      recipeLink[i],
      recipeDescriptions[i],
      recipeImage[i]
    );
  }

  for (let i = 0; i < recipeNames.length; i++) {
    let recipeBox = document.getElementById("recipeBox");

    let newDivRecipe = document.createElement("div");
    newDivRecipe.classList.add("recipe");

    recipeBox.appendChild(newDivRecipe);

    let newDivRecipeContent = document.createElement("div");
    newDivRecipeContent.classList.add("recipeContent");

    newDivRecipe.appendChild(newDivRecipeContent);

    let a = document.createElement("a");

    let recipeLinkText = document.createTextNode("");
    a.appendChild(recipeLinkText);

    a.title = recipeObject[i].name;

    a.href = String(recipeObject[i].link);

    a.classList.add("recipeLink");

    let newDivLinkParent = a;

    let recipeTitle = document.createElement("h3");

    let recipeTitleText = document.createTextNode(recipeObject[i].name);

    recipeTitle.appendChild(recipeTitleText);

    let recipeCollapseContainer = document.createElement("button");

    recipeCollapseContainer.innerHTML = "[-]";

    let recipePreviewContainer = document.createElement("button");
    recipePreviewContainer.classList.add("previewRecipe");
    recipeCollapseContainer.classList.add("collapseRecipe");

    recipePreviewContainer.innerHTML = "Preview";

    newDivRecipeContent.appendChild(recipePreviewContainer);
    newDivRecipeContent.appendChild(a);
    newDivRecipeContent.appendChild(recipeCollapseContainer);

    newDivLinkParent.appendChild(recipeTitle);

    recipeTitle.appendChild(recipeTitleText);

    newDivLinkParent.appendChild(recipeTitle);

    let recipeImage = document.createElement("img");
    //console.log(recipeObject[i].image);
    recipeImage.src = String(recipeObject[i].image);
    newDivLinkParent.appendChild(recipeImage);

    recipeCollapseContainer.onclick = function () {
      recipeImage.classList.toggle("collapsed");
      $(recipeImage).slideToggle();
      newDivRecipe.classList.toggle("collapsedHeight");
      recipePreviewButton = $$$(".previewRecipe");

      if (recipeImage.classList.contains("collapsed")) {
        recipeCollapseContainer.innerHTML = "[+]";
        recipeCollapseContainer.style.backgroundImage = "url('Images/maximize.png')";
        recipeCollapseContainer.style.backgroundSize = "contain";
        if (!$("#myonoffswitchPreview").parent().find("span:nth-child(2)").hasClass("burnEgg")) {
          $(recipePreviewButton[i]).toggle(300);
        }
      } else {
        recipeCollapseContainer.innerHTML = "[-]";
        recipeCollapseContainer.style.backgroundImage = "url('Images/collapse.png')";
        recipeCollapseContainer.style.backgroundSize = "contain";
        if (!$("#myonoffswitchPreview").parent().find("span:nth-child(2)").hasClass("burnEgg")) {
          $(recipePreviewButton[i]).toggle(300);
        }
      }
    };

    let newRecipeDescription = document.createElement("div");
    newRecipeDescription.classList.add("recipeDescription");
    let newRecipeDescriptionInner = document.createElement("p");
    let newRecipeDescriptionInnerText = document.createTextNode(recipeObject[i].description);
    newRecipeDescriptionInner.appendChild(newRecipeDescriptionInnerText);
    newRecipeDescription.appendChild(newRecipeDescriptionInner);
    newDivRecipe.appendChild(newRecipeDescription);

    recipePreviewContainer.onclick = function () {
      //alert(recipePreviewContainer.iframeBox)
      //iframeBox.classList.toggle("iframeOpen");
      let modalBg = $e("myModalBg");
      let modalInner = $e("modalInner");
      let iframeBox = document.createElement("iframe");
      iframeBox.src = recipeObject[i].link;
      iframeBox.classList.add("iframeBox");
      modalInner.appendChild(iframeBox);
      $(modalBg).fadeToggle(1200);

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modalBg) {
          $(modalBg).fadeToggle(500);
          iframeBox.classList.toggle("iframeOpen");
          iframeBox.remove();
        }

        if (event.target == modalInner) {
          $(modalBg).fadeToggle(500);
          iframeBox.classList.toggle("iframeOpen");
          newDivRecipe.classList.toggle("mainRecipeOpen");
          iframeBox.remove();
        }
      };
    };
  }

  let collapseButton = $e("btn--collapse");

  collapseButton.classList.toggle("expanded");

  collapseButton.onclick = function () {
    let recipeImageCollapse = $$$(".recipeContent img");
    let recipeCollapsedButton = $$$(".collapseRecipe");
    let recipePreviewButton = $$$(".previewRecipe");

    for (let i = 0; i < recipeNames.length; i++) {
      if (collapseButton.classList.contains("expanded")) {
        // * IF RECIPES ARE CURRENTLY EXPANDED
        $(recipeImageCollapse[i]).slideUp(150);
        recipeCollapsedButton[i].innerHTML = "[+]";
        collapseButton.innerHTML = "Expand All";
        $(".collapseRecipe").css("backgroundImage", "url('Images/maximize.png')");
        let toggleSwitch = document.getElementById("myonoffswitchImages");
        toggleSwitch.checked = false;

        $("#myonoffswitchImages").parent().find("span:nth-child(2)").addClass("burnEgg");

        if (!$("#myonoffswitchPreview").parent().find("span:nth-child(2)").hasClass("burnEgg")) {
          $(recipePreviewButton[i]).hide(300);
        }
      } // * IF RECIPES ARE NOT CURRENTLY EXPANDED
      else {
        $(recipeImageCollapse[i]).slideDown(150);
        recipeCollapsedButton[i].innerHTML = "[-]";
        collapseButton.innerHTML = "Collapse All";
        $(".collapseRecipe").css("backgroundImage", "url('Images/collapse.png')");
        let toggleSwitch = document.getElementById("myonoffswitchImages");
        toggleSwitch.checked = true;
        $("#myonoffswitchImages").parent().find("span:nth-child(2)").removeClass("burnEgg");

        if (!$("#myonoffswitchPreview").parent().find("span:nth-child(2)").hasClass("burnEgg")) {
          $(recipePreviewButton[i]).show(300);
        }
      }
    }

    collapseButton.classList.toggle("expanded");
  };

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

  let iframe = $$("iframeBox");

  // Get the settings modal
  var modalSettings = document.getElementById("settingsModal");

  // Get the button that opens the modal
  var btn = document.getElementById("recipeSettingsImage");

  // Get the <span> element that closes the modal
  var closeButton = document.getElementsByClassName("closeButton")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    $(modalSettings).fadeIn(500);
  };

  // When the user clicks on the close button, close the modal
  closeButton.onclick = function () {
    $(modalSettings).fadeOut(300);
  };

  $("#myonoffswitchDescriptions").click(function () {
    $("#myonoffswitchDescriptions").parent().find("span:nth-child(2)").toggleClass("burnEgg");
    $(".recipeDescription").slideToggle();
  });

  $("#myonoffswitchCollapse").click(function () {
    $("#myonoffswitchCollapse").parent().find("span:nth-child(2)").toggleClass("burnEgg");
    $(".collapseRecipe").fadeToggle();
  });

  $("#myonoffswitchPreview").click(function () {
    $("#myonoffswitchPreview").parent().find("span:nth-child(2)").toggleClass("burnEgg");
    $(".previewRecipe").toggle(500);
  });

  $("#myonoffswitchImages").click(function () {
    $("#myonoffswitchImages").parent().find("span:nth-child(2)").toggleClass("burnEgg");
    let collapser = document.getElementById("btn--collapse");
    collapser.click();
  });

  $(".collapseRecipe").mouseenter(function () {
    if ($(this).parents(".recipe").hasClass("collapsedHeight")) {
      $(this).parents(".recipe").css("transform", "scale(1.06)");
    } else {
      $(this).parents(".recipe").css("transform", "scale(.95)");
    }
  });

  $(".collapseRecipe").mouseleave(function () {
    $(this).parents(".recipe").css("transform", "scale(1)");
  });

  $(".recipe").mouseenter(function () {
    $(this).css("transform", "scale(1.04)");
  });

  $(".recipe").mouseleave(function () {
    $(this).css("transform", "scale(1)");
  });
});
