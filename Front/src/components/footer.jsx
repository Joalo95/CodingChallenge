import React from "react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
import "../components/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <h2>Seguinos en:</h2>
          <div className="social-icons">
            <button>
              <img src={facebook} />
            </button>
            <button>
              <img src={instagram} />
            </button>
            <button>
              <img src={twitter} />
            </button>
            <button>
              <img src={tiktok} />
            </button>
          </div>
        </div>
        <div>
          <p>Quienes Somos</p>
          <p>Politicas de privacidad</p>
          <p>Politicas de devoluciones</p>
          <p>Terminos y condiciones</p>
          <p>Preguntas Frecuentes</p>
          <p>Trabaja con nosotros</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
