// import './App.css';
// import { Component } from 'react';

// class App extends Component {
//   constructor() {
//   console.log('constructor called');
// super();
// this.state = {
//    //message: 'If you are a Soldier',
//    message:{students:['sandra cedro']},

//   // users:[]
// }
//   }

// componentDidMount(){
//   console.log('DidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res=>res.json())
// }
// render() {
//   console.log('render called');
//   return (
//     <div className='App'>
//       {/* <h1>my message {this.state.message}</h1> */}
//       <h1> {this.state.students}</h1>
//       <h1>list users</h1>
//       <button onClick={()=> {
//         // this.setState({message: 'Then Fight'})
//         this.setState({message:<h1>{students}</h1>})
//         // this.state.users.map(students=>{
//         //   return<h1>{students}</h1>
//         // })
//       }}></button>
//       //  <button>change message </button>
//       </div>
 
//  ) 
//     }       
//   }

// export default App;









// class App extends Component {
//   constructor() {
//   console.log('constructor called');
// super();

// this.state = {
//   students: ['Cedro','Manzi','Sandrine']
// }
//   }

//<input type='text' onChange={(e) =>console.log(e.target.value)}placeholder="what's your name"/>
// render() {
//   console.log('render called');
//   return(
//     <div className='App'>
//       <h1>LIST OF Students</h1>
//      { 
//      this.state.students.map(student=>{
//       return<p>{student}</p>  
//       })
//     }
  
//      </div>
//   )
//   }
// }

// export default App; 
// import React, {Component} from "react"
// //import React, { Component } from 'react';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loading:true,
//       user: [],
//       newData:[],
//       searchTerm: '',
//     };
//   }

//   componentDidMount() {
//    this.fetchData({loading:true});
//   }

//   fetchData = () => {
//     fetch("https://jsousersnplaceholder.typicode.com/")
//       .then((response) => response.json())
//       .then((data) => this.setState({ loading: false, user: data,newData: data}));
      
//   }
//   Search = () => {
//     const { searchTerm, user } = this.state;
//     const newData = user.filter(user => user.name.includes(searchTerm));
//     this.setState({ newData });
//   };
//   Change = e => {
//     this.setState({ searchTerm: e.target.value });
//   };
//   render() {
   
   
//       if(this.state.loading){
//         return <h1>loading...</h1> 
//       }
//       const { searchTerm, newData } = this.state;
//       return (
//       <div className="App">
//        <input type='text' value={searchTerm} onChange={this.handleInputChange}placeholder="what's your name"/>
//         <ul>
//           {this.state.user.map((data) => (
//             <li key={data.id}>{data.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
//{newData.map((data) =>{
  //return <h1 key={data.id}>{data.name}</h1>
// }

// export default App;

import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(){
    super();
  this.state = {
    loading: true,
    searchString:"",
    user:[],
   setnumb:'43'
  }
  }
 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then(data =>{
      console.log(data)
      this.setState({user: data, loading:false,searchString:''});
    });
  }
  searchHandler =(e) =>{
    //const searchString = e.target.value.toLocaleLowerCase();
    this.setState({searchString:e.target.value})
  }

  render(){

if(this.state.loading){ 
  return <h1 id="ld">loading.......</h1>
}
const newData = this.state.user.filter(user =>{
    return user.name.toLocaleLowerCase().includes(this.state.searchString)
  });
 

    return (
    <div className="App">

  <input id="input"type="text" onChange={this.searchHandler} />
  { <button class="btn"onClick={(e)=>this.setState({setnumb:'70'})}>change number</button> }

 
     {this.state.searchString}
     <p>{this.state.setnumb}</p>
     <div class="hey">

     {
      newData.map((data)=>{
        return <h1 key={data.id}>{data.name}</h1>
         
      })
     }
     </div>
   
  
</div>
  );
 
  }
}

export default App;































































































