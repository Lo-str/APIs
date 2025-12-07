import Projects from "../../components/Projects/Projects.jsx"
import styles from "./About.module.scss"
import arcane from "../../assets/images/arcane.svg"
import { useState } from "react"

const projectsData = [
  {
    id: "arcane",
    name: "Arcane Laboratorium ",
    repo: "https://github.com/Lo-str/js-quest.git",
    image: arcane,
    tech: [
      "#JavaScript ",
      "#HTML5 ",
    ],
    writeUp: {
      goal: "Arcane Laboratorium is a text-based library manager wrapped in a medieval-fantasy theme. Users can add books, list their library, mark books as read or unread, remove books, and receive immersive in-world feedback.",
      learned: "I deepened my understanding of JavaScript program flow, error handling, and state management in a no-framework environment. I practiced input validation, edge-case protection, and the creation of reusable functions for menu-driven programs. I also refined how to theme logic and text feedback to match a narrative aesthetic.",
      role: "Solo project",
      challenges: [
        "Handling invalid inputs without breaking the flow",
        "Preventing undefined behaviours in nested prompts",
        "Designing a clean state system to track book data",
        "Creating short, immersive fantasy-style messages that remain usable and clear"
      ]
    },
    toSum: "This project strengthened my ability to write interactive JavaScript tools using only core language features."
  },
  {
    id: "vault",
    name: "Vault of the Realm ",
    repo: "https://github.com/Lo-str/js-quest.git",
    image: arcane,
    tech: [
      "#JavaScript ",
      "#HTML5 ",
      "#DOM "
    ],
    writeUp: {
      goal: "Vault of the Realm is a fantasy-themed ATM simulator. Users can deposit, withdraw, and check balances through a narrative interface. It replicates real account-logic safely while maintaining an engaging RPG-style experience.",
      learned: "This project reinforced concepts such as object-oriented programming, method design, conditional routes, and reprompt logic. I learned to anticipate user mistakes as well as redirect them, and I practiced designing a consistent performance loop without UI frameworks.",
      role: "Solo development: logic, design, theme, and testing.",
      challenges: [
        "Implementing a reprompt system that only triggers on errors",
        "Managing program state across nested menus",
        "Preventing invalid withdrawals without crashing the loop",
        "Keeping the theme coherent while maintaining clarity"
      ]
    },
    toSum: "This project was a great exercise in error-tolerant financial logic and controlled UI flow inside JavaScript."
  },
  {
    id: "seer",
    name: "Seer's Challenge ",
    repo: "https://github.com/Lo-str/js-quest.git",
    image: arcane,
    tech: [
      "#HTML5 ",
      "#CSS / SCSS ",
    ],
    writeUp: {
      goal: "Seer’s Challenge is a medieval-fantasy number-guessing game where players attempt to divine a secret number chosen by the Seer. They receive hints until they guess correctly, with difficulty levels and scoring logic.",
      learned: "I practiced random number generation, event-driven JavaScript, user-feedback loops, and DOM-based UI updates. I refined how difficulty affects game variables and learned to balance a simple mechanic with polished, readable code.",
      role: "Solo project: full design, mechanics, visual styling, and thematic writing.",
      challenges: [
        "Ensuring the game loop never locks or becomes unwinnable",
        "Balancing difficulty with feedback timing",
        "Managing score resets and state changes cleanly",
        "Building a polished, fantasy-themed UI without external libraries"
      ]
    },
    toSum: "This project strengthened my ability to build small, engaging browser games from scratch."
  }
];

function About() {
  const [search, setSearch]= useState("")

  const filteredData = projectsData.filter((project) => {
    const userInput = search.toLocaleLowerCase()
    const matchName = project.name.toLocaleLowerCase().includes(userInput)
    const matchTech = project.tech.some((tag) => tag.toLocaleLowerCase().includes(userInput))
    
    return matchName || matchTech
  })

  return (
    <div className={styles.body}>
      <h1>Projects</h1>
      <div className={styles.search}>
        <input 
        type="text"
        className={styles.search__bar}
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.main}>
        {filteredData.map((project) =>
          <Projects
            key={project.id}
            {...project} 
          />
        )}
        
      </div>
    </div>
    )
}

export default About;
