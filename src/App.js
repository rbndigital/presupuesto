import React,{useState,useEffect} from 'react';
import Pregunta from './componets/Pregunta';
import Formulario from './componets/Formulario';
import Listado from './componets/Listado';
import ControlPresupuesto from './componets/ControlPresupuesto';

function App() {

  const [presupuesto,setPresupuesto] = useState(0);
  const [restante,setRestante] = useState(0);
  const [verPregunta,updatePregunta] = useState(true);
  const [gastos,addGasto] = useState([]);
  const [gasto,saveGasto] = useState({});
  const [creargasto,saveCrearGasto] = useState(false);

  useEffect(() => {

    if(creargasto){
      addGasto([
        ...gastos,
           gasto
      ]);
    }

    const presupuestoRestante = restante - gasto.cantidad;

    setRestante(presupuestoRestante);

    saveCrearGasto(false);

  },[gasto]);

  return (
    <div className="container">
      
      <header>
        <h1>Gasto Semanal</h1>  
      </header>

      <div className="contenido-principal contenido">

        {verPregunta ?
          (<Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            updatePregunta={updatePregunta}
          />)
        :
        (<div className="row"> 
          
          <div className="one-half column">
            <Formulario 
              saveGasto={saveGasto}
              saveCrearGasto={saveCrearGasto}
            />
          </div>

          <div className="one-half column">
            <Listado 
              gastos={gastos}
            />

            <ControlPresupuesto 
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>)
        }
        
      </div>
    
    </div>
  );
}

export default App;
