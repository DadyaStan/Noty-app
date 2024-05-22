import axios from "axios";
import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: []
  }),
  getters: {
    getNotes: (state) => state.notes,
  },
  actions: {
    async fetchNotes(userId) {
      try {
        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        const data = await response.json();
        this.notes = data.posts;
        localStorage.setItem('notes', JSON.stringify(this.notes));
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    },
    setNotes(notes) {
      this.notes = notes;
    },
    async addNote(note, userId) {
      // Примерный код для добавления заметки
      try {
        fetch(`https://dummyjson.com/posts/add`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: note.title,
            body: note.body,
            userId: userId,
            /* other post data */
          })
        })
          .then(res => res.json())
          .then(data => {
            this.notes.push(data);
            console.log(this.notes)
            //localStorage.setItem('notes', JSON.stringify(this.notes));
          })
        // API вызов для добавления заметки
        // const response = await fetch(`https://dummyjson.com/posts/add/${userId}`, {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(note)
        // });
        // console.log(response.data);
        // const newNote = await response.json();
        // console.log(newNote);
        // this.notes.push(newNote);
        // localStorage.setItem('notes', JSON.stringify(this.notes));
      } catch (error) {
        console.error('Ошибка при добавлении заметки:', error);
      }
    },
    async editNote({ id, newData }) {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: newData.title,
            body: newData.body,
          })
        });
        const updatedNote = await response.json();
        const index = this.notes.findIndex(note => note.id === id);
        if (index !== -1) {
          this.notes.splice(index, 1, updatedNote);
        }
        console.log(this.notes);
      } catch (error) {
        console.error('Ошибка при редактировании заметки:', error);
      }
    },
    async deleteNote(id) {
      try {
        await axios.delete(`https://dummyjson.com/posts/${id}`);
        this.notes = this.notes.filter((note) => note.id !== id);
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    },
  },
});