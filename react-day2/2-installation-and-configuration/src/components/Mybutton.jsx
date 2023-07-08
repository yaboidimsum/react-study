/* eslint-disable react/prop-types */
export default function Mybutton({ text, onClick }) {
  const myStyle = text !== "Reset!" ? {} : { margin: 30, display: "block" };

  // It returns a button element with the text and onClick props
  return (
    <button onClick={onClick} style={myStyle}>
      {text}
    </button>
  );
}
