import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './style.css';

const Home = (props) => {
   const data = {
      nameProduct: '',
      categoryID: '',
      sku: '',
      price: '',
      quantity: ''
   }
   const [dataNewProduct, setDataNewProduct] = useState(data);
   const [dataProducts, setDataProducts] = useState([]);
   const [dataCategories, setDataCategories] = useState([]);
   const userID = localStorage.getItem("token");
   const handleChange = e => {
      setDataNewProduct({
         ...dataNewProduct,
         [e.target.id]: e.target.value
      })
   }
   useEffect(() => {
      document.getElementById('add-product-form').style.display = 'none';
      axios({
         method: 'GET',
         url: `/product/products/${userID}`
      })
      .then(res => {
         setDataProducts(res.data);
      })
      .catch(err => {
         console.log(err)
      })
   }, [])
   const addProduct = () => {
      document.getElementById('button-add-product').style.display = 'none';
      document.getElementById('add-product-form').style.display = 'block';
      axios({
         method: 'GET',
         url: '/category/categories'
      })
      .then(res => {
         //console.log(res)
         setDataCategories(res.data);
      })
      .catch(err => {
         console.log(err)
      })
   }
   const handleClick = () => {
      localStorage.removeItem('userIdentify');
      props.history.push('/');
   }
   const handleSubmit = e => {
      e.preventDefault();
      axios({
         method: 'POST',
         //url: `/product/create/123/DD`,
         url: `/product/create/${userID}/${categoryID}`,
         data: dataNewProduct
      })
      .then(res => {
         //console.log(res);
         window.location.reload();
      })
      .catch(err => {
         console.log(err);
      })
      document.getElementById('add-product-form').style.display = 'none';
      document.getElementById('button-add-product').style.display = 'block';
   }
   const deleteProduct = id => {
      axios({
         method: 'DELETE',
         url: `/product/delete/${id}`
      })
      .then(res => {
         //console.log(res);
         window.location.reload();
      })
      .catch(err => {
         console.log(err);
      })
   }
   const {nameProduct, categoryID, sku, price, quantity} = dataNewProduct;
   return (
      <div>
         Welcome home !
         <button onClick={handleClick}>Logout</button>
         <div className="container-fluid">
            <div className="text-center">
               <h1>List of your products</h1>
               <p>Built with Nest.js, React.js and MongoDB</p>
               <div v-if="customers.length === 0">
                     <h2> You saved {dataProducts.length} products </h2>
               </div>
            </div>
            <div className="">
               <table className="table table-bordered">
                  <thead className="thead-dark">
                     <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">SKU</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Creation date</th>
                        <th scope="col" style={{textAlign: "center"}}>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {dataProducts.map(data => 
                        <tr key={data._id}>
                           <td>{data.nameProduct}</td>
                           <td>{data.category.name}</td>
                           <td>{data.sku}</td>
                           <td>{data.price}</td>
                           <td>{data.quantity}</td>
                           <td>12/09/2019</td>
                           <td>
                              <div className="d-flex justify-content-between align-items-center">
                                 <div className="btn-group" style={{marginBottom: "20px",marginLeft: "12%"}}>
                                    <span className="btn btn-sm btn-outline-secondary">Edit Product</span>
                                    <button className="btn btn-sm btn-outline-secondary" onClick={() => deleteProduct(data._id)}>Delete Product</button>
                                 </div>
                              </div>
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
            <div id="add-product-form">
               <form id="create-post-form" onSubmit={handleSubmit}>
                  <div className="form-group col-md-6">
                     <input type="text" value={nameProduct} onChange={handleChange} id="nameProduct" name="nameProduct" className="form-control" placeholder="Enter name product" />
                  </div>
                  <div className="form-group col-md-6">
                     <select className="form-control" value={categoryID} onChange={handleChange} name="categoryID" id="categoryID" >
                        <option>Choisir...</option>
                        {dataCategories.map(data => 
                           <option key={data._id} value={data._id}>{data.name}</option>
                        )}
                     </select>
                  </div>
                  <div className="form-group col-md-2" style={{float: "left"}}>
                     <input type="text" value={sku} onChange={handleChange} id="sku" name="sku" className="form-control" placeholder="Sku" />
                  </div>
                  <div className="form-group col-md-2" style={{float: "left"}}>
                     <input type="text" value={price} onChange={handleChange} id="price" name="price" className="form-control" placeholder="Price" />
                  </div>
                  <div className="form-group col-md-2" style={{float: "left"}}>
                     <input type="text" value={quantity} onChange={handleChange} id="quantity" name="quantity" className="form-control" placeholder="Quantity" />
                  </div>
                  <div className="form-group col-md-4 pull-right">
                     <button>Validate</button>
                  </div>           
               </form>
            </div>
            <button className="btn btn-sm btn-outline-secondary" id="button-add-product" onClick={addProduct}>Add Product</button>
         </div>
      </div>
   )
}

export default Home;
