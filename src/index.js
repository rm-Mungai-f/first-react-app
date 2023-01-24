import React, {useState} from "react";
import ReactDOM from "react-dom";

// const App = () =>{
//     return (
//         <div>
//             Hello World
//         </div>
//     )
// }

//function App() {
const App = () =>{
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>
                You clicked {counter} times
            </p>
            <button onClick={() => setCounter(counter + 1)}>
                Increment by 1
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                Decrement by 1
            </button>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)