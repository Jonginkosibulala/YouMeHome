import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge, Offcanvas } from "react-bootstrap";
import { useState } from "react";

import {
  faBookReader,
  faHeartPulse,
  faBrain,
  faMessage,
  faCodeBranch,
  faBell,
  faPersonCircleQuestion,
  faUserAlt,
  faSignOutAlt,
  faFlag,
  faReply,
  faTrashAlt,
  faArrowsTurnRight,
  faQuestionCircle,
  faUser,
  faComment,
  faCircleDot,
  faCircle,
  faStamp,
  faPaperclip,
  faArrowRightRotate,
  faLongArrowRight,
  faArrowRight,
  faTicketSimple,
  faPodcast,
  faStream,
  faPlaneArrival,
  faPaperPlane,
  faSpinner,
  faArrowLeft,
  faHandPointer,
  faTicket,
  faDashboard,
  faLightbulb,
  faBabyCarriage,
} from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";

const Bot = () => {
  const [state, setState] = useState(false);
  const [flags, setFlags] = useState(false);
  const [profile, setProfile] = useState(false);
  const [units, setUnits] = useState(false);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    datasets: [
      {
        label: "Dataset 1",
        data: [101, 320, 11, 90, 44, 420, 202, 110],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [101, 30, 121, 90, 50, 330, 20, 110],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div className="content">
        <div className="nav-content p-3">
          <div>
            <h4 style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faBrain} /> MLABS
            </h4>
          </div>
          <div className="d-flex">
            <div style={{ cursor: "pointer" }} onClick={() => setState(true)}>
              <h5>
                <FontAwesomeIcon icon={faMessage} className="mx-3" />
              </h5>
            </div>
            <div className="mx-3" style={{ cursor: "pointer" }}>
              <h5>
                {" "}
                <FontAwesomeIcon icon={faBell} color="orange" />
                <Badge>0</Badge>
              </h5>
            </div>
            <div style={{ cursor: "pointer" }}>
              <h5>
                <FontAwesomeIcon icon={faSignOutAlt} className="mx-3" />
              </h5>
            </div>
          </div>
        </div>
        <div className="board pb-lg-0">
          <aside className="aside-prop bg-dark d-none d-md-block">
            <ul>
              <li>
                <FontAwesomeIcon icon={faDashboard} />
                Dashboard
                <Badge>10</Badge>
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} />
                Chat
                <Badge>10</Badge>
              </li>
              <li onClick={() => setUnits(true)}>
                <FontAwesomeIcon icon={faCodeBranch} /> Units
                <Badge>40</Badge>
              </li>

              <li>
                <FontAwesomeIcon icon={faPersonCircleQuestion} /> Span
                <Badge bg="danger">3</Badge>
              </li>
              <li onClick={() => setFlags(true)}>
                <FontAwesomeIcon icon={faFlag} /> Flags
                <Badge>12</Badge>
              </li>
              <li onClick={() => setProfile(true)}>
                <FontAwesomeIcon icon={faUserAlt} /> Profile
                <Badge>55</Badge>
              </li>

              <li>
                <FontAwesomeIcon icon={faSignOutAlt} /> Signout
              </li>
            </ul>
          </aside>
          <main className="main-prop d-flex flex-column"></main>
        </div>
      </div>
      <Offcanvas show={units} onHide={() => setUnits(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Units</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="bg-light p-3 mb-3">
            <p>
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp; Unit A
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 110 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit B
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 101 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit C
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 210 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit D
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 17 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit E
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 30 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit F
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 110 engagements
              </small>
            </p>
          </div>
          <div className="bg-light p-3 mb-3">
            <p>
              {" "}
              <FontAwesomeIcon icon={faCodeBranch} />
              &nbsp;Unit G
              <br />
              <small>
                <FontAwesomeIcon icon={faMessage} />
                &nbsp; 320 engagements
              </small>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={profile}
        onHide={() => setProfile(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-3">
            <FontAwesomeIcon icon={faBabyCarriage} />
            &nbsp; Caregiver
          </div>
          <div className="mb-3">
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="">Bio</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="form-control"
            ></textarea>
          </div>
          <div>
            <button type="button" className="btn btn-lg btn-primary">
              Submit
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas show={flags} onHide={() => setFlags(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Flags</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="bg-light p-2 mb-3">
            <h6>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; user #2101
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              veritatis quia at ut, fugit dolorem cum autem?
            </p>
          </div>
          <div className="bg-light p-2 mb-3">
            <h6>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; user #33029
            </h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
              eius ipsam, exercitationem accusamus harum et, adipisci incidunt
              eos fugit porro voluptatibus doloremque, est id iure nobis aut
              quidem odio? Impedit animi voluptatibus sunt id enim ab aliquid
              quos excepturi doloribus dolor, rem recusandae accusantium nisi!
              Eveniet, consectetur enim animi sapiente blanditiis quaerat!
              Nihil, molestiae! Culpa sequi molestiae vel quidem sunt!
            </p>
          </div>
          <div className="bg-light p-2 mb-3">
            <h6>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; user #5622
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              laborum expedita nihil sequi.
            </p>
          </div>
          <div className="bg-light p-2 mb-3">
            <h6>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; user #12002
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              neque accusantium expedita illum nihil ipsum perspiciatis
              recusandae ipsam eligendi? Sit neque id illum est minus assumenda
              a.
            </p>
          </div>
          <div className="bg-light p-2 mb-3">
            <h6>
              <FontAwesomeIcon icon={faUser} />
              &nbsp; user #4290
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              necessitatibus mollitia atque maiores beatae.
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Bot;
