

// import './index.css'

// const ContactItem = props => {
//   const {contactDetails} = props
//   const {name, mobileNo, isFavorite} = contactDetails

//   const starImgUrl = isFavorite
//     ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

//   return (
//     <li className="table-row">
//       <div className="table-cell name-column">
//         <p>{name}</p>
//       </div>
//       <hr className="separator" />
//       <div className="table-cell mobile-no-column">
//         <p className="mobile-no-value">{mobileNo}</p>
//         <button type="button" className="favorite-icon-container">
//           <img src={starImgUrl} className="favorite-icon" alt="star" />
//         </button>
//       </div>
//     </li>
//   )
// }

// export default ContactItem


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
