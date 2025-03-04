type FirstProps = {
    name: string;
    age: number;
    isBorder?: boolean;
}
export default function First(props: FirstProps){
    return(
        <p style={{
            color: props.age<18 ? "red": "green",
            fontSize: "20px",
            border: props.isBorder ? "1px solid black": "none"
        }}>imię: {props.name} wiek: {props.age}</p>
    )
}
//Utworzyć komponent Message z propsami: text, color, fontSize, border
//Jeśli border jest true to ma mieć 1px solid black, jeśli nie to none
//uzyć w App.tsx w kilku miejscach z różnymi propsami