import { useState } from 'react'
import { Card } from './Card'
import './App.css'

function App() {

  const [nombre, setNombre]= useState("");
  const [marca, setMarca]= useState("");
  const handlerOnChange = (e)=>setNombre(e.target.value);
  const handlerOnChange2 = (e)=>setMarca(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const esValidoNombre = validarNombre(nombre);
    const esValidoMarca = validarMarca(marca);
    if (!esValidoNombre || !esValidoMarca) {
      alert("Alguno de los datos ingresados no son correctos");
      } else {
      alert(`Bienvenido: ${nombre}`);
      }
      
    

  }
    

  const validarNombre = (nombre) => {
    const sinEspacios = nombre.trim();
    if (sinEspacios.length > 2) {
    return true;
    } else {
    return false;
    }
    }
    const validarMarca =(marca)=>{
      const tiene6Caracteres = marca;
      if (tiene6Caracteres.length > 5 ) {
        return true;
        } else {
        return false;
        }
        }
  
 return (
    <div className="App">
      <h3>Formulario carros</h3>
      <form onSubmit={onSubmitForm}>
      <input
       type="text"
      placeholder="ingrese nombre"
      value={nombre}
      onChange={handlerOnChange}
/>
     <input
     type="text"
     placeholder="marca carro favorita"
     value={marca}
     onChange={handlerOnChange2}
     />
     <button type="submit" onClick={onSubmitForm}>Enviar</button>
     
  </form>
    <Card></Card>
    
      
   
    </div>
  )
}

export default App
