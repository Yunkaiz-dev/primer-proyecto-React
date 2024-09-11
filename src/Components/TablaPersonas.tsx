import { useEffect, useState } from "react"

const url = "https://localhost:7253"
const PersonasPath ="/api/Persona"
const deletepath = "/api/persona/"
const updatepath = "/api/persona/"

const TablaPersonas=()=>{
    const [personas, setPersonas] = useState([])


    useEffect(()=>{   
        ObtenerPersonas()
    },[])

    const  ObtenerPersonas =async()=>{
        const response = await fetch(url + PersonasPath)
        const data = await response.json()
        setPersonas(data)
     }

    const Agregar=async()=>{
        const persona ={
            primerNombre: "string",
            segundoNombre: "string",
            primerApellido: "string",
            segundoApellido: "string",
            cedula: "string",
            añoNacimiento: 0,
            mesNacimiento: 0,
            diaNacimiento: 0,
            codigoAreaNumero: "string",
            codigoPaisNumero: "string",
            casaNumeroDireccion: 0,
            calleDireccion: "string",
            ciudadDireccion: "string",
            provinciaDireccion: "string",
            paisDireccion: "string"      
        }
        await fetch(url + PersonasPath,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...persona})
        })

        ObtenerPersonas()


    }
    const Editar=async(id:any)=>{

        const persona = {
            PrimerNombre:  "Juan"
        }
        await fetch(url + updatepath + id,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({...persona})
        })
        ObtenerPersonas()
    }
    const Eliminar=async(id:number)=>{
         await fetch(url + deletepath + id, {method:"DELETE"})
        ObtenerPersonas()
    }

    
    
    
    return(
        personas?(
        <>
           <h1>TablaPersonas</h1>
           <button onClick={()=>Agregar()}>Agregar</button>
           <table>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Cedula</th>
                    <th>NumeroTelefonico</th>
                    <th>Direccion</th>
                    <th>Acciones</th>
                </tr>
            {
                personas.map((Persona:any)=>{
                  return(
                      <tr>
                        <td>{Persona.id}</td>
                        <td>{Persona.primerNombre + Persona.primerApellido}</td>
                        <td>{(new Date()).getFullYear() - Persona.añoNacimiento}</td>
                        <td>{Persona.cedula}</td>
                        <td>{"+"}{String (Persona.codigoAreaNumero) + Persona.codigoPaisNumero}</td>
                        <td>{Persona.casaNumeroDireccion + Persona.calleDireccion + Persona.ciudadDireccion + 
                        Persona.provinciaDireccion + Persona.paisDireccion}</td>
                        <td><button onClick={()=>Eliminar(Persona.id)}>Eliminar</button></td>
                        <td><button onClick={()=>Editar(Persona.id)}>Editar</button></td>
                      </tr>
                  )
                  
              })
            }
        </table>
      
      
      </>):<h1>Cargando datos</h1>
        

    )
}




export default TablaPersonas