import "./others.css";

function AddedImages({ imgs, setImgs }) {
  return (
    <div className="added-images">
      {imgs.map((i, k) => {
        return (
          <div
            key={k}
            onClick={() => {
              setImgs((imgs) => {
                return imgs.filter((img) => img !== i);
              });
            }}>
            <img src={URL.createObjectURL(i)} />
          </div>
        );
      })}
      {imgs.length < 4 ? (
        <div>
          <label htmlFor="ai-uploadimage">+</label>
          <input
            id="ai-uploadimage"
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImgs((i) => {
                return [...i, e.target.files[0]];
              })
            }
          />
        </div>
      ) : null}
    </div>
  );
}

export default AddedImages;
