import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  counter: state,
});

const CounterContainer = ({ counter, dispatch }) => {
  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>switch</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>switch</button>
      <button onClick={() => dispatch({ type: "INCREMENTBY10" })}>
        switch
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTBY10" })}>
        switch
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>switch</button>
    </div>
  );
};

export default connect(mapStateToProps)(CounterContainer);
