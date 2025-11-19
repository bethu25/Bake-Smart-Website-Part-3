// popup.js
// Simple popup helper: shows a temporary message when the cart button is clicked

// Elements: the button that triggers the popup and the popup container itself
const cartButton = document.getElementById("cartButton");
const popup = document.getElementById("popupMessage");

// Guard in case the expected elements are not present on the page
if (cartButton && popup) {
  // Show the popup when the cart button is clicked
  cartButton.addEventListener("click", () => {
    // Remove the 'hidden' class (assumes CSS controls visibility via this class)
    popup.classList.remove("hidden");

    // Hide the popup again after 2 seconds to avoid blocking the UI
    // setTimeout is used for a simple auto-dismiss behavior.
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 2000);
  });
}