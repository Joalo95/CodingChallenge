import { useEffect, useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

function Modal() {
  const [activeTab, setActiveTab] = useState(true);

  const showTab = () => {
    activeTab === true ? loginTab() : registerTab();
  };

  const loginTab = () => {
    const selectTab1 = document.getElementById("selectedTab1");
    const selectTab2 = document.getElementById("selectedTab2");

    selectTab1.classList.add("text-gray-600");
    selectTab2.classList.add("text-gray-300");
    if (selectTab2.classList.contains("text-gray-600")) {
      selectTab2.classList.remove("text-gray-600");
    }
    if (selectTab1.classList.contains("text-gray-300")) {
      selectTab1.classList.remove("text-gray-300");
    }
    return;
  };

  const registerTab = () => {
    const selectTab1 = document.getElementById("selectedTab1");
    const selectTab2 = document.getElementById("selectedTab2");

    selectTab2.classList.add("text-gray-600");
    selectTab1.classList.add("text-gray-300");
    if (selectTab1.classList.contains("text-gray-600")) {
      selectTab1.classList.remove("text-gray-600");
    }
    if (selectTab2.classList.contains("text-gray-300")) {
      selectTab2.classList.remove("text-gray-300");
    }
    return;
  };

  useEffect(() => {
    showTab();
  }, [activeTab]);

  return (
    <div className="flex min-h-full flex-col justify-center rounded border-black w-full px-6 py-12 h-100 lg:px-8 bg-white ">
      <div className="sm:mx-auto flex justify-between sm:w-full sm:max-w-sm ">
        <h2
          id="selectedTab1"
          className="mt-10 text-6 font-bold leading-9 tracking-tight underline-offset-8 underline decoration-6"
          onClick={() => setActiveTab(true)}
        >
          Iniciar sesión
        </h2>
        <h2
          id="selectedTab2"
          className="mt-10 text-6 font-bold leading-9 tracking-tight underline-offset-8 underline decoration-6"
          onClick={() => setActiveTab(false)}
        >
          Registrarse
        </h2>
      </div>
      {activeTab === true ? <Login /> : <Register />}
    </div>
  );
}
export default Modal;
