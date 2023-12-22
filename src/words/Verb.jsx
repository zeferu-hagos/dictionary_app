import React, { useState } from 'react'

const Verb = () => {

    const [verb, setVerb] = useState(
        [
            {
                "tagname": "verb",
                "wordname": "abandon",
                "wordMeaning": "to leave behind or desert",
                "example": "He decided to abandon his car in the parking lot."
            },
            {
                "tagname": "verb",
                "wordname": "absorb",
                "wordMeaning": "to take in or soak up",
                "example": "The sponge absorbed all the water."
            },
            {
                "tagname": "verb",
                "wordname": "accelerate",
                "wordMeaning": "to increase in speed or intensity",
                "example": "The car started to accelerate down the highway."
            },
            {
                "tagname": "verb",
                "wordname": "accept",
                "wordMeaning": "to receive willingly or agree to",
                "example": "She accepted the job offer without hesitation."
            },
            {
                "tagname": "verb",
                "wordname": "accomplish",
                "wordMeaning": "to successfully complete or achieve",
                "example": "He was able to accomplish his goals through hard work."
            },
            {
                "tagname": "verb",
                "wordname": "accumulate",
                "wordMeaning": "to gather or collect gradually",
                "example": "Over the years, he accumulated a vast collection of books."
            },
            {
                "tagname": "verb",
                "wordname": "achieve",
                "wordMeaning": "to reach or attain a goal",
                "example": "She worked hard to achieve her dream of becoming a doctor."
            },
            {
                "tagname": "verb",
                "wordname": "acknowledge",
                "wordMeaning": "to admit or recognize the existence of",
                "example": "He acknowledged his mistake and apologized."
            },
            {
                "tagname": "verb",
                "wordname": "activate",
                "wordMeaning": "to make something active or operational",
                "example": "Please activate the alarm system before leaving the building."
            },
            {
                "tagname": "verb",
                "wordname": "adapt",
                "wordMeaning": "to adjust or modify to suit a new situation",
                "example": "She had to adapt to the new working environment."
            },
            {
                "tagname": "verb",
                "wordname": "add",
                "wordMeaning": "to combine or join together",
                "example": "Please add sugar to the recipe."
            },
            {
                "tagname": "verb",
                "wordname": "address",
                "wordMeaning": "to deal with or attend to a problem or issue",
                "example": "The company needs to address the customer complaints."
            },
            {
                "tagname": "verb",
                "wordname": "adjust",
                "wordMeaning": "to alter or change slightly",
                "example": "He adjusted the volume of the television."
            },
            {
                "tagname": "verb",
                "wordname": "administer",
                "wordMeaning": "to manage or control the operation of",
                "example": "She was responsible for administering the medication to the patients."
            },
            {
                "tagname": "verb",
                "wordname": "admire",
                "wordMeaning": "to regard with respect or approval",
                "example": "I admire her dedication to her work."
            },
            {
                "tagname": "verb",
                "wordname": "admit",
                "wordMeaning": "to allow or grant access",
                "example": "The ticket will admit you to the concert."
            },
            {
                "tagname": "verb",
                "wordname": "adopt",
                "wordMeaning": "to take on or assume",
                "example": "They decided to adopt a child."
            },
            {
                "tagname": "verb",
                "wordname": "advise",
                "wordMeaning": "to offer suggestions or recommendations",
                "example": "She advised him to seek professional help."
            },
        
            {
                "tagname": "verb",
                "wordname": "aim",
                "wordMeaning": "to direct or point towards a target",
                "example": "He aimed the arrow at the bullseye."
            },
            {
                "tagname": "verb",
                "wordname": "alert",
                "wordMeaning": "to make aware or vigilant",
                "example": "The security guard alerted everyone to the approaching danger."
            },
            {
                "tagname": "verb",
                "wordname": "allocate",
                "wordMeaning": "to distribute or assign for a specific purpose",
                "example": "The manager allocated the budget for the project."
            },
            {
                "tagname": "verb",
                "wordname": "allow",
                "wordMeaning": "to grant or give permission",
                "example": "Please allow me to explain my point of view."
            },
            {
                "tagname": "verb",
                "wordname": "alter",
                "wordMeaning": "to change or modify",
                "example": "He altered the design to meet the client's requirements."
            },
            {
                "tagname": "verb",
                "wordname": "analyze",
                "wordMeaning": "to examine in detail or study closely",
                "example": "The scientist analyzed the data to draw conclusions."
            },
            {
                "tagname": "verb",
                "wordname": "announce",
                "wordMeaning": "to make a public declaration or proclamation",
                "example": "The mayor announced the new initiative at the press conference."
            },
            {
                "tagname": "verb",
                "wordname": "anticipate",
                "wordMeaning": "to expect or foresee",
                "example": "She anticipated a positive outcome from the negotiations."
            },
            {
                "tagname": "verb",
                "wordname": "apologize",
                "wordMeaning": "to express regret or say sorry",
                "example": "He apologized for his mistake and promised to make amends."
            },
            {
                "tagname": "verb",
                "wordname": "appear",
                "wordMeaning": "to become visible or present",
                "example": "The sun appeared from behind the clouds."
            },
            {
                "tagname": "verb",
                "wordname": "apply",
                "wordMeaning": "to make use of or put into practice",
                "example": "She applied the cream to her skin."
            },
            {
                "tagname": "verb",
                "wordname": "appoint",
                "wordMeaning": "to select or designate for a position or task",
                "example": "They appointed her as the new team leader."
            },
            {
                "tagname": "verb",
                "wordname": "appreciate",
                "wordMeaning": "to recognize the value or worth of",
                "example": "I appreciate your help and support."
            },
            {
                "tagname": "verb",
                "wordname": "approach",
                "wordMeaning": "to move closer to or come near",
                "example": "We approached the edge of the cliff with caution."
            },
            {
                "tagname": "verb",
                "wordname": "approve",
                "wordMeaning": "to give consent or agree to",
                "example": "The board approved the proposed budget."
            },
            {
                "tagname": "verb",
                "wordname": "argue",
                "wordMeaning": "to present reasons or points in a dispute",
                "example": "They argued about the best way to solve the problem."
            },
            {
                "tagname": "verb",
                "wordname": "arrange",
                "wordMeaning": "to organize or plan in a particular way",
                "example": "She arranged the books on the shelf in alphabetical order."
            },
            {
                "tagname": "verb",
                "wordname": "arrest",
                "wordMeaning": "to take into custody by legal authority",
                "example": "The police arrested the suspect for theft."
            },{
                "tagname": "verb",
                "wordname": "ascend",
                "wordMeaning": "to climb or go upwards",
                "example": "The hikers began to ascend the steep mountain trail."
            },
            {
                "tagname": "verb",
                "wordname": "ask",
                "wordMeaning": "to inquire or request information",
                "example": "She asked him for directions to the nearest post office."
            },
            {
                "tagname": "verb",
                "wordname": "assemble",
                "wordMeaning": "to gather or put together",
                "example": "They assembled the furniture according to the instructions."
            },
            {
                "tagname": "verb",
                "wordname": "assert",
                "wordMeaning": "to state or declare confidently",
                "example": "He asserted his innocence in the courtroom."
            },
            {
                "tagname": "verb",
                "wordname": "assess",
                "wordMeaning": "to evaluate or estimate the value or quality of",
                "example": "The teacher assessed the students' performance in the exam."
            },
            {
                "tagname": "verb",
                "wordname": "assign",
                "wordMeaning": "to allocate or designate for a specific purpose",
                "example": "The professor assigned a research paper to the students."
            },
            {
                "tagname": "verb",
                "wordname": "assist",
                "wordMeaning": "to help or aid",
                "example": "He assisted her in carrying the heavy boxes."
            },
            {
                "tagname": "verb",
                "wordname": "assume",
                "wordMeaning": "to suppose or presume",
                "example": "She assumed he would be there on time."
            },
            {
                "tagname": "verb",
                "wordname": "astonish",
                "wordMeaning": "to surprise or amaze greatly",
                "example": "His magic tricks astonished the audience."
            },
            {
                "tagname": "verb",
                "wordname": "attach",
                "wordMeaning": "to fasten or connect",
                "example": "Please attach the document to your email."
            },
            {
                "tagname": "verb",
                "wordname": "attack",
                "wordMeaning": "to launch an offensive or aggressive action",
                "example": "The soldiers prepared to attack the enemy's fortress."
            },
            {
                "tagname": "verb",
                "wordname": "attempt",
                "wordMeaning": "to make an effort or try",
                "example": "She attempted to solve the difficult puzzle."
            },
            {
                "tagname": "verb",
                "wordname": "attract",
                "wordMeaning": "to draw or pull towards oneself",
                "example": "The colorful flowers attracted butterflies."
            },
            {
                "tagname": "verb",
                "wordname": "auction",
                "wordMeaning": "to sell goods to the highest bidder",
                "example": "They auctioned off rare paintings at the art gallery."
            },
            {
                "tagname": "verb",
                "wordname": "audit",
                "wordMeaning": "to examine or inspect financial records",
                "example": "The company hired an auditor to conduct a thorough audit."
            },
            {
                "tagname": "verb",
                "wordname": "augment",
                "wordMeaning": "to increase or make larger",
                "example": "They decided to augment their staff to meet the growing demand."
            },
            {
                "tagname": "verb",
                "wordname": "avoid",
                "wordMeaning": "to keep away from or prevent from happening",
                "example": "He tried to avoid the traffic by taking a different route."
            },
            {
                "tagname": "verb",
                "wordname": "award",
                "wordMeaning": "to give or present as a recognition or honor",
                "example": "She was awarded the Nobel Prize for her scientific research."
            },
        
            {
                "tagname": "verb",
                "wordname": "bake",
                "wordMeaning": "to cook with dry heat, typically in an oven",
                "example": "She decided to bake a cake for the party."
            },
            {
                "tagname": "verb",
                "wordname": "balance",
                "wordMeaning": "to keep steady or in equilibrium",
                "example": "He tried to balance a book on his head."
            },
            {
                "tagname": "verb",
                "wordname": "ban",
                "wordMeaning": "to prohibit or forbid",
                "example": "They decided to ban smoking in public places."
            },
            {
                "tagname": "verb",
                "wordname": "bargain",
                "wordMeaning": "to negotiate or haggle for a better deal",
                "example": "She managed to bargain the price down at the flea market."
            },
            {
                "tagname": "verb",
                "wordname": "bark",
                "wordMeaning": "to make a sharp, loud sound like a dog",
                "example": "The dog started to bark at the mailman."
            },
            {
                "tagname": "verb",
                "wordname": "bathe",
                "wordMeaning": "to wash or clean oneself with water",
                "example": "He likes to bathe in the morning to feel refreshed."
            },
            {
                "tagname": "verb",
                "wordname": "beam",
                "wordMeaning": "to emit or project a bright light",
                "example": "The lighthouse's beam guided ships safely."
            },
            {
                "tagname": "verb",
                "wordname": "beg",
                "wordMeaning": "to plead or request earnestly",
                "example": "The homeless man begged for some spare change."
            },
            {
                "tagname": "verb",
                "wordname": "behave",
                "wordMeaning": "to act or conduct oneself in a specific manner",
                "example": "The children were told to behave at the dinner table."
            },
            {
                "tagname": "verb",
                "wordname": "believe",
                "wordMeaning": "to have confidence or trust in something",
                "example": "She believed in his ability to succeed."
            },
            {
                "tagname": "verb",
                "wordname": "bend",
                "wordMeaning": "to curve or flex in a particular direction",
                "example": "He bent down to tie his shoelaces."
            },
            {
                "tagname": "verb",
                "wordname": "bet",
                "wordMeaning": "to wager or risk money on a prediction",
                "example": "He bet all his savings on the horse race."
            },
            {
                "tagname": "verb",
                "wordname": "bid",
                "wordMeaning": "to offer or propose a price or offer",
                "example": "He made a bid for the antique painting at the auction."
            },
            {
                "tagname": "verb",
                "wordname": "bind",
                "wordMeaning": "to tie or secure tightly",
                "example": "She used a rope to bind the boxes together."
            },
            {
                "tagname": "verb",
                "wordname": "bite",
                "wordMeaning": "to use the teeth to cut or grip something",
                "example": "He took a bite out of the apple."
            },
            {
                "tagname": "verb",
                "wordname": "blame",
                "wordMeaning": "to hold responsible for something negative",
                "example": "He tried to blame his mistakes on others."
            },
            {
                "tagname": "verb",
                "wordname": "bless",
                "wordMeaning": "to confer divine favor or protection",
                "example": "The priest blessed the congregation during the ceremony."
            },
            {
                "tagname": "verb",
                "wordname": "blink",
                "wordMeaning": "to open and close the eyes quickly",
                "example": "She blinked in surprise at the sudden flash of light."
            }]
)
  return (
    <div>
      <h2>word List</h2>
      <ul>
        {verb.map((verbs) => (
          // Use a unique key for each item in the list
          <li key={verbs.id}>{verbs.tagname}</li>
        ))}
      </ul>
    </div>
  )
}

export default Verb
