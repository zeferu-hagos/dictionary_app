// src/components/Dictionary.js
import React, { useState } from 'react';
import AddWordForm from './AddWordForm';

function Dictionary() {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, newWord]);
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
      <AddWordForm addWord={addWord} />
    </div>
  );
}

export default Dictionary;