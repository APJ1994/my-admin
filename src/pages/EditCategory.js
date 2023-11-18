import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const EditCategory = () => {
const[catdetails,setCatedetails]=useState({
  category_name:'',category_image:null
})
const[imageUrl,setImageUrl]=useState('')

const {catId}=useParams();

let navigate=useNavigate();




  useEffect(() => {
    categoryGet();
  }, [catId]);

  const categoryGet = async () => {
    try {
      const response = await axios.get(`http://localhost:4200/fetch/${catId}`);
      setCatedetails(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange=(e)=>{
    if(e.target.name==="category_image")
    {
      const file=e.target.files[0]
      if(file){
        const reader=new FileReader();
        reader.onloadend=()=>{
          setImageUrl(reader.result);
          setCatedetails((prevCatdetails)=>({
            ...prevCatdetails,
            category_image:file,
          }))
        }
        reader.readAsDataURL(file)
      }

    }
    else{
setCatedetails((prevCatdetails)=>({
  ...prevCatdetails,
  [e.target.name]: e.target.value
}))

  
    }
  }

  const handleUpdateCategory = async(e) => {
    e.preventDefault()
    const formData=new FormData();
    formData.append("category_name",catdetails.category_name)
    formData.append("category_image",catdetails.category_image)
    try {
      await axios.put(`http://localhost:4200/update/${catId}`,formData,{
        headers:{
          "content-type": "multipart/form-data",
        },

      })
      console.log(catdetails)
      console.log('updated category details');
      navigate('/pages/category');
    } catch (err) {
      console.error(err);
    }
  }

  
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    <div>
      
        {/* {"CAtegory "+ JSON.stringify(catdetails)} */}
        <h1> {catdetails.category_name}</h1>
    <div className='container' style={{display:"flex",marginLeft:"18em", alignItems:"center",width:"30%"}}>
   <form action='' method='post' encType='multipart/form-data'>
   <div className="mb-3" style={{ display: "flex", alignItems:"center", marginLeft:"2em" }}>
  <label htmlFor="exampleFormControlInput1" className="form-label" style={{ marginRight: "1em" }}>Category Name</label>
  <input type="text" value={catdetails.category_name} name="category_name" onChange={e=>handleInputChange(e)}   className="form-control"  id="exampleFormControlInput1" />
    </div>
   
    <div className="mb-3" style={{ display: "flex", alignItems:"center",marginLeft:"2.5em" }}>
    <label htmlFor="formFile" className="form-label">Category Image</label>
    <input className="form-control"  name="category_image" accept="image" type="file" onChange={e=>handleInputChange(e)}  id="formFile" />
            </div>
            <button type="button" onClick={e=>handleUpdateCategory(e)}  class="btn btn-info btn-loading">UPDATE</button>
           
            <div>
               {!imageUrl && (
                <img src={`http://localhost:4200/uploads/${catdetails.category_image}`} 
                height={150} width={150}
              style={{ marginRight: "19.5em", marginTop: "-1.5em" }}>
              </img>
              )}
            </div>
             <div>
               {imageUrl && (
                <img src={imageUrl} 
                height={150} width={150}
              style={{ marginRight: "19.5em", marginTop: "-1.5em" }}>
              </img>
              )}
            </div>
            
            
    
    </form>
             
  </div>
  </div>
    </div>
  )
}

export default EditCategory
