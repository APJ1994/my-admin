import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'


const CategoryBanner = () => {
  
  return (
    <div className="wrapper d-flex flex-column min-vh-100 bg-light">
    <Navbar/>
      <div className="mb-3" style={{marginTop:"3em",marginBottom:"2em",marginRight:"7em",marginLeft:"7em"}}>
  <label htmlFor="formFileMultiple" className="form-label"></label>
  <input className="form-control" type="file" id="formFileMultiple" multiple />
  <button type="button" class="btn btn-primary btn-loading" data-coreui-timeout="2000" style={{marginTop:"1em"}}>Save</button>
</div>

</div>
  )
}

export default CategoryBanner
