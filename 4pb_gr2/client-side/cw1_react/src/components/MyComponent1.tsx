import ChildComp from "./ChildComp";

export default function MyComponent1(){
    return(
        <>
        <div>Hello</div>
        <ChildComp name="Alan" age={23}/>
        <ChildComp name="Tomasz" age={13}/>
        <ChildComp name="Bomasz" age={27}/>
        <ChildComp name="Roman" age={29}/>
        </>
    )
}