const editBtn = document.querySelector('.edit-btn');
const editForm = document.querySelector('.edit-form');
const bookDisplay = document.querySelector('.book-display');
const saveBtn = document.querySelector('.save-btn');

console.log("hello");
if (editBtn) {
  editBtn.addEventListener('click', function() {
    bookDisplay.style.display = 'none';
    editForm.style.display = 'block';
  });
}

if (saveBtn) {
  saveBtn.addEventListener('click', function() {
    bookDisplay.style.display = 'block';
    editForm.style.display = 'none';
  });
}

// block content
//   div.book-display
//     ul
//       li=book.title
//       li=book.author
//       li=book.genre
//       button.edit-btn Edit
//       button.delete-btn Delete
//   div.edit-form
//     p hi
//     button.save-btn Save
