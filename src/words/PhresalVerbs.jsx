import React, { useState } from 'react'

const PhresalVerbs = () => {
    const [phresal, setPhresal] = useState(
        [
            {
                "tagname": "phrasalverb",
                "wordname": "back down",
                "wordMeaning": "to withdraw from a position or an argument",
                "example": "He refused to back down, even when faced with strong opposition."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "break up",
                "wordMeaning": "to end a relationship or a gathering",
                "example": "They decided to break up after years of being together."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "call off",
                "wordMeaning": "to cancel or abort something",
                "example": "They had to call off the meeting due to unforeseen circumstances."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "carry on",
                "wordMeaning": "to continue or proceed",
                "example": "Despite the challenges, they carried on with their plans."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "check out",
                "wordMeaning": "to inspect or investigate something",
                "example": "The police were called to check out the suspicious activity."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "come across",
                "wordMeaning": "to find or encounter by chance",
                "example": "He came across an old photo while cleaning his room."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "cut off",
                "wordMeaning": "to disconnect or isolate",
                "example": "The storm caused the power to be cut off in the entire neighborhood."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "drop off",
                "wordMeaning": "to deliver or bring someone or something to a destination",
                "example": "Can you drop off this package at the post office for me?"
            },
            {
                "tagname": "phrasalverb",
                "wordname": "fall apart",
                "wordMeaning": "to disintegrate or collapse",
                "example": "The old house was falling apart and needed urgent repairs."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "figure out",
                "wordMeaning": "to solve or understand something",
                "example": "I need some time to figure out the answer to this puzzle."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "get along",
                "wordMeaning": "to have a harmonious relationship",
                "example": "They may have different opinions, but they get along well."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "hang out",
                "wordMeaning": "to spend time together",
                "example": "They decided to hang out at the park for the afternoon."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "keep up",
                "wordMeaning": "to maintain or continue at the same pace",
                "example": "She ran so fast that I couldn't keep up with her."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "look after",
                "wordMeaning": "to take care of or watch over someone or something",
                "example": "Can you look after my dog while I'm away?"
            },
            {
                "tagname": "phrasalverb",
                "wordname": "make up",
                "wordMeaning": "to reconcile or resolve a disagreement",
                "example": "They had a fight but eventually made up and became friends again."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "pass out",
                "wordMeaning": "to lose consciousness or faint",
                "example": "The heat was so intense that she passed out during the race."
            },
            {
                "tagname": "phrasalverb",
                "wordname": "put off",
                "wordMeaning": "to delay or postpone",
                "example": "They decided to put off the meeting until next week."
            }]
    )
  return (
    <div>
      <h2>word List</h2>
      <ul>
        {phresal.map((phres) => (
          // Use a unique key for each item in the list
          <li key={phres.id}>{phres.tagname}</li>
        ))}
      </ul>
    </div>
  )
}

export default PhresalVerbs
