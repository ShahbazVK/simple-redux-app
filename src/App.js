import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index'

function App() {
  const dispatch = useDispatch()
  const myState = useSelector((state) => state.changeTheNumber)
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Tutorial for Redux</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>
        <button onClick={() => dispatch(decNumber())} className='minus'>-</button>
        <input className='inputclass' type="text" name="" id="" value={myState} />
        <button onClick={() => dispatch(incNumber())} className='plus'>+</button>
      </div>
    </div>
  );
}

export default App;
