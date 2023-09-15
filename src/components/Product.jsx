import React from 'react'

function Product({ item }) {
    const { image, price, description, title } = item;
    const newTitle=title.slice(0,20)
    return (
        <div style={{width:"30%" ,margin:'20px',height:"500px"}}>

            <h1 style={{fontFamily:"cursive", fontSize:"large"}}>{newTitle}</h1>
            <img src={image} style={{ height: '60%' ,width:"70%"}}></img>
            <h3>{price}</h3>
        </div>
    )
}

export default Product