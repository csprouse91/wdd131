document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('open');
    navigation.classList.toggle('open');
});

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6-24",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
    area: 17300,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/redlands-california-temple/redlands-california-temple-42304.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8-14",
    area: 104000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-35438.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-42837.jpg"
  }
];


// Create temple cards looping through the array of temple objects
const templeContainer = document.querySelector('.container');
createTempleCard(temples);
// Function with an array of temple objects as a parameter
function createTempleCard(temples) {
  temples.forEach(temple => {
    const card = document.createElement('div');
    card.classList.add('temple-card');
    card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;
    templeContainer.appendChild(card);
  })
};
// Event listener for "Home" link to load all temples
const allTemplesLink = document.querySelector('a[title="Home"]');
allTemplesLink.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  createTempleCard(temples);
});

// Event listener for "Old" "New" "Large" "Small" links to filter temples
// Old - temples built before 1900
const oldTemplesLink = document.querySelector('a[title="Old"]');
oldTemplesLink.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  const oldTemples = temples.filter(temple => temple.dedicated.split(',')[0] < 1900);
  createTempleCard(oldTemples);
});

// New - temples built after 2000
const newTemplesLink = document.querySelector('a[title="New"]');
newTemplesLink.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  const newTemples = temples.filter(temple => temple.dedicated.split(',')[0] >= 2000);
  createTempleCard(newTemples);
});
// Large – temples larger than 90,000 square feet
const largeTemplesLink = document.querySelector('a[title="Large"]');
largeTemplesLink.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  const largeTemples = temples.filter(temple => temple.area > 90000);
  createTempleCard(largeTemples);
});
// Small – temples smaller than 10,000 square feet
const smallTemplesLink = document.querySelector('a[title="Small"]');
smallTemplesLink.addEventListener('click', () => {
  templeContainer.innerHTML = '';
  const smallTemples = temples.filter(temple => temple.area < 10000);
  createTempleCard(smallTemples);
});