

type Props = {
    src:string;
    alt:string;
    width?:number;
    height?:number;
}

const Image = (props: Props) => {
  return (
    <img src={props.src} alt={props.alt}
    style={{width:props?.width+"px", height:props?.height+"px"}}
    className='image'/>
  )
}

export default Image