addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.querySelector(".signup-button");
    signUpButton.addEventListener("click", () => {
        window.location.href = "signup.html";
    });

    const hamburgerButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('open');
    navigation.classList.toggle('open');
});
});
