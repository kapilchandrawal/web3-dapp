import React, {Component} from 'react';
import './App.css';
import Web3 from 'web3';
import {TODO_LIST_ABI, TODO_LIST_ADDRESS} from './config'


class App extends Component {
  
  
  componentWillMount(){
    this.loadBlockChainData();
  }
  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType()
    const accounts= await web3.eth.getAccounts()
    this.setState({account:accounts[0]})
    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)  
    this.setState({todoList})
    console.log("todoList", todoList)
    console.log("network:",network)
  
    console.log("account:", accounts[0])
  }
  constructor(props){
    super(props)
    this.state = {accounts: ""}
  }
  // ethereumButton = () => {
  //   ethereum.request({ method: 'eth_requestAccounts' });
  // }

  render() {
    return (
      <div className="container">
        <h1>Hello world!</h1>
        <p>Your account:{this.state.account}</p>
        {/* <button onClick={ethereumButton} class="enableEthereumButton">Enable Ethereum</button> */}
      </div>
    );
  }
}

export default App;
