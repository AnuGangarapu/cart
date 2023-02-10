import React, { useState } from "react"
import { connect } from 'react-redux'
import {Grid,Card,Typography,Button,Paper} from '@mui/material';
import { updateQuantity} from '../../action'
import './index.css'
const  items= [
  {
  id:1,productName:'Perfume',cost:250,img:'https://cdn.pixabay.com/photo/2017/03/14/11/41/perfume-2142824__340.jpg',quantity:1
},
{
  id:2,productName:'Watch',cost:450,img:'data:image/jpeg;base64,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',quantity:1
}, 
{ id:3,productName:'Headphone',cost:950,img:'data:image/jpeg;base64,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',quantity:1}
 ]



function Cart(props){

  const [products,updateProductQuantity]=useState(items)
  
  function increaseQuantity(id){
    const updateQty= products.map(item => {
      if (item.id === id) {
            item.quantity=item.quantity + 1
      }
      return item
    })
    updateProductQuantity(updateQty)
  }
  function decreaseQuantity(id){
    const updateQty= products.map(item => {
      if (item.id === id) {
        if(item.quantity>1){
          item.quantity=item.quantity - 1
      }
    }
    return item
  })
  updateProductQuantity(updateQty)
}





 return<Grid className='app'>
    <Typography className='align-center' variant='h4'>Shopping Cart</Typography>
    <Paper elevation={5} className='app-container'>
    <div className="list-container">
      {products.map(eachItem=><Card key={eachItem.id} className='card-container'>
        <Grid className='card'>
        <Grid>
        <Typography> Product Name</Typography>
      
      <Typography variant='h5'>{eachItem.productName}</Typography>
      <Typography >Price</Typography>
      <Typography>Rs:{eachItem.cost}</Typography>
    <div className='design'>
    <Button variant='contained' className='btn' onClick={()=>decreaseQuantity(eachItem.id)}>-</Button> 
    <Button variant='contained' className='btn'  >{eachItem.quantity}</Button>
    <Button variant='contained' className='btn'   onClick={()=>increaseQuantity(eachItem.id)}>+</Button>
    
      
      </div>
      </Grid>
      
      <Grid className='img-container'>
      
      <img src={eachItem.img} alt='img' className='image'/>
      
      </Grid>
      </Grid>
      </Card>)}
    </div>
    <Grid className='align-center'>
    
    <Button variant="contained"  onClick={()=>props.dispatch(updateQuantity(products))}>Add Products</Button>
    </Grid>
    </Paper>
    
    <Typography variant="h5" className='result'>No of Items Selected:{props.cartReducer.totalItems}  || Total Price:{props.cartReducer.price}  </Typography>
 

     
  </Grid>

}


const mapStateToProps=(state)=>{
 
  return state
}



export default connect(mapStateToProps)(Cart)
