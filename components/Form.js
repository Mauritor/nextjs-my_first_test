import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import { useState } from 'react'
const Form = () => {
    const [datos, setDatos] = useState({ nombre: '', color: '' })
    const handleInput = (event) => {
        // const data = event.target.value
        setDatos({ ...datos, [event.target.name]: event.target.value })

    }
    const getDatosForm = (e) => {
        const id = Date.now();
        e.preventDefault();
        localStorage.setItem(id, JSON.stringify(datos))
        document.getElementById('miform').reset();
    }
    return (
        <>
            <p>{datos.nombre} - {datos.color}</p>
            <form id="miform" className="row" onSubmit={getDatosForm} >
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="name"
                            className="form-control"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="color"
                            placeholder="color"
                            className="form-control"
                            onChange={handleInput}
                        />
                    </div>
                </div>
                <div className="col-sm-6 offset-3 col-md-6 offset-3">
                    <button
                        className="btn btn-outline-success btn-block mt-3"
                        type="submit"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form