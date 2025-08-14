const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
hamburgerButton.classList.toggle('open');
navigation.classList.toggle('open');
});
// Array of age groups
const ageGroups = [
    {
        league: "T-Ball",
        age: "5U"
    },
    {
        league: "T-Ball",
        age: "7U"
    },
    {
        league: "Minor - Coach Pitch",
        age: "7U"
    },
    {
        league: "Minor - Machine Pitch",
        age: "9U"
    },
    {
        league: "Minor - Machine Pitch / Hybrid Kid Pitch",
        age: "9U"
    },
    {
        league: "Minor - Kid Pitch",
        age: "9U"
    },
    {
        league: "Major",
        age: "11U"
    },
    {
        league: "Major",
        age: "12U"
    },
    {
        league: "Junior",
        age: "14U"
    },
    {
        league: "Senior",
        age: "16U"
    }
];

let ageElement = document.getElementById("ageGroup");
populateAgeGroup();
// Function to populate the age group dropdown
function populateAgeGroup() {
  ageGroups.forEach(group => {
    let option = document.createElement("option");
    option.value = group.league;
    option.textContent = `${group.league} (${group.age})`;
    ageElement.appendChild(option);
  });
}

// Review Submission
const form = document.querySelector(".suform");
form.addEventListener("submit", (event) => {
  localStorage.setItem("submittedPlayer", "true");
});