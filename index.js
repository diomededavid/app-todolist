// Import stylesheets
import './style.css';

const form = document.querySelector('#note-form');
const noteInput = document.querySelector('#note');
const noteList = document.querySelector('.collection');


loadEventListeners();

function loadEventListeners() {
  form.addEventListener('click', addNote);
  noteList.addEventListener('click', removeNote);
}

function addNote(event) {
  if (!noteInput.value) return;

  if (noteInput.value) {
    // Create li element
    const li = document.createElement('li');

    // Add className
    li.className = 'collection-item';

    // Create text node and append to the list item
    li.appendChild(document.createTextNode(noteInput.value));

    // Create new link element
    const removeBtn = document.createElement('a');
    // Add class
    removeBtn.className = 'delete-item secondary-content';

    // Add icon to html
    removeBtn.innerHTML = `<i class="material-icons right">remove_circle_outline</i>`;

    // Append link to li
    li.appendChild(removeBtn);
    // Create new link element
    const editBtn = document.createElement('a');


    // Add class
    editBtn.className = 'edit-item secondary-content';

    // Add icon to html
    editBtn.innerHTML = `<i class="material-icons right">remove_circle_outline</i>`;

    // Add icon to html
    editBtn.innerHTML = `<i class="material-icons right">edit</i>`;

    // Append link to li
    li.appendChild(editBtn);

    // Append li to ul
    noteList.appendChild(li);

    // Clear Input
    noteInput.value = '';
  }

  event.preventDefault();
}


// Remove Task
function removeNote(event) {
  if (event.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure')) {
      event.target.parentElement.parentElement.remove();
    }
  }
}


//contenteditable="true"