import { useState } from "react";
import "./showUsers.css";
import { deleteUser, editUserInfo } from "../api/Rule_users";
import swal from "sweetalert";

function ShowUsers(props) {
  const [newUserProfile, setNewUserProfile] = useState({});

  const handleNewUserProfile = (e) => {
    setNewUserProfile({ perfil: e.target.value });
  };

  const confirmDelete = (id) => {
    //id es el item.usuarioId que le paso en el onClick del bton eliminar

    swal("Seguro que quieres eliminar este usuario?", {
      icon: "warning",
      buttons: ["Si", "No"],
    })
      .then((willNotDelete) => {
        if (!willNotDelete) {
          deleteTargetUser(id);
        }
      })
      .catch(() => {
        swal("Ha ocurrido un error", {
          icon: "error",
        });
      });
  };

  const deleteTargetUser = async (id) => {
    await deleteUser(id)
      .then((result) => {
        swal("El usuario se ha eliminado correctamente", {
          icon: "success",
          buttons: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })

      .catch((error) => {
        swal("Ha ocurrido un error", { icon: "error" });
      });
  };

  const changeProfile = async (id) => {
    if (newUserProfile != undefined) {
      await editUserInfo(id, newUserProfile)
        .then((respuesta) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          swal({ text: respuesta.message, icon: "success", buttons: "OK" });
        })
        .catch((error) => {
          swal("error", { text: error, icon: "error" });
        });
    } else {
      swal("Ha ocurrido un error", { icon: "error" });
    }
  };

  return (
    <>
      <p className="mt-12 text-lg">Lista de usuarios registrados:</p>
      <div
        className="flex w-11/12 justify-around items-center"

        //className="profile-container alignment"
      >
        <p className="block w-60 text-base font-bold text-left">
          Nombre de usuario
        </p>
        <p className="block w-60 text-base font-bold text-left">
          Correo electronico
        </p>
        <p className="block w-60 text-base font-bold text-left">Telefono</p>
        <p className="block w-32 text-base font-bold text-left">
          Rol de usuario
        </p>
        <p className="block w-32 text-base font-bold text-left" />
        <p className="block w-32 text-base font-bold text-left" />
      </div>

      {props.allUsers.map((item) => (
        <div
          className="flex w-11/12 justify-around items-center"
          key={item.usuarioId}
        >
          <p className="block w-60 text-left ">{item.nombre}</p>
          <p className="block w-60 text-left">{item.email}</p>
          <p className="block w-60 text-left">{item.telefono}</p>
          <select
            defaultValue={item.perfil == 1 ? "1" : "2"}
            onChange={handleNewUserProfile}
          >
            <option className="block w-60 text-left" value="1">
              ADMIN
            </option>
            <option className="block w-60 text-left" value="2">
              USER
            </option>
          </select>
          <button
            type="button"
            className="flex w-32 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              changeProfile(item.usuarioId);
            }}
          >
            Guardar
          </button>
          <button
            type="button"
            className="flex w-32 justify-center rounded-md bg-stone-700 text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {
              confirmDelete(item.usuarioId);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </>
  );
}

export default ShowUsers;
