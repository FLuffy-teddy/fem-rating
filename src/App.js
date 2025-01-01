import logo from "./icon-star.svg";
import image from "./illustration-thank-you.svg";
import "./App.css";
import "typeface-overpass";
import { useState } from "react";

const feedback = [false, false, false, false, false];

function Submission({ clickFunction, selection, submitFunction }) {
  return (
    <div className="App-component">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="header">How did we do?</h1>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="select-wrap">
        {selection.map(function (item, i) {
          return (
            <button
              key={i}
              className={item === true ? "active" : "not-active"}
              onClick={() => {
                clickFunction(i);
              }}
            >
              {[i + 1]}
            </button>
          );
        })}
      </div>
      <button className="submit" onClick={submitFunction}>
        SUBMIT
      </button>
    </div>
  );
}

function TY({ selection }) {
  const selectionNumber = selection.indexOf(true);
  return (
    <div className="App-component thanks">
      <img src={image} className="App-image" alt="Thank You" />
      <div className="bubble-wrap">
        <h3 className="selection">
          You selected {selectionNumber + 1} out of 5
        </h3>
      </div>
      <h2 className="header">Thank You!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default function App() {
  const [selectedButtons, setSelectedButtons] = useState(feedback);
  const [showSubmission, setShowSubmission] = useState(false);

  function handleClick(index) {
    const newFeedback = selectedButtons.map((current, selected) => {
      if (selected === index) {
        return (current = true);
      }
    });
    setSelectedButtons(newFeedback);
  }

  function Submit() {
    setShowSubmission(true);
  }

  return (
    <div id="app" className="App">
      {showSubmission ? (
        <TY selection={selectedButtons} />
      ) : (
        <Submission
          clickFunction={handleClick}
          selection={selectedButtons}
          submitFunction={Submit}
        />
      )}
    </div>
  );
}
