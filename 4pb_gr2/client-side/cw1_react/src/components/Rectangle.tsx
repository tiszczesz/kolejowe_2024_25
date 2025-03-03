

type Props = {
    width: number;
    height: number;
    color: string;
    isBorder?: boolean;
}

const Rectangle = (props: Props) => {
  return (
    <div style={{
        width: props.width+'px',
        height: props.height+'px',
        backgroundColor: props.color,
        border: props.isBorder ? '2px solid black' : ''
    }}></div>
  )
}

export default Rectangle