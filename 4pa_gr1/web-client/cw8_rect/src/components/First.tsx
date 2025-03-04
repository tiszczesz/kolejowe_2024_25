import Textinfo from "./Textinfo";

type FirstProps = {
    content: string;
    firstColor: string;
}
export default function First(props: FirstProps) {
    return(
        <>
            <h5 style={{color:props.firstColor}}>{props.content}</h5>
            <Textinfo content={props.content} downLimit={5} upLimit={10}/>
            <Textinfo content={props.content} downLimit={2} upLimit={15}/>
        </>
    )
}
//napisz komponent Info, który przyjmuje propsy title, 
// description, color
//i wyświetla te informacje w formie diva w ramce