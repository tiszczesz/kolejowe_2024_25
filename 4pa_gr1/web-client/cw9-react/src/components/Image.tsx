import { ComponentProps } from "react";

type Props = {
  src: string;
  alt: string;
} & ComponentProps<"div">;

const Image = (props: Props) => {
  return (
    <div style={props.style} className={props.className}>
      <img src={props.src} alt={props.alt} />
      <div>{props.alt}</div>
    </div>
  );
};

export default Image;
