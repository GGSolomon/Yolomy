import React from 'react'

function Product() {
   const price = '500'
   const name = 'large'
   return (
       <React.Fragment>
           <h1>Yolomy Products</h1>
           <p>{name}</p>
           <p>Price - {price} </p>
       </React.Fragment>
   )
}

export default Product