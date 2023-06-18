import React, { useEffect, useState } from "react";
import cart from "../assets/cart.svg";
import favourite from "../assets/favourite.svg";
import store from "../assets/store.svg";
import user from "../assets/user.svg";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import search from "../assets/search.svg";
import chdown from "../assets/chevron-down.svg";
import line from "../assets/line.svg";
import "../components/header.css";
import { isAuth } from "../api/Rule_auth_users";
import { useNavigate } from "react-router-dom";
import { getCurrentSessionUser } from "../api/Rule_users";
import swal from "sweetalert";

function Header() {
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); //window.location.reload();
  };
  const showProfile = async () => {
    //setCurrentUser(JSON.parse(localStorage.getItem("user")));
    await getCurrentSessionUser()
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    showProfile();
  }, []);

  return (
    <>
      <header>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} />
        </div>
        <div className="group">
          <button className="menuButton">
            <img src={user} />
          </button>
          <div className="popover">
            {isAuth() ? (
              <>
                <button>
                  {currentUser?.nombre}
                  <img src={chdown} />
                </button>
                <div className="menu">
                  <button>
                    <img id="user-avatar" src={avatar} />
                    <span id="user-profile">
                      Hola, {currentUser?.nombre}
                      <span id="user-mail">{currentUser?.email}</span>
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/usuarios/${currentUser.id}`);
                    }}>
                    Mi perfil
                  </button>
                  <img src={line} />
                  <button>Notificaciones</button>
                  <img src={line} />
                  <button
                    onClick={() => {
                      navigate("/sales");
                    }}>
                    Vender
                  </button>
                  <img src={line} />
                  <button>Publicaciones activas</button>
                  <img src={line} />
                  <button>Historial</button>
                  <img src={line} />
                  <button>Billetera</button>
                  <img src={line} />
                  <button
                    onClick={() => {
                      logOut();
                    }}>
                    Salir
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}>
                Login
              </button>
            )}
          </div>
          <button className="menuButton">
            <img src={cart} />
          </button>
          <button className="menuButton">
            <img src={favourite} />
          </button>
          <button className="menuButton">
            <img src={store} />
          </button>
        </div>
        <nav>
          <div className="popover">
            <button onClick={() => navigate("/store")}>
              <h2>TIENDA</h2>
              <img src={chdown} />
            </button>
            <div className="menu-tienda">
              <div>
                <h2>Ver todo</h2>
                <h2>Nuevos ingresos</h2>
              </div>
              <div>
                <h2>Mujer</h2>
                <a>Abrigos/Camperas</a>
                <a>Accesorios</a>
                <a>Camisas</a>
                <a>Calzado</a>
                <a>Pantalones</a>
                <a>Polleras</a>
                <a>Remeras/Buzos</a>
                <a>Vestidos</a>
                <a>Otros</a>
              </div>
              <div>
                <h2>Hombre</h2>
                <a>Abrigos/Camperas</a>
                <a>Accesorios</a>
                <a>Camisas</a>
                <a>Calzado</a>
                <a>Pantalones</a>
                <a>Remeras/Buzos</a>
                <a>Otros</a>
              </div>
              <div>
                <h2>Accesorios</h2>
                <a>Lentes</a>
                <a>Mochilas</a>
                <a>Gorros</a>
                <a>Otros</a>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              navigate(`/comofunciona`);
            }}>
            <h2>COMO FUNCIONA</h2>
          </button>
          <button
            onClick={() => {
              navigate(`/sobreNosotros`);
            }}>
            <h2>SOBRE NOSOTROS</h2>
          </button>
          <button
            onClick={() => {
              navigate(`/blog/lista`);
            }}>
            <h2>BLOG</h2>
          </button>
          <form className="search-container">
            <input
              type="text"
              id="search-bar"
              placeholder="Buscar prendas, accesorios y mas..."
            />
            <button className="search-button">
              <img src={search} />
            </button>
          </form>
        </nav>
      </header>
    </>
  );
}

export default Header;
