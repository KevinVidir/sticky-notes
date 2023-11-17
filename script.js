document.addEventListener('DOMContentLoaded', function () {
    const notesContainer = document.getElementById('notes-container');
    const createNoteBtn = document.getElementById('create-note');
  
    createNoteBtn.addEventListener('click', createNote);
  
    function createNote() {
      const note = document.createElement('div');
      note.classList.add('note');
  
      const deleteBtn = document.createElement('span');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.innerHTML = 'X';
      deleteBtn.addEventListener('click', () => deleteNote(note));
  
      const contentEditable = document.createElement('div');
      contentEditable.setAttribute('contenteditable', 'true');
      contentEditable.addEventListener('input', () => updateNoteContent(note));
  
      note.appendChild(deleteBtn);
      note.appendChild(contentEditable);
      notesContainer.appendChild(note);
  
      contentEditable.focus();
    }
  
    function deleteNote(note) {
      notesContainer.removeChild(note);
    }
  
    function updateNoteContent(note) {
    
    }
  });