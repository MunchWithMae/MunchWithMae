/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function headerDrop() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the contact modal
var modalContact = document.getElementById("myModalContact");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  $(modalContact).fadeIn(500);
};

// When the user clicks anywhere outside of the modal, close it
let modalObjects = document.querySelectorAll(".modal");
window.onclick = function (event) {
  let r;
  for (r = 0; r < modalObjects.length; r++) {
    if (event.target == modalObjects[r]) {
      $(".modal").fadeOut(300);
    }
  }
};

$("#cancelButton").click(function () {
  $(modalContact).fadeOut(300);
});
