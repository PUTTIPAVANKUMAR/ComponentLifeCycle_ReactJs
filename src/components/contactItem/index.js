


import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props){
    super(props)
    this.state = {date : new Date()}
    console.log("constructr() called")
  } 
  componentDidMount(){
    console.log("ComponentDidMount() called")
    this.timerId = setInterval(this.tick, 1000)
  }
  tick = () =>{
    this.setState({date : new Date()})
  }
  componentWillUnmount(){
    console.log("ComponentWillUnmount() called")
    clearInterval(this.timerId)
  }
  render() {
    const {date} = this.state;
    //console.log(date); 
    console.log("rednder() called")
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        {/* <p className='time'>{date.toLocaleDateString()}</p>
        <p className='time'>{date.toLocaleTimeString()}</p> */}
        <p className='time'>{date.toLocaleString()}</p>
      </div>
    )
  }
}
export default Clock
