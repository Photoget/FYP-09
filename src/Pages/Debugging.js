import React from 'react'
import PropTypes from 'prop-types'

function Debugging(props) {

    const pythonExec =() =>{
        const python_code = `
            print("my name is mehal")
        `;

        const pyodide = window.pyodide;

        pyodide.runPython(python_code);

    }

  return (
    <div>
      <h1>Run Python Code</h1>
      <button onClick={pythonExec}>Button</button>
    </div>
  )
}

Debugging.propTypes = {

}

export default Debugging

