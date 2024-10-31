import ItemDetail from "./ItemDetail";
import products from "../../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ darkMode }) => {
  const { id } = useParams();
  const [item, setItem] = useState({}); //aqui se guarda el item en el useState

  useEffect(() => {
    //buscar el producto por id en el array de productos:
    let productSelected = products.find((product) => product.id === id);
    console.log(productSelected);

    setItem(productSelected);
  }, [id]);

  /* el componente presentacional recibe el item por props */
  return <ItemDetail darkMode={darkMode} item={item} />;
};

export default ItemDetailContainer;
