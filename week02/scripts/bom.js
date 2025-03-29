const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');


input.focus();
//Added event listener to allow enter to act as a button click
input.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        button.click();
    }
});

button.addEventListener('click', event => {
    if (input.value.trim() !== "") {



        const myBookChapter = input.value;
        input.value = '';

        const bookChapter = document.createElement('li');
        const bookChapterText = document.createElement('span');
        bookChapterText.textContent = myBookChapter;
        bookChapter.appendChild(bookChapterText);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        bookChapter.appendChild(deleteButton);
        list.appendChild(bookChapter);
        input.focus();
        deleteButton.addEventListener('click', event => {
            list.removeChild(bookChapter);
            input.focus();
        });

    }
    else {
        alert("Input cannot be empty! Please enter your favorite chapter.");
        input.focus();
    }
});

