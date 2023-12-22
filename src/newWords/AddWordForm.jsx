import React, { useState } from 'react';

function AddWordForm({ addWord }) {
  const [newWord, setNewWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newWord.trim() !== '') {
      addWord(newWord.trim());
      setNewWord('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
      />
      <button type="submit">Add Word</button>
    </form>
  );
}

export default AddWordForm;