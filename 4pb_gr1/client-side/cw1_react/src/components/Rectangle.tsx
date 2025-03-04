type Props = {
  widthRect: number;
  heightRect: number;
  colorRect: string;
  borderRect: string;
};

function Rectangle(props: Props) {
  return (
    <div
      style={{
        width: props.widthRect + "px",
        height: props.heightRect + "px",
        backgroundColor: props.colorRect,
        border: props.borderRect,
      }}
    ></div>
  );
}

export default Rectangle;
