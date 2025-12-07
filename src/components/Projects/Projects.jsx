import {useState} from "react"
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "../Popup/Popup.jsx"
import ShowContent from "../Popup/ShowContent.jsx"
import styles from "./Projects.module.scss"

function Projects(props){
  const {
    name,
    image,
    repo,
    tech = [],
    writeUp,
    toSum,
  } = props;
  const [show, setShow] = useState(false)
  const [popupImg, setPopupImg] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  function ToggleContent(){
    setShow(s => !s)

  }

  function OpenPopup(img){
    setPopupImg(img)
    setIsOpen(true)
  }

  function ClosePopup(){
    setIsOpen(false)
    setPopupImg(null)
  }

  return (
    <>
      <div className={styles.card}>
        <h2
          onMouseEnter={() => OpenPopup(image)}
          className={styles.name}
        >
          {name}
        </h2>

        {isOpen &&(
          <Popup
            image={popupImg}
            onMouseLeave={ClosePopup}
          />
        )} 
        <br />
        <div className={styles.wrap}>

          <div className={styles.tech}>
            {tech.map((tech, i) => (
              <span key={i}>{tech}</span>))}
          </div>

          <a className="projectRepo" href={repo} target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} style={{ color: "white"}} />
          </a>
          <br />
        </div>

        <button
          className="btn"
          onClick={ToggleContent}
        >
          {show ? "Show less" : "Show more"}
        </button>

        {show && (
          <ShowContent
            writeUp={writeUp}
            toSum={toSum}
          />
        )}

        <div className={styles.writeUp}>
          <h3 className="writeUp">Write Up</h3>
          <h4 className="goal">What the project does</h4>
          <p>{writeUp.goal}</p>

          <h4 className="learned">What I learned</h4>
          <p>{writeUp.learned}</p>

          <h4 className="role">My role</h4>
          <p>{writeUp.role}</p>

          <h4 className="challenges">Challenges I encountered</h4>
          <ul>
            {writeUp.challenges.map((challenges, i) => (
            <li key={i}>{challenges}</li>
            ))}
          </ul>

          <p className={styles.toSum}>{toSum}</p>
        </div>
      </div>
    </>
  )
}

export default Projects
