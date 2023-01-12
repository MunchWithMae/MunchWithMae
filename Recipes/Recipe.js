document.getElementById('buttonContainer').addEventListener('click', () => {
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
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);






// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  clearTimeout(timer);
  //timer = setTimeout(() => plusSlides(1), 10000);
}


function boxChecked(element){
  element.closest("tr").classList.toggle("completed")
}


let ingredientsCollapse = document.querySelector("#ingredientsContainer h2")

let ingredientsCollapseContainer = document.createElement('button');

  ingredientsCollapseContainer.innerHTML = "[-]";

  ingredientsCollapseContainer.classList.add("collapseIngredients");

  ingredientsCollapse.appendChild(ingredientsCollapseContainer);


  let directionsCollapse = document.querySelector("#directionsContainer h2")

  let directionsCollapseContainer = document.createElement('button');

    directionsCollapseContainer.innerHTML = "[-]";

    directionsCollapseContainer.classList.add("collapseDirections");

    directionsCollapse.appendChild(directionsCollapseContainer);


    let ingredientsTable = document.querySelector("#ingredientsContainer div");
    let ingredientsTableDub;
    let ingredientsTableHeightDub;


    if(document.querySelector(".double"))
    {
      ingredientsTableDub = document.querySelector(".double")
    }

    setTimeout(() => {
        let ingredientsTableHeight = ingredientsTable.offsetHeight;

        if(document.querySelector(".double"))
        {
          ingredientsTableHeightDub = ingredientsTableDub.offsetHeight;
        }

      ingredientsCollapseContainer.onclick = function() 
      {
      
        ingredientsTable.classList.toggle("collapsed");

        var timeout;
        


        function start() 
        {
          //console.log(ingredientsTableHeightDub);
            var div = document.querySelector("#ingredientsContainer div");
            let size = 0;

            var func = function () 
            {
              timeout = setTimeout(func, 0);
              div.style.height = (ingredientsTableHeight - size)+ "px";

              if(ingredientsTableDub)
              {
                ingredientsTableDub.style.paddingTop = "0";
                ingredientsTableDub.style.paddingBottom ="0";
                if (size++ == ingredientsTableHeightDub) stop();
                console.log(ingredientsTableHeightDub);
              }

              else
              {
                if (size++ == ingredientsTableHeight) stop();
              }
              
              //console.log(ingredientsTableHeight);

            }

            if (document.querySelector(".double"))
            {
              var background = document.querySelector(".double");
            
            

              if (background.classList.contains("bgChangeReverse"))
              {
                background.classList.toggle("bgChangeReverse");
              }

              background.classList.toggle("bgChange");

            }

            func();  // starts the process
        }

        function reverse() 
        {
            var div = document.querySelector("#ingredientsContainer div");
            let size = 0;

            var func = function () 
            {
              timeout = setTimeout(func, 0);
              div.style.height = (size) + "px";
              if (size++ == ingredientsTableHeight) stop();
              //console.log(ingredientsTableHeight);
            }

            var background = document.querySelector(".double");

            if (document.querySelector(".double"))
            {
              background.classList.toggle("bgChange");
              background.classList.toggle("bgChangeReverse")
            }

            func();  // starts the process
        }

        function stop() 
        {
            clearInterval(timeout);
        }

        if (ingredientsTable.classList.contains("collapsed"))
        {
          ingredientsCollapseContainer.innerHTML = "[+]";
          start();
        }

        else
        {
          ingredientsCollapseContainer.innerHTML = "[-]";
          reverse();
        }

    };
    }, 500);

    let directionsTable = document.querySelector("#directionsContainer div")
    setTimeout(() => {
      let directionsTableHeight = directionsTable.offsetHeight;
    
      directionsCollapseContainer.onclick = function() 
      {
      
        directionsTable.classList.toggle("collapsed");

        var timeout;
        
        function start() 
        {
            var div = document.querySelector("#directionsContainer div");
            let size = 0;

            var func = function () 
            {
              timeout = setTimeout(func, 0);
              div.style.height = (directionsTableHeight - size)+ "px";
              div.style.overflow = "hidden";
              if (size++ == directionsTableHeight) stop();
              console.log(directionsTableHeight);
            }

            func();  // starts the process
        }

        function reverse() 
        {
            var div = document.querySelector("#directionsContainer div");
            let size = 0;

            var func = function () 
            {
              timeout = setTimeout(func, 0);
              div.style.height = (size) + "px";
              if (size++ == directionsTableHeight) stop2();
              console.log(directionsTableHeight);
            }

            func();  // starts the process
        }

        function stop() 
        {
            clearInterval(timeout);

        }

        function stop2() 
        {
            var div = document.querySelector("#directionsContainer div");
            div.style.overflow = "visible";
            clearInterval(timeout);

        }

        if (directionsTable.classList.contains("collapsed"))
        {
          directionsCollapseContainer.innerHTML = "[+]";
          start();
        }

        else
        {
          directionsCollapseContainer.innerHTML = "[-]";
          reverse();
        }

    };
    }, 500);

  


