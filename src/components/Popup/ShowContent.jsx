function ShowContent(props) {
  return(
    <div>
      <p>{props.writeUp.goal}</p>
      <p>{props.writeUp.learned}</p>
      <p>{props.writeUp.role}</p>
      <p>{props.toSum}</p>
    </div>
  )
}

export default ShowContent
