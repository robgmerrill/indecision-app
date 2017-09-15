class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count - 1
    //   };
    // });
    this.setState({
      count: this.state.count - 1
    })
  }
  handleReset() {
    // this.setState(() => {
    //   return {
    //     count: 0
    //   };
    // });
    this.setState({
      count: 0
    })
  }
  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter/>, document.getElementById('app')
);

//
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count: 0
//     };
//   }
//   handleAddOne() {
//     alert('you added one');
//     this.setState(function() {
//       count++;
//     });
//   }
//   handleMinusOne() {
//     alert('you subtracted one');
//     this.setState(function() {
//       count--;
//     });
//   }
//   handleReset() {
//     alert('you reset the total');
//     this.setState({
//       count= 0;
//     });
//   }
//   render() {
//     return(
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Counter/>, document.getElementById('app')
// );

// let count = 0;
// const addOne = () => {
//   count++;
//   console.log(count);
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   console.log(count);
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log(count);
//   renderCounterApp();
// };
//
// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>Add One</button>
//       <button onClick={minusOne}>Minus One</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(
//     template2,
//     document.getElementById("app")
//   );
// };
//
// renderCounterApp();
