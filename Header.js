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
var modal = document.getElementById("myModalContact");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
  $(modal).fadeIn(500);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    $(modal).fadeOut(300);
    // alert("test");
  }
};

$("#cancelButton").click(function () {
  $(modal).fadeOut(300);
});
