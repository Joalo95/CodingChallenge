import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  searchUserById,
  getAllUsers,
  editUserInfo,
  deleteUser,
} from "../api/Rule_users";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShowUsers from "../components/ShowUsers";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

function Profile() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUserDetails = async (user) => {
    await searchUserById(user)
      .then((result) => {
        setUserDetails(result);
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  const getAllList = async () => {
    await getAllUsers()
      .then((result) => {
        setAllUsers(result);
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  const onSubmit = async (data) => {
    if (data != undefined) {
      await editUserInfo(id, data)
        .then((respuesta) => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          swal({ text: respuesta.message, icon: "success", buttons: "OK" });
        })
        .catch((error) => {
          swal({ text: error, icon: "error" });
        });
    } else {
      swal("Ha ocurrido un error", { icon: "error" });
    }
  };

  const confirmDelete = (id) => {
    swal("Seguro que quieres eliminar tu cuenta?", {
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
        localStorage.removeItem("token");
        swal("Tu cuenta se ha eliminado correctamente", {
          icon: "success",
        });
        navigate("/");
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
      });
  };

  useEffect(() => {
    getUserDetails(id);
  }, []);

  useEffect(() => {
    getAllList();
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className="mt-12 text-2xl">
          Hola, <strong>{userDetails?.nombre}</strong>
        </h1>
        <section className="flex flex-col w-full justify-center items-center">
          <p className="mt-12 text-lg">TU INFO</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-full justify-center gap-2 mt-8">
              <label className="block w-80 py-1.5 bg-orange-100 rounded-md">
                Nombre de usuario
              </label>
              <input
                id="userName"
                disabled
                type="text"
                className="block w-80 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={userDetails?.nombre}
                {...register("nombre")}
              />
              <button
                type="button"
                className="flex w-30 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  const userInputs = document.getElementById("userName");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div className="flex w-full justify-center gap-2 mt-4">
              <label className="block w-80 py-1.5 bg-orange-100 rounded-md">
                Correo electronico:
              </label>
              <input
                id="userEmail"
                disabled
                type="email"
                className="block w-80 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={userDetails?.email}
                {...register("email")}
              />
              <button
                type="button"
                className="flex w-30 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  const userInputs = document.getElementById("userEmail");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div className="flex w-full justify-center gap-2 mt-4">
              <label className="block w-80 py-1.5 bg-orange-100 rounded-md">
                Telefono
              </label>
              <input
                id="userTel"
                disabled
                type="tel"
                className="block w-80 rounded-md border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={userDetails?.telefono}
                {...register("telefono")}
              />
              <button
                type="button"
                className="flex w-30 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  const userInputs = document.getElementById("userTel");
                  userInputs.removeAttribute("disabled");
                }}
              >
                Editar
              </button>
            </div>
            <div className="flex w-full justify-center gap-4 my-12">
              <button
                type="submit"
                className="flex w-40 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Guardar cambios
              </button>
              <button
                type="button"
                className="flex w-40 justify-center rounded-md bg-orange-300 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Reestablecer
              </button>
              <button
                type="button"
                className="flex w-40 justify-center rounded-md bg-stone-700 text-white px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  confirmDelete(id);
                }}
              >
                Eliminar cuenta
              </button>
            </div>
          </form>
        </section>
        <section className="flex flex-col w-full justify-center items-center">
          {userDetails?.perfil == "1" && <ShowUsers allUsers={allUsers} />}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
