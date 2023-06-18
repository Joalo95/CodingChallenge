import React from "react";
import imgHeader from "../assets/blogHeader.png";
import line from "../assets/line.svg"
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { listarBlogs } from "../api/Rule_blogs";
import Header from "./header";
import Footer from "./footer";


function Blog() {

  const [blogs, setBlogs] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const { idBlog } = useParams;

  const fetchBlogs = async () => {
    try {
      const response = await listarBlogs()
      setBlogs(response);
      console.log(response);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing data");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Request Failed");
      }
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-around h-1/4">
          <img className="w-11/12 rounded-3xl -z-50" src={imgHeader} alt="Blog img" />
          <div className="absolute flex flex-col items-start w-[250px] h-[300px] top-[16rem] right-[6rem] bg-slate-100/[.85] rounded-[20px] p-4 -z-20">
            <h2 className="text-2xl text-gray-800 text-center font-semibold py-3">Ferias circulares</h2>
            <img src={line} />
            <p className="text-sm text-gray-800 text-start font-semibold py-4">Compra productos locales, sostenibles y éticos. <br />Haz un cambio positivo hoy mismo!</p>
            <span className="text-xs text-gray-800/90 italic py-3">Lectura de 5 minutos.</span>
            <button className="absolute top-[15rem] right-[2rem] w-[100px] flex justify-center items-center bg-[#ffbc6d] rounded-[10px] text-[#1c2329] hover:bg-[#f68f56] hover:text-[#fdfdfd] -z-10">Leer más</button>
          </div>
        </div>
        <h2 className="text-2xl text-gray-800 text-center font-semibold py-4">Descubre más</h2>
        <div role="list" className="grid grid-cols-3 grid-rows-3 w-screen gap-2 place-items-center">
          {blogs?.map((card) => {
            return (

              <li key={card.id} className="group/item hover:bg-slate-100 bg-white rounded-[20px] w-[15rem] h-[18rem] flex flex-col items-center justify-around">
                <img src={`http://${card.img}`} alt="Foto" />
                <div>
                  <h2 className="text-2xl text-gray-800 text-start font-semibold p-2">{card.titulo}</h2>
                  <p className="text-xs italic text-gray-800 text-start font-semibold p-2">{`Lectura de ${card.tiempo_lectura} minutos`}</p>
                </div>
                <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible p-1 w-[100px] h-[2rem] rounded-[10px]" href="">
                  <span className="group-hover/edit:text-gray-700">Ver más</span>
                  <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500">
                  </svg>
                </a>
              </li>
            );
          })}
        </div>
        <h2 className="text-2xl text-gray-800 text-center font-semibold py-4">Ver anteriores</h2>
      </section>
      <Footer />
    </>
  )
}
export default Blog;
