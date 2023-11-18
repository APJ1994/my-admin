import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import Navbar from './Navbar'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';


const EditProduct = () => {
    const [productData,setProductData]=useState({
        product_name:'',
        category_id:'',
        product_price:'',
        product_quantity:'',
        product_mprice:'',
        product_description:'',
        file:null,
      });
      const [imageUrl,setImageUrl]=useState('');
      const [getCategory,setCategory]=useState([]);
  

      const {proId}=useParams();

      useEffect(()=>{
        const productFetchById=async()=>{
        try{
        const response=await axios.get(`http://localhost:4200/productsById/${proId}`)
        setProductData(response.data[0]);
        }
        catch(err){
            console.warn(err);

        }

        }
        productFetchById();
      },[])

      const ProductValidate=Yup.object().shape({
        product_name:Yup.string('Ente Valid Product Name')
        .required('Product Name Required'),
        category_id:Yup.string('Enter Valid Category')
        .required('Select Category Required'),
        product_price:Yup.string()
        .required('Please Select Product Price'),
        product_quantity:Yup.string()
        .required('Please Select Product Quantity'),
        product_mprice:Yup.string()
        .required('Product Market Price Required'),
        product_description:Yup.string()
        .required('Please Given Description'),
        file:Yup.mixed()
        .required('Image Required'),
      })
      
      let naviagte=useNavigate();

      const handleImage=(e)=>{
        const file=e.target.files[0];
        setProductData({...productData,file});
        setImageUrl(URL.createObjectURL(file));
    
      }
      const updateProducts=(async(e)=>{
        e.preventDefault();
        const formdata=new FormData();
        formdata.append("product_name",productData.product_name);
        formdata.append("category_id",productData.category_id);
        formdata.append("product_price",productData.product_price);
        formdata.append("product_quantity",productData.product_quantity);
        formdata.append("product_mprice",productData.product_mprice);
        formdata.append("product_description",productData.product_description);
        formdata.append("file",productData.file);
        try{
        await axios.put(`http://localhost:4200/updateproduct/${proId}`,formdata,{
          headers:{
            "Content-Type":"multipart/form-data",
          },
        });
        console.log('Product Updation Successfully');
        naviagte('/pages/product');
        }
        catch(error){
          console.error('Prodcuts not Upadted',error);

        }

      })

      const fetchCategory=async()=>{
        try{
         const response=await axios.get('http://localhost:4200/catrgorydetails')
         setCategory(response.data);
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
     {/* {"Prodcuts "+ JSON.stringify(productData)};  */}
    <div className='container' style={{display:"flex",justifyContent:'space-between',alignItems:"center"
    ,background:"whitesmoke",width:"100%"}}>
      <Formik
      initialValues={{
        product_name:productData.product_name,
        category_id:productData.category_id,
        product_price:productData.product_price,
        product_quantity:productData.product_quantity,
        product_mprice:productData.product_mprice,
        product_description:productData.product_description,
        file:productData.file
      }}
      validationSchema={ProductValidate}
      onSubmit={updateProducts}
    >
      {({errors,touched})=>(
    <Form className='row g-2' encType='multipart/form-data'>
  <div class="col-lg-4 mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" name='product_name' value={productData.product_name} onChange={(e)=>setProductData({...productData,product_name:e.target.value})}  className={`form-control ${
                    errors.product_name && touched.product_name ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.product_name && touched.product_name && errors.product_name}
                </div>
  </div>
  
  <div class="col-lg-4 mb-3" style={{marginTop:"40px"}}>
  <select class= {`form-select form-select-sm ${errors.category_id && touched.category_id ? 'is-invalid' : ''}`} name='category_id'
   onChange={(e)=>setProductData({...productData,category_id:e.target.value})}
   aria-label=".form-select-sm example">
<option value={productData.category_name}>{productData.category_name}</option>
{getCategory && getCategory.map((cate)=>{
  return(
<option value={cate.category_id}>{cate.category_name}</option>
  )
})}
</select>
<div className="invalid-feedback">
                  {errors.category_id && touched.category_id && errors.category_id}
                </div>
</div>
    <div class="col-lg-4 mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Price</label>
    <input type="text" className={`form-control ${
                    errors.product_price && touched.product_price ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="product_price" value={productData.product_price} onChange={(e)=>setProductData({...productData,product_price:e.target.value})}  aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.product_price && touched.product_price && errors.product_price}
                </div>
  </div>
  <div class="col-lg-4 mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Quantity</label>
    <input type="text" className={`form-control ${
                    errors.product_quantity && touched.product_quantity ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="product_quantity" value={productData.product_quantity} onChange={(e)=>setProductData({...productData,product_quantity:e.target.value})}   aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.product_quantity && touched.product_quantity && errors.product_quantity}
                </div>
  </div>
 
  <div class="col-lg-4 mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Market Price</label>
    <input type="text" className={`form-control ${
                    errors.product_mprice && touched.product_mprice ? 'is-invalid' : ''
                  }`} id="exampleInputEmail1" name="product_mprice" value={productData.product_mprice} onChange={(e)=>setProductData({...productData,product_mprice:e.target.value})}   aria-describedby="emailHelp"/>
  <div className="invalid-feedback">
                  {errors.product_mprice && touched.product_mprice && errors.product_mprice}
                </div>
  </div>
  
  <div class="col-lg-12 mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
  <textarea  className={`form-control ${
                    errors.product_description && touched.product_description ? 'is-invalid' : ''
                  }`} name="product_description" value={productData.product_description} onChange={(e)=>setProductData({...productData,product_description:e.target.value})}   id="exampleFormControlTextarea1" rows="3"></textarea>
<div className="invalid-feedback">
                  {errors.product_description && touched.product_description && errors.product_description}
                </div>
</div>

<div class="col-lg-12 mb-3">
  <label for="formFileMultiple" class="form-label">Product Image Select</label>
  <input class={`form-control ${errors.file && touched.file ? 'is-invalid':''}`} name='file' onChange={e=>handleImage(e)}   type="file" id="formFileMultiple" multiple/>
<div className='invalid-feedback'>{errors.file && touched.file && errors.file}</div>
</div>
<div>{
  !imageUrl && (
<img src={`http://localhost:4200/uploads/${productData.product_image}`}width={100} height={100} />
  )}
  </div>
  <div>{
  imageUrl && (
<img src={imageUrl} width={100} height={100} />
  )}
  </div>
  
  <button type="submit" onClick={(e)=>updateProducts(e)}  class="btn btn-primary" style={{width:"10%"}}>Update</button>
</Form>
)}
</Formik>
</div>
    </div>
  )
}

export default EditProduct
