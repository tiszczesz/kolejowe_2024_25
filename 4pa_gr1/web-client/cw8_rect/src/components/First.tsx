type FirstProps = {
    content: string;
    firstColor: string;
}
export default function First(props: FirstProps) {
    return(
        <>
            <h5 style={{color:props.firstColor}}>{props.content}</h5>
            <p>Ala sasdasd adad</p>
        </>
    )
}
//napisz komponent Info, który przyjmuje propsy title, 
// description, color
//i wyświetla te informacje w formie diva w ramce