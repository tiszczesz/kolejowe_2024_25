type MessageProps = {
  user: string,
  division: string, 
  schoolYear: string
}

function Message(props: MessageProps) {
  return (
    <div className="message">
        <h3>{props.user}</h3>
        <h4>{props.division}</h4>
        <h5>Rok szkolny {props.schoolYear}</h5>
    </div>
  )
}

export default Message