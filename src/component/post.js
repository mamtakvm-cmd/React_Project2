import React,{Component} from 'react';
import PostList from './PostList';

const url = "http://localhost:8900/posts";
class Post extends Component{
    constructor(props){
        super(props)

        this.state={
            post:''
        }

       
    }
   
       render(){
        
        return(
           
            <div>
               <h1>Posts</h1>
               <PostList datalist={this.state.post}/>
            </div>
        )
       }
       
    componentDidMount(){
        fetch(url,{
            method:'GET'

        })
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({post:data})
        })

    }
 
}





export default Post;