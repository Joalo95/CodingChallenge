import { useOutletContext } from "react-router-dom";
import "./saleModule.css";
import LabelInput from "./others/LabelInput";

function ProductDescription() {
  const brands = [
    "H&M",
    "Zara",
    "Forever 21",
    "Tommy Hilfiger",
    "Legacy",
    "Rapsodia",
    "Otras",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [data, manageData] = useOutletContext();
  return (
    <section className="product-description">
      <p className="title">
        Ahora te pedimos agregar algunos datos sobre tu prenada
      </p>
      <form>
        <LabelInput
          label="Descripción/Tipo de tela o material:"
          id="pd-description"
          type="text"
          name="description"
          value={data.description}
          onInput={(e) => manageData(e)}
        />
        <span>Ejemplo: Campera de jean, remera de algodón</span>
        <label htmlFor="pd-brand">Marca:</label>
        <select
          id="pd-brand"
          name="brand"
          value={data.brand}
          onChange={(e) => manageData(e)}>
          <option value="0">Seleccionar</option>
          {brands.map((b, k) => {
            return (
              <option key={k} value={b}>
                {b}
              </option>
            );
          })}
        </select>
        <div>
          <div className="color-size">
            <LabelInput
              label="Color:"
              id="pd-color"
              type="text"
              name="color"
              value={data.color}
              onInput={(e) => manageData(e)}
            />
          </div>
          <div className="color-size">
            <label htmlFor="pd-size">Talle:</label>
            <select
              id="pd-size"
              name="size"
              value={data.size}
              onChange={(e) => manageData(e)}>
              <option value="0">Seleccionar</option>
              {sizes.map((s, k) => {
                return (
                  <option key={k} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <label htmlFor="pd-sex">Seleccioná el género:</label>
        <div id="pd-sex">
          <button
            name="sex"
            className={data.sex === "Mujer" ? "btSelected" : undefined}
            value={"Mujer"}
            onClick={(e) => manageData(e)}>
            Mujer
          </button>
          <button
            name="sex"
            className={data.sex === "Hombre" ? "btSelected" : undefined}
            value={"Hombre"}
            onClick={(e) => manageData(e)}>
            Hombre
          </button>
          <button
            name="sex"
            className={data.sex === "Unisex" ? "btSelected" : undefined}
            value={"Unisex"}
            onClick={(e) => manageData(e)}>
            Unisex
          </button>
        </div>
      </form>
    </section>
  );
}

export default ProductDescription;
