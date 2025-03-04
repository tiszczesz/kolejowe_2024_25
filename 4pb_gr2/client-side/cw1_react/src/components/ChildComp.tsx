type ChildCompProps = {
  name: string;
  age: number;
};
function ChildComp(props: ChildCompProps) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h5>{props.name}</h5>
      <p>Wiek: {props.age}</p>
    </div>
  );
}

export default ChildComp;
//utwórz komponent BookComponent, który przyjmuje 
// propsy: title, author, pages, price
//wygeneruj 3 różne książki
//wyświetl je na stronie