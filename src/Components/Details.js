import React, { Component } from 'react'
import axios from 'axios';


export default class Details extends Component{
    constructor(props){
        super(props);
        this.state = {
            post:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        
        axios.get(`https://inventory-sample-backend.herokuapp.com/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }


        });
    
    }
    onDelete = (id) =>{
   if(window.confirm('Do you want to delete your Item ?')){
        const url="https://inventory-sample-backend.herokuapp.com/delete/";
        const id1 = id;
        
            axios.delete(url+id1).then((res)=>{
    
            
            window.location.replace("/add")
            
           
    })
}
    }

    render(){

        const {name,itemid,quantity,id} = this.state.post;



        return(
           
            <div >
                <div>
                <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Storage</a>
            
            </nav>
            <br/>
             </div>
               
                <div className="info">
                <body className="vj">
                <div >
               <form className="oneDetail3" id="form">
               
           
               <h1 className="nam">Item Details</h1>
                <hr/>
                    
                   <b> <tr className="col-sm-3">Name &nbsp;: &nbsp;{name}</tr> </b>
                   <br/>
                    
                  <b>  <tr className="col-sm-3">Itemid &nbsp;  : &nbsp;{itemid}</tr> </b>
                  <br/>

                  <b>  <tr className="col-sm-3">Quanitiy &nbsp;: &nbsp;{quantity}</tr> </b>

                  
                    
                   
                
                


                
                </form>
                <form className="oneDetail2" id="form">
              
                <div className="form-group" style={{marginBottom:'15px'}}>

                    <br/>
                
                  
                  
                  
                    <a  href={"/update/"+this.state.post._id}>
                            <button className="btn btn-warning" type="button" style={{margintop:'15px'}} > 
                            <b> Update Item </b>
                            </button>
                        </a>
                        &nbsp;
                         <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(this.state.post._id)}>
                           <b>    Delete Item </b>
                        </a>

                       

                </div>
                </form>




               
                
            </div>
            </body>
            </div>
          
            </div>
        )

    }
}