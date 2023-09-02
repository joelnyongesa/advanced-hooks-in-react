import { useRef } from "react";

function Box(){
    // Accessing some information whenever the button is clicked.

    const elementRef = useRef();

    function handleClick(){
        const div = elementRef.current
        console.log("Measurements: ", div.getBoundingClientRect())
    }

    return(
        <div ref={elementRef}>
            <h1>Box</h1>
            <button onClick={handleClick}>Measure</button>
        </div>
    )
}

export default Box