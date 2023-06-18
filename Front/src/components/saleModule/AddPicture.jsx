import "./saleModule.css";
import percha from "../../assets/percha.png";
import upload from "../../assets/upload.png";
import { useState } from "react";
import AddedImages from "./others/AddedImages";
import { useOutletContext } from "react-router-dom";

function AddPicture({ user }) {
  const [data, manageData, imgs, setImgs] = useOutletContext();

  return (
    <section className="add-picture">
      <p className="title">
        Agregá fotos reales y actuales de te prenda (máx. 4 fotos)
      </p>
      {imgs.length === 0 ? (
        <div className="ap-div">
          <img src={percha} />
          <label htmlFor="ap-uploadimage">
            <img src={upload} />
            Cargar foto
            <input
              id="ap-uploadimage"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setImgs((i) => {
                  return [...i, e.target.files[0]];
                });
              }}
            />
          </label>
        </div>
      ) : (
        <>
          <AddedImages imgs={imgs} setImgs={setImgs} />
        </>
      )}
    </section>
  );
}

export default AddPicture;
