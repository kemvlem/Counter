import React from 'react';

class Counter extends React.Component{
  constructor() {
    super();
    this.state = {
      count: 0,
      doubleCount: false,
  };
}

 increment = () => {
  if (this.state.count < 20)
   this.setState({
    count: this.state.count + 1,
  });
if(this.state.doubleCount && this.state.count < 19){
  this.setState({
    count: this.state.count + 2
  })
 }
};

decrement = () => {
if (this.state.count > 1)
  this.setState({
    count: this.state.count - 1,
  });
}

toggle = () => {
 if (this.state.button === 'Single Increment' && this.state.count < 18) {
   this.setState({
     count: this.state.count + 1,
     button: 'Double Increment'
   })
 } else if (this.state.button === 'Double Increment' && this.state.count < 18) {
   this.setState({
     count: this.state.count + 2,
     button: 'Single Increment'
   })
 } else {
    return
  }
}

render(){
  return(
    <div className="container">
      <div className="navbar">Counter</div>
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.increment}>
          Increment
          </button>
          <button type="button" onClick={this.decrement}>
            Decrement
          </button>
          <button type= "button" onClick={this.clear}>
            clear
          </button>
      </div>
    </div>
  );
 }
}

export default Counter;
