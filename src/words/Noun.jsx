import React, { useState } from 'react'

const Noun = () => {
    const [noun, setNoun] = useState(
        [
            {
                "tagname": "noun",
                "wordname": "apple",
                "wordMeaning": "a round fruit with red or green skin",
                "example": "She took a bite of the juicy apple."
            },
            {
                "tagname": "noun",
                "wordname": "ball",
                "wordMeaning": "a round object used in sports and games",
                "example": "He threw the ball to his teammate."
            },
            {
                "tagname": "noun",
                "wordname": "cat",
                "wordMeaning": "a small domesticated carnivorous mammal",
                "example": "The cat purred as it curled up on the couch."
            },
            {
                "tagname": "noun",
                "wordname": "dog",
                "wordMeaning": "a domesticated carnivorous mammal",
                "example": "The dog wagged its tail in excitement."
            },
            {
                "tagname": "noun",
                "wordname": "elephant",
                "wordMeaning": "a large mammal with a long trunk and tusks",
                "example": "The elephant sprayed water from its trunk."
            },
            {
                "tagname": "noun",
                "wordname": "flower",
                "wordMeaning": "a plant with colorful petals",
                "example": "She picked a bunch of flowers from the garden."
            },
            {
                "tagname": "noun",
                "wordname": "guitar",
                "wordMeaning": "a musical instrument with strings",
                "example": "He strummed the guitar and played a beautiful melody."
            },
            {
                "tagname": "noun",
                "wordname": "happiness",
                "wordMeaning": "the state of being happy",
                "example": "The news brought them great happiness."
            },
            {
                "tagname": "noun",
                "wordname": "island",
                "wordMeaning": "a piece of land surrounded by water",
                "example": "They went on a vacation to a tropical island."
            },
            {
                "tagname": "noun",
                "wordname": "jacket",
                "wordMeaning": "a piece of outerwear that covers the upper body",
                "example": "She put on her jacket to keep warm."
            },
            {
                "tagname": "noun",
                "wordname": "keyboard",
                "wordMeaning": "a set of keys used for typing or playing music",
                "example": "He typed furiously on the keyboard to meet the deadline."
            },
            {
                "tagname": "noun",
                "wordname": "lion",
                "wordMeaning": "a large wild cat with a mane",
                "example": "The lion roared loudly in the zoo."
            },
            {
                "tagname": "noun",
                "wordname": "mango",
                "wordMeaning": "a tropical fruit with sweet juicy flesh",
                "example": "She enjoyed eating a ripe mango."
            },
            {
                "tagname": "noun",
                "wordname": "notebook",
                "wordMeaning": "a book with pages for writing notes",
                "example": "He carried a notebook to jot down his ideas."
            },
            {
                "tagname": "noun",
                "wordname": "ocean",
                "wordMeaning": "a vast body of saltwater",
                "example": "The waves crashed against the shore of the ocean."
            },
            {
                "tagname": "noun",
                "wordname": "pencil",
                "wordMeaning": "a thin cylindrical instrument used for writing",
                "example": "She sharpened her pencil before starting her artwork."
            },
            {
                "tagname": "noun",
                "wordname": "queen",
                "wordMeaning": "the female ruler of a kingdom",
                "example": "The queen waved to the crowd from the balcony."
            },
            {
                "tagname": "noun",
                "wordname": "rabbit",
                "wordMeaning": "a small furry mammal with long ears",
                "example": "The rabbit hopped through the meadow."
            },
            {
                "tagname": "noun",
                "wordname": "sun",
                "wordMeaning": "the star that shines in the daytime sky",
                "example": "The sun rose early in the morning."
            },
        {
                "tagname": "noun",
                "wordname": "table",
                "wordMeaning": "a piece of furniture with a flat top and legs",
                "example": "They sat around the table for dinner."
            },
            {
                "tagname": "noun",
                "wordname": "umbrella",
                "wordMeaning": "a device used for protection from rain or sun",
                "example": "She opened her umbrella to shield herself from the rain."
            },
            {
                "tagname": "noun",
                "wordname": "vase",
                "wordMeaning": "a container used for displaying flowers",
                "example": "The vase was filled with beautiful roses."
            },
        {
                "tagname": "noun",
                "wordname": "waterfall",
                "wordMeaning": "a natural flowing stream of water",
                "example": "They hiked to the base of the majestic waterfall."
            },
            {
                "tagname": "noun",
                "wordname": "xylophone",
                "wordMeaning": "a musical instrument with wooden bars played with mallets",
                "example": "She played a beautiful melody on the xylophone."
            },
            {
                "tagname": "noun",
                "wordname": "yacht",
                "wordMeaning": "a luxurious boat used for leisure or racing",
                "example": "They enjoyed a day of sailing on their yacht."
            },
            {
                "tagname": "noun",
                "wordname": "zebra",
                "wordMeaning": "a wild animal with black and white stripes",
                "example": "The zebra grazed peacefully on the grassy plain."
            }
        
        ]
    )
  return (
    <div>
      <h2>word List</h2>
      <ul>
        {noun.map((nouns) => (
          // Use a unique key for each item in the list
          <li key={nouns.id}>{nouns.tagname}</li>
        ))}
      </ul>
    </div>
  )
}

export default Noun
