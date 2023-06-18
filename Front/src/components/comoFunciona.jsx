import React from "react";
import img1 from "../assets/comoFuncionaHeader.png";
import Footer from "./footer";
import Header from "./header";
function ComoFunciona() {
  return (
    <>
      <Header />
      <section className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-around h-1/4">
          <h1 className="text-[2rem] text-gray-50 text-center font-bold translate-y-80 -z-10">
            Cómo comprar y vender?
          </h1>
          <img
            src={img1}
            className="w-11/12 rounded-3xl -translate-y-8 -z-50"
          />
        </div>
        <div className="flex flex-col items-center justify-around h-20 p-3">
          <p className="text-sm text-gray-800 text-center font-semibold">
            Aquí te explicamos cómo funcionan nuestros procesos de compra y
            venta para que puedas aprovechar al máximo nuestro servicio .
          </p>
        </div>
        <div className="flex flex-col items-center justify-around h-1/4 p-3">
          <h2 className="text-2xl text-gray-800 text-center font-semibold">
            Cómo comprar?
          </h2>
          <p className="text-sm text-gray-800 text-center font-semibold">
            Navega por nuestra amplia selección de ropa de segunda mano y
            encuentra las mejores prendas a los mejores precios . Utiliza
            nuestros filtros para facilitar tu búsqueda, desde marcas hasta
            tallas y colores. Cuando encuentres algo que te guste, revisa la
            descripción del producto y las fotos para asegurarte de que es el
            adecuado para ti. Agrega los productos que desees a tu carrito de
            compras y procede al pago. Aceptamos diferentes formas de pago,
            incluyendo tarjetas de crédito y débito, así como transferencias
            bancarias. Después de hacer el pedido, te proporcionaremos un número
            de seguimiento para que puedas rastrear tu paquete en todo momento.
            Recibe tus productos en la comodidad de tu hogar y disfruta de tu
            compra.
          </p>
        </div>
        <div className="flex flex-col items-center justify-around h-1/4 p-3">
          <h2 className="text-2xl text-gray-800 text-center font-semibold">
            Cómo vender?
          </h2>
          <p className="text-sm text-gray-800 text-center font-semibold">
            Regístrate en nuestro sitio web y crea tu cuenta. Agrega una
            descripción detallada de cada prenda que deseas vender y sube fotos
            de las mismas. Confirma que tanto los datos de la prenda asi como
            tus datos personales sean correctos para enviar la solicitud Nuestro
            equipo procesara la solicitud y se pondrá en contacto contigo a la
            brevedad para coordinar la recepción de las prendas aceptadas.
            Acepta o modifica los precio sugeridos para tus prendas, para que se
            publiquen en nuestra web y se exhiban en nuestro local. Una vez que
            alguien haga una compra en tu tienda, te notificaremos y podrás ver
            tus créditos disponibles en tu billetera. Recibe el pago por tus
            ventas directamente en tu cuenta bancaria, retíralo en efectivo o
            utilízalo para comprar otras prendas.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default ComoFunciona;
