import React,{useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ConfirmDialog } from 'primereact/confirmdialog';
import { confirmDialog } from 'primereact/confirmdialog'; 
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

        
const Category = () => {
const[catedisplay,setCatedisplay]=useState([])

  const categoryDisplay=async()=>{
    await axios.get('http://localhost:4200/catrgorydetails')
    .then(function (response) {
      setCatedisplay(response.data);
    })
  }
  useEffect(()=>{
    categoryDisplay()
  },[])

  const deleteCategory=async(id)=>{
    try{
    await axios.delete(`http://localhost:4200/delete/${id}`)
    console.log('Delete Category Successfullly');
    setCatedisplay(catedisplay.filter((Category)=>Category.category_id !==id))
    }
    catch(error)
    {
console.error(error)
    }
    }

    const deleteConfirmCategory = (caID) => {
      confirmDialog({
          message: 'Are you sure do you want delete this category ?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          className:'p-confirm-dialog',
          accept: () => deleteCategory(caID),
         
      });
  }


  
  
  return (
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
    <ConfirmDialog />
    <div>
      {/* {"Categoey display" + JSON.stringify(catedisplay)} */}
      <Link class="btn btn-primary" style={{marginRight:'60rem'}} to='/pages/insertcategory'>+ Add</Link>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">CategoryName</th>
      <th scope="col">CategoryImage</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {catedisplay && catedisplay.map((Category)=>{
        return(
          <>
    <tr>
      <th scope="row" key={Category.category_id}>{Category.category_id}</th>
      <td>{Category.category_name}</td>
      <td>
        <img src={`http://localhost:4200/uploads/${Category.category_image}`} height={50} width={50}></img></td>
      <td><Link type="button" to={`/pages/editcategory/${Category.category_id}`} style={{marginRight:'4px'}} class="btn btn-primary">Edit</Link><button onClick={()=>deleteConfirmCategory(Category.category_id)} class="btn btn-danger" label="Delete">Delete</button></td>
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

export default Category
