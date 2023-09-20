import { useState } from "react";

function FunctComponents() {
   const [contador, setContador] = useState(100) 
   
   
    return (
      <div>
        Componente Funcional
        <p>
          <button onClick={() => setContador(contador -100)}>-</button>{contador}<button onClick={() => setContador(contador + 100)}>+</button>
        </p>
      </div>
    );
}

export default FunctComponents