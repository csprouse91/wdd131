const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Week 5 localStorage activity
//Declare an array named chaptersArray
let chaptersArray = getChapterList() || [];
//Populate the displayed list of chapters. Use a forEach on the chaptersArray
chaptersArray.forEach(chapter => {
    displayList(chapter);// Nested Function also called a callback function
})


input.focus();
//Added event listener to allow enter to act as a button click
input.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        button.click();
    }
});

button.addEventListener('click', event => {
    if (input.value.trim() !== "") {



        const myBookChapter = input.value;// Save the input value into a variable
        input.value = ''; //Clear the input value

        displayList(myBookChapter);
        chaptersArray.push(myBookChapter); // Push the input.value into the chaptersArray
        setChapterList(); // Update the localStorage with the new chaptersArray


        // const bookChapter = document.createElement('li');
        // const bookChapterText = document.createElement('span');
        // bookChapterText.textContent = myBookChapter;
        // bookChapter.appendChild(bookChapterText);
        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = '❌';
        // bookChapter.appendChild(deleteButton);
        // list.appendChild(bookChapter);
        input.focus();
        // deleteButton.addEventListener('click', event => {
        //     list.removeChild(bookChapter);
        //     input.focus();
        // });

    }
    else {
        alert("Input cannot be empty! Please enter your favorite chapter.");
        input.focus();
    }
});

// Function with one parameter to display the list of chapters
function displayList(item) {
    let bookChapter = document.createElement('li');
    let bookChapterText = document.createElement('span');
    bookChapterText.textContent = item;
    bookChapter.appendChild(bookChapterText);
    let deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    bookChapter.appendChild(deleteButton);
    list.appendChild(bookChapter);
    deleteButton.addEventListener('click', event => {
            list.removeChild(bookChapter);
            deleteChapter(bookChapterText.textContent);
            input.focus();
        });
    console.log('Chapter added: ' + item);
}

function setChapterList() {
    localStorage.setItem('localBOMList', JSON.stringify(chaptersArray));
    console.log('Updated localStorage with chaptersArray.');
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('localBOMList'));
}

function deleteChapter(chapter) {
    // chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}