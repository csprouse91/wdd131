
const reviewCountElement = document.getElementById("reviews");
const submittedPlayer = localStorage.getItem("submittedPlayer");
if (submittedPlayer === "true") {
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.innerHTML = `Total Players Signed Up: ${count}`;
  // change boolean to false
  localStorage.setItem("submittedPlayer", "false");
} else {
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.innerHTML = `Total Players Signed Up: ${count}`;
  // change boolean to false
  localStorage.setItem("submittedPlayer", "false");
}