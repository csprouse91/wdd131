document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const hamburgerButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('open');
    navigation.classList.toggle('open');
});