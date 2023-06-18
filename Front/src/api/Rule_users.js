import API from "./Rule_api";

export const getCurrentSessionUser = async () => {
  const url = `/api/usuarios/currentsession`;
  return await API.get(url)
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const getAllUsers = async () => {
  const url = `/api/usuarios`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const searchUserById = async (id) => {
  const url = `/api/usuario/${id}`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error.response.data.error;
    });
};

export const deleteUser = async (id) => {
  const url = `/api/usuario/borrar/${id}`;
  return await API.delete(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      alert(error.message);

      throw error.response.data.message;
    });
};

export const editUserInfo = async (id, perfil) => {
  const url = `/api/usuario/editar/${id}`;
  console.log(perfil);
  return await API.put(url, perfil)
    .then((response) => {
      console.log("ruleuser response" + response.data);
      return response.data;
    })
    .catch((error) => {
      //console.log("ruleuser error" + error);
      throw error.response.data.error;
    });
};
