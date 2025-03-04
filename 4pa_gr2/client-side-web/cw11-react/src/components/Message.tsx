type Props = {
    text: string;
    color: string;
    fontSize: string;
    border: boolean;
}

function Message(props: Props) {
  return (
    <div
    style={{
        color: props.color,
        fontSize: props.fontSize,
        border: props.border ? "1px solid black": "none"
    }}
    >{props.text}</div>
  )
}

export default Message