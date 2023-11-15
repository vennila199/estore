import './_products.scss';

const Products = ()=>{
    const productData=[{
       pName:"jacket",
       price:45,
       pImage:"shop-1.jpg"
    },
    {
        pName:"Dress",
        price:100,
        pImage:"shop-2.jpg"
    },
    {
        pName:"Denim",
        price:200,
        pImage:"shop-3.jpg"
    },
    {
        pName:"frog",
        price:300,
        pImage:"shop-4.jpg"
    }
];
    return(
        <div className='product-container'>
            {productData.map((product,key)=>
            {
              return( 
              <div className='mx-5 p-3 product-card'>
                  <div className='product-image-container'>
                      <img src={require('../../assets/images/shop/'+product.pImage)}/>
                  </div>
                  <div className='product-info'>
                      <h5> <a href='#'>{product.pName}</a> </h5>
                      <p className='product-price'>{product.price} </p>
                      <div className='product-rating'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                     </div>
                  </div>
              </div>)
            })
            }
        
    </div>
    )
}

export default Products;