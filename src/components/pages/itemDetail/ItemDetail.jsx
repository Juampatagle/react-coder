import "./itemDetail.css";
const ItemDetail = ({ item, darkMode }) => {
  //se recibe el item como prop desde el container
  console.log(item);

  return (
    <div className={darkMode ? "item-detail item-detail-dark" : "item-detail "}>
      <h2 className="title">{item.title}</h2>
      <img src={item?.imageUrl} alt={item.title} />
      <h3>Precio: ${item?.price?.toFixed(2)}</h3>
      <p className="info">{item?.description}</p>
      <span className={darkMode ? "stock stock-dark" : "stock stock-light"}>
        <b>Disponibles: </b>
        {item.stock ? (
          <span>{item?.stock} unidades.</span>
        ) : (
          <span className="agotado">&quot;Producto agotado&quot;</span>
        )}
      </span>
    </div>
  );
};

export default ItemDetail;
