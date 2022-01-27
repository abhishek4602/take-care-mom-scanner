   
import React from 'react';
//import { restaurantData} from '../../LandingPage/LandingPage';
import './Element.scss'    

const Element=(props)=>
{
    const onClick=()=>{
        
        props.onClick(props.restaurantData);  //passing restaurant Data to landing page
        
        }
    return (
        <div className="card-res">
            <div style={{display:"flex",flexDirection:"column"}}>
           
           <div style={{marginTop:"10px"}}>
           <div className="card_body_res">{props.e}</div>
           
            </div>
            <button onClick={()=>{onClick()}} className="order_button_res" >ADD</button> 
            </div>
           
           <br/>
              
           <div className="card_button_res">
           
           </div>
        </div>
    )
}

export default Element;