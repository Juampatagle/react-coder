import { useState } from "react";
const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1); //va a sumar de 1 en 1 y se va a mostrar en el navegador (DOM)
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={sumar}>sumar</button>
      <h2>Contador: {contador}</h2>
      <button onClick={restar}>restar</button>
    </div>
  );
};
export default Counter;
