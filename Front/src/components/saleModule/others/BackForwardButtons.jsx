import "./others.css";

function BackForwardButtons({ backBt, forwardBt, btText }) {
  return (
    <aside className="back-forward">
      <button name="back" onClick={backBt}>
        Volver
      </button>
      <button name="forward" onClick={forwardBt}>
        {btText}
      </button>
    </aside>
  );
}

export default BackForwardButtons;
