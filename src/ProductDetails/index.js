import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';





const ProductDetails = () => { 
  const { productId } = useParams();
  const [product, setProduct] = useState();
  
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='detail'>
      <h1>Product Details</h1>
      <div className='all'>
        <img src={product.thumbnail} alt={product.name} />
        <h2>name:{product.name}</h2>
        <p>Description:{product.description}</p>
        <p>Brand:{product.brand}</p>
        <h4>Price:Ksh.{product.price}</h4>

      </div>
    </div>
  );
};
export default ProductDetails;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetails = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const getProductDetails = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/product/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getProductDetails();
//   }, [productId]);

//   if (!product) {
//     return <p>Loading product details...</p>;
//   }

//   return (
//     <div>
//       <h1>Product Details</h1>
//       <div>
//         <img src={product.thumbnail} alt={product.title} />
//         <h2>{product.title}</h2>
//         <p>{product.brand}</p>
//         <p>{product.price}</p>
//         <h4>{product.rating}</h4>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;