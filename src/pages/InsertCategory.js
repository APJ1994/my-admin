import React from 'react'
import {Multiselect} from 'multiselect-react-dropdown'
import axios from 'axios';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {useState} from 'react';
import Navbar from './Navbar';

const InsertCategory = () => {
    const[catename,setCatename]=useState("")
    const[file,setFile]=useState()

    const formValidationSchema=Yup.object({ 
        catename: Yup
        .string('Enter Category Name')
        .required('Category Name Required'),
      
        file : Yup
        .mixed()
        .nullable()
        .required('Image Required')
      })
      
        const data=[
          {Country:'Indisa',id:1},
          {Country:'Australia',id:2},
          {Country:'Africa',id:3}
        ]
        const [option]=useState(data)
      
      
      
        const emptyForm=()=>{
          setCatename('')
          setFile('')
        }
        const handleSubmit=async()=>{
          const formData=new FormData();
          formData.append("catename",catename);
          formData.append("file",file)  //key and value pair
          await axios.post('http://localhost:4200/create',formData,{
          headers:{
            "content-type": "multipart/form-data",
          },
        })
          .then(res=>console.log(res))
          .catch(err=>console.log(err))
          emptyForm()
      
        }
      
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    <div>
    <div className='container' style={{display:"flex",marginLeft:"18em", alignItems:"center",width:"30%"}}>
<Formik initialValues={{
        catename:"",file:null}}
        validationSchema={formValidationSchema}
        onSubmit={handleSubmit}>
          {({errors,touched})=>(
            <form action='' method='post' encType='multipart/form-data'>
            <div className="mb-3" style={{ display: "flex", alignItems:"center", marginLeft:"2em" }}>
              <label htmlFor="exampleFormControlInput1" className="form-label" style={{ marginRight: "1em" }}>Category Name</label>
              <input type="text" name="catename" onChange={(e)=>setCatename(e.target.value)}  className="form-control"  id="exampleFormControlInput1" />
              {errors.catename && touched.catename ? (
             <div>{errors.catename}</div>
           ) : null}
            </div>
            {/* <div style={{marginLeft:"2em"}}>
             <Multiselect options={option} displayValue="Country"/>
            </div> */}
            <div className="mb-3" style={{ display: "flex", alignItems:"center",marginLeft:"2.5em" }}>
            <label htmlFor="formFile" className="form-label">Category Image</label>
            <input className="form-control" name="file" onChange={(e)=>setFile(e.target.files[0])}  type="file" id="formFile" />
            {errors.file && touched.file ? (
                 <div>{errors.file}</div>) : null}
          </div>
              <button type="button" onClick={handleSubmit} disabled={!(file && catename)} class="btn btn-info btn-loading">Save</button>
            </form>
             )}
            </Formik>
  </div>
    </div>
    </div>
  )
}

export default InsertCategory
