import "./storeModule.css";
import noImg from "../../assets/no-pic.png";

function Card({ sale }) {
  return (
    <section className="card">
      <img
        className={!sale.img1 ? "no-img" : ""}
        src={!sale.img1 ? noImg : sale.img1}
      />
      <div>
        <h5>{sale.category}</h5>
        <spam>{sale.size.toUpperCase()}</spam>
      </div>
      <p>$$$$$</p>
    </section>
  );
}

export default Card;
