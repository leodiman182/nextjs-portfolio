import "./style.scss";

export default function CustomButtom({ onClick, children }) {
  return (
    <div onClick={onClick} className="container">
      <button>{children}</button>
    </div>
  );
}
