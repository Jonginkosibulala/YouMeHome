import React from "react";
import { Modal, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faHeartPulse,
  faBrain,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Questionier = () => {
  let navigate = useNavigate();
  const [state, setState] = useState(true);
  const [complete, Completed] = useState(false);
  const [pos, setPos] = useState(0);
  const [num, setNum] = useState(1);
  const [questions, setQuestions] = useState([
    {
      title: "Have you ever had post traumatic disoder?",
      options: ["Yes", "No", "None of the above"],
    },
    {
      title: "When experiencing signs of stress, Do you talk to someone?",
      options: ["Yes", "No", "None of the above"],
    },
    {
      title: "Do you ever feel empty or not enough?",
      options: ["Yes", "No", "None of the above"],
    },
  ]);
  return (
    <>
      <Modal show={state} centered>
        <Modal.Header>
          <Modal.Title className="w-100">
            <span className="w-100 d-flex justify-content-between align-items-center">
              Greetings To You!!!!
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontSize: "18px" }}>
            Hey You There are no words to express things that are going in your
            mind nor can we possibly know what you are feeling because you also
            do not know. Not being able to formulate a sentence that makes
            sense. MeYouHome is a place where we listen, share, value each
            other. Whether you want to observe or share you are welcome.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex justify-content-end align-items-end">
            <span
              className="p-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setState(false);
                Completed(true);
              }}
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                fontSize={30}
                color="grey"
              />
            </span>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal centered show={complete}>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
          <h3>Final Step</h3>
          <div className="mt-3 mb-3">
            <div className="mb-3">
              <label htmlFor="">Username</label>
              <input type="text" name="" id="" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" className="form-control" />
            </div>
            <div className="d-block pt-2">
              <button
                type="button"
                className="btn btn-lg btn-primary w-100"
                onClick={() => {
                  navigate("/dash");
                }}
              >
                Register
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Questionier;
