import { useState } from "react"

const TablaPersonas=()=>{
    const [personas, setCount] = useState(0)
    
    return(
        <><h1>TablaPersonas</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Cedula</th>
                <th>NumeroTelefonico</th>
                <th>Direccion</th>
            </tr>
        </table>
        
        
        </>

    )
}



export default TablaPersonas