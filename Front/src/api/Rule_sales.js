import API from "./Rule_api";

export const uploadSales = async (file) => {
  return await API.post("/api/upload", file)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err.response.data.error || "Error procesando la solicitud";
    });
};

export const getAllSales = async () => {
  return await API.get("/api/sales")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err.response.data.error || "Error procesando la solicitud";
    });
};
