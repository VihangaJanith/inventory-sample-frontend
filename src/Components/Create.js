import React, { Component } from 'react'
import axios from 'axios';
import Button from "./Button";

import { Form,Col,Row,InputGroup } from "react-bootstrap";





export default class Create extends Component{

    constructor(props){
        super(props);

        this.state = {
            validated:false,
            name:"",
            itemid:"",
            quantity:"",
            count: 0
            
            
        }

    }





    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
            
        })
    }
    
    onSubmit= (e)=>{
        const form = e.currentTarget;
      if (form.checkValidity() === false) {
          
      e.preventDefault();
      e.stopPropagation();
    }


  else{


        e.preventDefault();

       

        

           

        const {name,itemid,quantity} = this.state;

        const data= {
            name:name,
            itemid:itemid,
            quantity:quantity,
                       
        }

       

        console.log(data)

        axios.post("https://inventory-sample-backend.herokuapp.com/add",data).then((res) =>{
           
        if(res.data.success){
           
            window.location.replace("/")
            
                this.setState({
                    name:"",
                    itemid:"",
                    quantity:""
                    
                })

            }
            

        })
        
    }


    this.setState({ validated: true })
     
            
 
    }
    

    incrementCount = (e) => {
        e.preventDefault();
        this.setState({
          count: this.state.count + 1
        });
      };
    
      decrementCount = (e) => {
          e.preventDefault();
        this.setState({
          count: this.state.count - 1
        });
      };
    


    render(){

        let { count } = this.state;
        return(
            



            <div >

<div>
                <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Storage</a>
            
            </nav>
            <br/>
             </div>
              
                <div > 
            <div  >
            
            <div >
          
                <Form  noValidate validated={this.state.validated}>
                <h1 className="nam">Add New Item</h1>
                <hr/>
                <div>
                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>Item Name</label>
                            <input 
                            type="text"
                            id="name"
                            class="form-control"               
                            name="name"
                            placeholder="Enter Your Name"
                            value={this.state.name} 
                            onChange={this.handleInputChange}
                            required ="required"/>
                            <Form.Control.Feedback type="invalid">
                            Enter Item Name
                            </Form.Control.Feedback> 

                    </div>

                    </div>

                    
                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>Item ID</label>
                            <input 
                            type="text"
                            id="itemid"
                            class="form-control"               
                            name="itemid"
                            placeholder="Enter Your itemid"
                            value={this.state.itemid} 
                            onChange={this.handleInputChange}
                            required ="required"/>
                            <Form.Control.Feedback type="invalid">
                            Enter Item ID
                            </Form.Control.Feedback> 

                    </div>

                    <div className="" style={{marginBottom:'15px'}} >
                        <label style={{marginBottom:'5px'}}>Quantity</label>
                            <input 
                            type="text"
                            id="quantity"
                            class="form-control"               
                            name="quantity"
                            placeholder="Enter Your Name"
                            value={this.state.quantity} 
                            onChange={this.handleInputChange}
                            required ="required"/>
                            <Form.Control.Feedback type="invalid">
                            Enter Quantity
                            </Form.Control.Feedback> 


                    </div>

                  
       

         
      


                    

                   

                    <button className="btn btn-primary" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}
                   noValidate validated={this.state.validated}>
                          
                       <b> Add Item </b>    
                    </button>

                     

                </Form>


                
      
            </div>
        </div> 
        </div>
        
        </div>   
        )

    }
}