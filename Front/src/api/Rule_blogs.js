import API from "./Rule_api";

export const crearBlog = (form) => {
    //Debido a que paso un form asigno el header
    return API.post("/blog/nuevo", form, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return (error)
        });
};

export const editarBlog = (form) => {
    //Debido a que paso un form asigno el header
    return API.put("/blog/editar", form, { headers: { "Content-Type": "multipart/form-data" } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return (error)
        });
};

export const eliminarBlog = (id) => {
    return API.delete("/blog/eliminar/" + id)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const listarBlogs = async () => {
    return await API.get("/blog/lista")
        .then((response) => {
            return response.data; //ARRAY de objetos es el data
        })
        .catch((error) => {
            throw error.response.data.error || "Error procesando la solicitud";
        });
};
