import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog'; 
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import { v4 as uuidv4 } from 'uuid';


const Product = () => {
    const[prodDisplay,setprodDisplay]=useState([])
    

  const categoryDisplay=async()=>{
    await axios.get('http://localhost:4200/productswithcat')
    .then(function (response) {
      setprodDisplay(response.data);
    })
  }
  useEffect(()=>{
    categoryDisplay()
  },[])

  const deleteProduct=async(id)=>{
    try{
    await axios.delete(`http://localhost:4200/deleteproduct/${id}`)
    // window.location.reload();
    console.log('Delete Product Successfullly');
    setprodDisplay(prodDisplay.filter((product)=>product.product_id !==id))
    }
    catch(error)
    {
console.error(error)
    }
    }

    const deleteConfirmProduct = (paID) => {
      confirmDialog({
          message: 'Are you sure do you want delete this product ?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          className:'p-confirm-dialog',
          accept: () => deleteProduct(paID),
         
      });
  }


  return (
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    <ConfirmDialog />
    <div>
      {/* {"Categoey display" + JSON.stringify(prodDisplay)} */}
      <Link class="btn btn-primary" style={{marginRight:'60rem'}} to='/pages/insertproducts'>+ Add</Link>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">ProductName</th>
      <th scope="col">ProductImage</th>
      <th scope="col">CategoryName</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {prodDisplay && prodDisplay.map((product)=>{
        return(
          <>
    <tr>
      <th scope="row" key={product.product_id}>{product.product_id}</th>
      <td>{product.product_name}</td>
      <td>
        <img src={`http://localhost:4200/uploads/${product.product_image}`} height={50} width={50}></img></td>
        <td>{product.category_name}</td>
      <td><Link type="button" to={`/pages/editproduct/${product.product_id}`} style={{marginRight:'4px'}} class="btn btn-primary">Edit</Link><button onClick={()=>deleteConfirmProduct(product.product_id)} class="btn btn-danger" label="Delete">Delete</button></td>
    </tr>
    </>
        )

      })}                

  </tbody>
</table>
      

 </div>
</div>

  )
}

export default Product
