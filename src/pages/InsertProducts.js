import React from 'react'
import Navbar from './Navbar'
import { MultiSelect } from 'primereact/multiselect';
import { useState } from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
        

const InsertProducts = () => {
   const [postProduct,setPostProduct]=useState({
    productName:'',
    productCatid:'',
    productPrice:'',
    productQuant:'',
    productMarketPrice:'',
    productDesc:'',
    file:null,
  })
  const[imageUrl,setImageUrl]=useState('');
  const[getProduct,setGetProduct]=useState('');

  const ProductValidate=Yup.object().shape({
    productName:Yup.string('Ente Valid Product Name')
    .required('Product Name Required'),
    productCatid:Yup.string('Enter Valid Category')
    .required('Select Category Required'),
    productPrice:Yup.string()
    .required('Please Select Product Price'),
    productQuant:Yup.string()
    .required('Please Select Product Quantity'),
    productMarketPrice:Yup.string()
    .required('Product Market Price Required'),
    productDesc:Yup.string()
    .required('Please Given Description'),
    file:Yup.mixed()
    .required('Image Required'),
  })
  
  let naviagte=useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('productName', postProduct.productName);
      formData.append('productCatid', postProduct.productCatid);
      formData.append('productPrice', postProduct.productPrice);
      formData.append('productQuant', postProduct.productQuant);
      formData.append('productMarketPrice', postProduct.productMarketPrice);
      formData.append('productDesc', postProduct.productDesc);
      formData.append('file', postProduct.file);
  
      const response = await axios.post('http://localhost:4200/productCreate', formData,{
        headers:{
          "Content-Type":"multipart/form-data",
        }
      });
      console.log(response.data); 
      alert('Successfully Add Product!');
      naviagte('/pages/product');
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage=(e)=>{
    const file=e.target.files[0];
    setPostProduct({...postProduct,file});
    setImageUrl(URL.createObjectURL(file));

  }

  const fetchCategory=async()=>{
    try{
     const response=await axios.get('http://localhost:4200/catrgorydetails')
      setGetProduct(response.data);
    }
    catch(err){
      console.error(err);

    }
  }

  useEffect(()=>{
    fetchCategory();
  },[])

    return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    {/* {"Catgeory "+ JSON.stringify(getProduct)}; */}
    <div className='container' style={{display:"flex",justifyContent:'space-between',alignItems:"center"
    ,background:"whitesmoke",width:"100%"}}>
      <Formik
      initialValues={{
        productName:'',
        productCatid: getProduct.category_name,
        productPrice:'',
        productQuant:'',
        productMarketPrice:'',
        productDesc:'',
        file:null
      }}
      validationSchema={ProductValidate}
      onSubmit={handleSubmit}
    >
      {({errors,touched})=>(
    <Form className='row g-2' encType='multipart/form-data'>
  <div className="col-lg-4 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
    <input type="text" name='productName'  className={`form-control ${
                    errors.productName && touched.productName ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" onChange={(e)=>setPostProduct({...postProduct,productName:e.target.value})} aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.productName && touched.productName && errors.productName}
                </div>
  </div>
  
  <div className="col-lg-4 mb-3" style={{marginTop:"40px"}}>
  <select className= {`form-select form-select-sm ${errors.productCatid && touched.productCatid ? 'is-invalid' : ''}`} name='productCatid'
   onChange={(e)=>setPostProduct({...postProduct,productCatid:e.target.value})}
   aria-label=".form-select-sm example">
  <option selected>Select Category</option>
  {getProduct && getProduct.map((product)=>{
    return(
<option defaultValue={product.category_id}>{product.category_name}</option>
    )
  })}
</select>
<div className="invalid-feedback">
                  {errors.productCatid && touched.productCatid && errors.productCatid}
                </div>
</div>
    <div className="col-lg-4 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Price</label>
    <input type="text" className={`form-control ${
                    errors.productPrice && touched.productPrice ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="productPrice"  onChange={(e)=>setPostProduct({...postProduct,productPrice:e.target.value})} aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.productPrice && touched.productPrice && errors.productPrice}
                </div>
  </div>
  <div className="col-lg-4 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Quantity</label>
    <input type="text" className={`form-control ${
                    errors.productQuant && touched.productQuant ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="productQuant"  onChange={(e)=>setPostProduct({...postProduct,productQuant:e.target.value})} aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.productQuant && touched.productQuant && errors.productQuant}
                </div>
  </div>
 
  <div className="col-lg-4 mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Product Market Price</label>
    <input type="text" className={`form-control ${
                    errors.productMarketPrice && touched.productMarketPrice ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="productMarketPrice"  onChange={(e)=>setPostProduct({...postProduct,productMarketPrice:e.target.value})} aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.productMarketPrice && touched.productMarketPrice && errors.productMarketPrice}
                </div>
  </div>
  
  <div className="col-lg-12 mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Product Description</label>
  <textarea  className={`form-control ${
                    errors.productDesc && touched.productDesc ? 'is-invalid' : ''
                  }`} name="productDesc"  onChange={(e)=>setPostProduct({...postProduct,productDesc:e.target.value})} id="exampleFormControlTextarea1" rows="3"></textarea>
<div className="invalid-feedback">
                  {errors.productDesc && touched.productDesc && errors.productDesc}
                </div>
</div>

<div className="col-lg-12 mb-3">
  <label htmlFor="formFileMultiple" className="form-label">Product Image Select</label>
  <input className={`form-control ${errors.file && touched.file ? 'is-invalid':''}`} name='file'  onChange={e=>handleImage(e)} type="file" id="formFileMultiple" multiple/>
<div className='invalid-feedback'>{errors.file && touched.file && errors.file}</div>
</div>
<div><img src={imageUrl} width={100} height={100} /></div>
  <button type="submit" onClick={handleSubmit}  className="btn btn-primary" style={{width:"10%"}}>Save</button>
</Form>
)}
</Formik>
</div>
    </div>
    
  )
}

export default InsertProducts
