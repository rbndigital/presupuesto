import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({saveGasto,saveCrearGasto}) => {

    const [nombre,updateNombre] = useState('');
    const [cantidad,updateCantidad] = useState(0);
    const [error,updateError] = useState(false);
    
    const addGasto = e => {
        e.preventDefault();
        
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            
            updateError(true);
            return;
        }

        updateError(false);

        const gasto = {

            nombre,
            cantidad,
            id: shortid.generate()
        }

        saveGasto(gasto);
        saveCrearGasto(true);

        updateNombre('');
        updateCantidad(0);

        return;
    }

    return(
        <form
            onSubmit={addGasto}
        >
            <h2>Agrega tus Gastos</h2>

            {error ? (<Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto."/> ): null}

            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => updateNombre(e.target.value)}
                />
            </div>


            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => updateCantidad(parseInt(e.target.value))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;