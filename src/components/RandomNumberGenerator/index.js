// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}
  onClickButton = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: randomNumber}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
