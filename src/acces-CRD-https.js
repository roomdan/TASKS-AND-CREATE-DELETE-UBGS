import axios from "axios"

//API'S GET DATA
const AccesData = ()=>{
   const get = async ()=>{
    const getPet = 
    await
    axios(
        {
            method:'GET',
            baseURL:'https://todos-go.herokuapp.com/api',
            url:'/todos',
            responseType:'json'
        }
    )
   return getPet
   } 
 return  get();
}

//API'S DELETE GET DATA AND RENDER
const Delete = (id)=>{
    const onDelete = async ()=>{
        await axios(
            {
             method:'DELETE',
             baseURL:'https://todos-go.herokuapp.com/api/todos',
             url:id,
            }
        )
    }
    onDelete();
}

const Edit = async(data)=>{
    await axios(
        {
            method:'POST',
            baseURL:'https://todos-go.herokuapp.com/api',
            url:'/todos',
            data:data,
        }
    )
}


export {AccesData, Delete, Edit} 