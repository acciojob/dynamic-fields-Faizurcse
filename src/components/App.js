
import React from "react";
import "./../styles/App.css";

const App = () => {
  const addInput = () => {
    const container = document.getElementById("container");
    const newInput = document.createElement("div");
    newInput.innerHTML = `<input type="text" placeholder="Name" /><input type="number" placeholder="Age" /><button>Remove</button>`;
    container.appendChild(newInput);

    const removeButtons = document.querySelectorAll("button");
    removeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        container.removeChild(button.parentElement);
      });
    });
  };

  function mydata(event){
    event.preventDefault();
    const a = document.getElementById('name')
    const b = document.getElementById('age')

    const obj = {
      name : a.value,
      age : b.value
    }
    console.log(obj)
  }


  return (
    <div>
      <form onSubmit={mydata}>
        <div id="container">
          <div>
            <input id='name' type="text" placeholder="Name" />
            <input id='age' type="number" placeholder="Age" />
            <button>Remove</button>
          </div>
        </div>
        <button type="button" onClick={addInput}>
          Add More
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

