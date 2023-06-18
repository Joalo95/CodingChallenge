import { useOutletContext } from "react-router-dom";
import BackForwardButtons from "./others/BackForwardButtons";
import "./saleModule.css";
import LabelInput from "./others/LabelInput";

function Confirmation() {
  const [data, manageData, imgs, setImgs, user] = useOutletContext();
  return (
    <section className="confirmation">
      <p className="title">
        Para finalizar, confirmá que los datos sean correctos
      </p>
      <div className="confirmation-data">
        <div className="clothes-data">
          <strong>Datos de la prenda</strong>
          <LabelInput
            label="Categoría:"
            id="c-category"
            type="text"
            value={data.category}
            disabled
          />
          <LabelInput
            label="Descripción/Tipo de tela o material:"
            id="c-description"
            type="text"
            value={data.description}
            disabled
          />
          <div>
            <div>
              <LabelInput
                label="Marca:"
                id="c-brand"
                type="text"
                value={data.brand}
                disabled
              />
            </div>
            <div>
              <LabelInput
                label="Color"
                id="c-color"
                type="text"
                value={data.color}
                disabled
              />
            </div>
          </div>
          <div>
            <div>
              <LabelInput
                label="Talle:"
                id="c-size"
                type="text"
                value={data.size}
                disabled
              />
            </div>
            <div>
              <LabelInput
                label="Género:"
                id="c-sex"
                type="text"
                value={data.sex}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="contact-data">
          <strong>Datos de contacto:</strong>
          <label htmlFor="c-name">Nombre:</label>
          <input type="text" id="c-name" value={user.nombre} disabled />
          <label htmlFor="c-mail">E-mail:</label>
          <input type="text" id="c-mail" value={user.email} disabled />
          <label htmlFor="c-phone">Teléfono:</label>
          <input type="text" id="c-phone" disabled />
        </div>
      </div>
    </section>
  );
}

export default Confirmation;
