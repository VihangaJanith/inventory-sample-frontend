import React, { Component } from 'react'
import axios from 'axios';

import { Form,Button,Col,Row,InputGroup } from "react-bootstrap";

export default class Edit extends Component{

    constructor(props){
        super(props);
        this.state = {
            validated:false,
            name:"",
            itemid:"",
            quantity:"",
            
        }

    }
    handleInputChange = (e) =>{
        const {name,value} = e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit= (e) =>{
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            
        e.preventDefault();
        e.stopPropagation();
      }

      else{
        
        e.preventDefault();
        const id = this.props.match.params.id;
        const {name,itemid,quantity} = this.state;

        const data= {
            name:name,
           itemid:itemid,
           quantity:quantity,
                      
        }

        console.log(data)
        

        axios.put(`https://inventory-sample-backend.herokuapp.com/update/${id}`,data).then((res) =>{
           
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



    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://inventory-sample-backend.herokuapp.com/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    name:res.data.post.name,
                    itemid:res.data.post.itemid,
                    quantity:res.data.post.quantity,
                    

                });

                console.log(this.state.post);
            }


        });
    
    }




    render(){
        return(
            <div >
                <div>
                <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Storage</a>
            
            </nav>
            <br/>
             </div>
              
                <div className="info">
                <div className="vj">
                
                <Form className="needs-validation12" noValidate  id="form">
                <h1 className="nam" > Update Item </h1>
                <hr/>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Name</label>
                        <input type="text" 
                        className="form-control"                
                        name="name"
                        placeholder="Enter Your Name"
                        value={this.state.name} 
                        onChange={this.handleInputChange}
                        required="required"/>
                        
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Item ID</label>
                        <input type="text" 
                        className="form-control"                
                        name="itemid"
                        placeholder="Enter Your itemid"
                        value={this.state.itemid} 
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Quantity</label>
                        <input type="text" 
                        className="form-control"                
                        name="quantity"
                        placeholder="Enter Your Phone Number"
                        value={this.state.quantity} 
                        onChange={this.handleInputChange}/>
                    </div>


                    

                    <button class="btn btn-primary" type="submit" style={{margintop:'15px'}} onClick={this.onSubmit}>
                    <i className="fa fa-chevron-circle-right"></i>    
                   Update Item  
                    
                    </button>

            </Form>
            </div>
            </div>
           
         </div>
        )

    }
}