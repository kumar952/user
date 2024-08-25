import {Component} from "react"



class App extends Component{
  
  state={names:[]};

  componentDidMount(){
    this.fetchingdata()
  }
  fetchingdata= async ()=>{
    const url="http://localhost:7000/names";
    const options={method:"GET"}
    const response = await fetch(url,options);
    const data=await response.json();
    this.setState({names:data})
  }
  render(){
    const {names}=this.state
    return (
      <div>
        <h1>Hello people</h1>
        {names.map((each)=>(
          <p>person name is {each.name}</p>
        ))}
        

      </div>
    )
  }

}

export default App