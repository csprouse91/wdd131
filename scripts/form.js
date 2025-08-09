document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

// Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

let productElement = document.getElementById("product");
populateProductOptions();
// Function to populate the product dropdown
function populateProductOptions() {
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name.toUpperCase();
    productElement.appendChild(option);
  });
}

// Review Submission
const form = document.querySelector(".product-review-form");
form.addEventListener("submit", (event) => {
  localStorage.setItem("submittedReview", "true");
});
