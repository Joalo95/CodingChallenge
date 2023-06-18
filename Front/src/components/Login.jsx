import { useForm } from "react-hook-form";
import { loginSesion } from "../api/Rule_auth_users";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>
    await loginSesion(data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        swal({ text: error, icon: "error" });
        //alert(error);
      });
  return (
    <div id="loginForm" className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="space-y-6"
        action="#"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="flex text-xs font-small leading-6 text-gray-400"
          >
            Correo electrónico
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">El email es requerido</p>
            )}
          </div>
        </div>

        <div>
          <div className="flex ">
            <label
              htmlFor="password"
              className="flex text-xs font-small text-gray-400"
            >
              Contraseña
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("password", { required: true })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password?.type === "required" && (
              <p role="alert">La contrasenia es requerida</p>
            )}
          </div>
          <div className="text-sm">
            <a
              href="#"
              className="flex text-xs font-small text-gray-400 hover:text-indigo-500">
              ¿Has olvidado tu contraseña?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
export default Login;
