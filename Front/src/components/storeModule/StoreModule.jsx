import "./storeModule.css";
import Footer from "../footer";
import Header from "../header";
import Card from "./Card";
import { getAllSales } from "../../api/Rule_sales";
import { useEffect, useState } from "react";

function StoreModule() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    getSales();
  }, []);

  const getSales = async () => {
    await getAllSales().then((res) => {
      setStore(res);
    });
  };
  return (
    <>
      <Header />
      <main className="store-module">
        {store.length < 1 ? (
          <p>Cargando..</p>
        ) : (
          store.map((s, k) => {
            return <Card key={k} sale={store[k]} />;
          })
        )}
      </main>
      <Footer />
    </>
  );
}

export default StoreModule;
