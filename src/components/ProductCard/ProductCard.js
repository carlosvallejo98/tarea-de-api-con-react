import styled from "styled-components";




const ProductCart = styled.div`
  border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


const ProductImg = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  margin: 0.5px 0;
`;

const ProductText = styled.p`
  font-size: 1.2rem;
  color: #db0e0e;

`



export{
   ProductCart,
   ProductImg,
   ProductTitle,
   ProductText, 
}






/*

.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
  
  .product-card h3 {
    font-size: 1rem;
    margin: 0.5px 0;
  }
  
  .product-card p {
    font-size: 1.2rem;
    color: #db0e0e;
  }


*/ 
  