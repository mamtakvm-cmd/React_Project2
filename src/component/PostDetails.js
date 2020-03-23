import React,{Component} from 'react';
import axios from 'axios';


const url = "http://localhost:8900/posts";

class PostDetails extends Component{

      constructor(props){
          super(props)

          this.state={
              details:''
             }
          }

       render(){
        var mydetails=this.state.details;
        
       
        return(
         
          <div className = "panel panel-danger">
            <div className="panel-heading">
            <h2>Details of {this.state.details.name}</h2>
            <center>
                <img src={mydetails.img}></img>
            </center>
            </div>
            <div className="jumbotrom">
               <h3>{mydetails.details}</h3>
            </div>
          </div>
            )
       
       }
       /*componentDidMount(){
           axios.get(`${url}/${this.props.match.params.id}`)
           .then((res)=>{
               this.setState({details:res.data})
           }
                
             )
       }*/

       async componentDidMount(){
           const res= await axios.get(`${url}/${this.props.match.params.id}`)
           this.setState({details:res.data})

       }

}
export default PostDetails;