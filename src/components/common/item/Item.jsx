import { Button } from "@mui/material";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ item, darkMode }) => {
  return (
    <div className={darkMode ? " card card-dark" : "card card-light"}>
      <h2 className="info title">{item.title}</h2>
      <img src={item.imageUrl} alt={item.title} className="card-image" />
      <h3 className="info">
        Precio: <b>${item.price.toFixed(2)}</b>
      </h3>
      <h3 className="info">
        <b>Disponibles: </b>
        {item.stock ? (
          <span className="disponibles">{item.stock} unidades.</span>
        ) : (
          <span className="agotado">
            <b> &quot;Producto agotado&quot;</b>
          </span>
        )}
      </h3>
      <Link to={`/itemDetail/${item.id}`}>
        <span className="detail-button">
          <Button variant="outlined">Ver detalle</Button>
        </span>
      </Link>
    </div>
  );
};

export default Item;
