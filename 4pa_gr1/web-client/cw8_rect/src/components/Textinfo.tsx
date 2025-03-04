type Props = {
  content: string;
  downLimit: number;
  upLimit: number;
};

export default function Textinfo({ content, downLimit, upLimit }: Props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        textDecoration: content.length <= downLimit ? "line-through" : "none",
        color: content.length >= upLimit ? "red" : "black",
      }}
    >
      {content}
    </div>
  );
}
