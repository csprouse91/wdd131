
const reviewCountElement = document.getElementById("reviews");
const submittedReview = localStorage.getItem("submittedReview");
if (submittedReview === "true") {
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.innerHTML = `Total Reviews Submitted: ${count}`;
  // change boolean to false
  localStorage.setItem("submittedReview", "false");
} else {
  let count = parseInt(localStorage.getItem("reviewCount")) || 0;
  localStorage.setItem("reviewCount", count);
  reviewCountElement.innerHTML = `Total Reviews Submitted: ${count}`;
  // change boolean to false
  localStorage.setItem("submittedReview", "false");
}