"use strict";
console.log("Welcome to Praj's World");
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
function display() {}

display.prototype.add = function (book) {
  console.log("Adding to ui");
  let tablebody = document.getElementById("tablebody");
  let uiString = `<tr>
                        <td scope="col">${book.name}</td>
                        <td scope="col">${book.author}</td>
                        <td scope="col">${book.type}</td>
                    </tr>`;
  tablebody.innerHTML += uiString;
};
display.prototype.clear = function () {
  libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  }
  return true;
};

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormsubmit);
console.log("library form");
let storeobj;
function libraryFormsubmit(e) {
  e.preventDefault();
  let bookname = document.getElementById("bookname").value;
  let authorname = document.getElementById("authorname").value;
  let type;
  let fiction = document.getElementById("fiction");
  let machinelearning = document.getElementById("machine");
  let cooking = document.getElementById("cooking");

  if (fiction.checked) {
    type = fiction.value;
  } else if (machinelearning.checked) {
    tpye = machinelearning.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(bookname, authorname, type);
  console.log("adding the book");
  let Display = new display();

  if (Display.validate(book)) {
    Display.add(book);
    Display.clear();
  } else {
    Display.show("you cannot add your book");
  }

  let store = localStorage.getItem("store");
  if (store == null) {
    storeobj = [];
  } else {
    storeobj = JSON.parse(store);
  }
  storeobj.push(book);

  localStorage.setItem("store", JSON.stringify(storeobj));
}

console.log(Book);
