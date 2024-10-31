import { Link } from "react-router-dom";
import "./cartWidget.css";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const CartWidget = ({ darkMode }) => {
  return (
    <Link className="cart" to="/cart">
      <span className={darkMode ? "span span-dark" : "span"}>0</span>
      <ShoppingCartTwoToneIcon
        fontSize="large"
        className={darkMode ? "icon icon-dark" : "icon"}
      />
    </Link>
  );
};

export default CartWidget;
