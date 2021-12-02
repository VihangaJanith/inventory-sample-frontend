import React,{Component} from 'react';
import axios from 'axios';
import './Home.css';

export default class Home extends Component{

    constructor(props){
      super(props);
      this.state={
        posts:[]
      };
   
    }

    componentDidMount(){
        this.retrievePosts();
    }
   
    retrievePosts(){
        axios.get("https://inventory-sample-backend.herokuapp.com/").then(res =>{
          if(res.data.success){
            this.setState({
              posts:res.data.existingPosts
            });
          console.log(this.state.posts);
          }
        });

      }

      onDelete = (id) =>{
        axios.delete(`https://inventory-sample-backend.herokuapp.com/delete/${id}`).then((res) =>{
         
          this.retrievePosts();

        })

      }
      filterData(posts,searchkey){  
     
        const result = posts.filter((post)=>
            
            post.name.includes(searchkey)
         )
        
        this.setState({posts:result})
        
        
    
    }
    handleSearchArea = (e) => {
      const searchkey = e.currentTarget.value;
     
   
       axios.get("https://inventory-sample-backend.herokuapp.com/").then(res =>{
           
           if(res.data.success){
              
                this.filterData(res.data.existingPosts,searchkey)
           }
           else {
   
               console.log("eee")
           }
           
   })
   }


     
     

      


      render() {
        return(

            <div>
                <div>
                <nav class="navbar navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Storage</a>
            
            </nav>
            <br/>
             </div>
                


                

         

              
         
            
              <h1 >ALL ITEMS</h1>
        
         
            
            
            <div className="col-lg-3 mt-2 mb-2">
              <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}>
              </input>
          
            </div>

         
             <div class="table-responsive">
            <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Item Id</th>
            <th scope="col">Quantity</th>
            
           
          </tr>
        </thead>
        <tbody>
          {this.state.posts.map((posts,index)=>(
            <tr key={index} >
            <th scope="row">{index+1}</th>
            <td>
               <a href={`/post/${posts._id}`} style={{textDecoration:'none',color:'black'}}><b>
                {posts.name} </b>
                </a>
                </td>
            <td><b>{posts.itemid} </b></td>
            <td><b>{posts.quantity}</b></td>
           
            &nbsp;
           <a  href={`/update/${posts._id}`}>
           <button className="btn btn-warning" type="button" style={{margintop:'15px'}} > 
           <b>Update </b>
           </button>
           </a>
         &nbsp;
          
           <a href="#" onClick={() => this.onDelete(posts._id)} >
           <button className="btn btn-danger" type="button" style={{margintop:'15px'}} > 
           <b> Delete </b>
           </button>
           </a>

          </tr>
          ))}
          
        </tbody>
      </table>
      </div>
      
      <button className="btn btn-success"><a href={"/add"} style={{textDecoration:'none',color:'white'}}>
           <b> Add New Item </b>
      </a>


      </button>

    
  
       
          </div>
        
        )
          }
}