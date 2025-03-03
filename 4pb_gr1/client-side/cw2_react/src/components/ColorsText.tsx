

type Props = {
    textColor: string
    text: string
}

const ColorsText = ({text,textColor}: Props) => {
  return (
    <div style={{color:textColor}}>{text}</div>
  )
}

export default ColorsText