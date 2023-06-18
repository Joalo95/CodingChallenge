import { useNavigate } from "react-router-dom";
import photo from "../assets/404.jpg";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <main className="flex flex-col justify-start items-center h-full">
      <img src={photo} className="h-1/3 rounded-3xl mt-20" />
      <p className=" text-center text-base leading-6 shadow-orange-300 my-20 w-3/4">
        No se puede encontrar la página.
        <br />
        <br />
        Intenta recargar la página o haz click en el botón debajo para ir a la
        página principal.
      </p>
      <button
        className="h-10 bg-orange-400 border p-2 rounded-xl"
        onClick={() => navigate("/")}
      >
        Ir a la página principal
      </button>
    </main>
  );
}
export default ErrorPage;
