let count = 0;
const addOne = () => {
  count++;
  console.log(count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log(count);
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log(count);
  renderCounterApp();
};

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>Add One</button>
      <button onClick={minusOne}>Minus One</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  ReactDOM.render(
    template2,
    document.getElementById("app")
  );
};

renderCounterApp();
