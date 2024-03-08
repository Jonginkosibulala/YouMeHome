import { Modal, ProgressBar, Badge, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import { useState, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  /*window.onresize = function () {
    if (window.innerWidth <= 768) {
      document.querySelector(".reply-chat").style.display = "none";
    }
  };
  */
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  let _id = 3;
  let msg_id;
  let comment_id = 0;
  const [chats, setChats] = useState([]);
  const [flags, setFlags] = useState(false);
  const [profile, setProfile] = useState(false);
  const [units, setUnits] = useState(false);
  let [tags, setTags] = useState([
    {
      _id: "1",
      name: "#user13011",
      message:
        "A 32-year-old woman, had been a victim of a traumatic incident that forever altered her life. Five years ago, she survived a brutal home invasion during which she was physically assaulted and held at gunpoint. The harrowing experience left her with deep emotional scars, causing her to suffer from debilitating anxiety and post-traumatic stress disorder (PTSD). Nightmares and flashbacks haunted her daily, making it difficult for her to trust others or feel safe in her own home. Sarah's trauma impacted her relationships, career, and overall well-being, leading her on a challenging journey of healing and rehabilitation to reclaim her life.",
      tag: [
        {
          likes: 1,
          comments: 1,
          flags: 1,
        },
      ],
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
    {
      _id: "2",
      name: "#user71432",
      message:
        "after my divorce in 2013 I, 45-year-old man found myself consumed by profound sadness and despair, leading me down a dark path of depression. The weight of the emotional pain became unbearable, pushing me to contemplate ending my own life. Recognizing the severity of the situation, I sought professional help and surrounded himself with a strong support system. Through therapy, medication, and the unwavering support of loved ones, i gradually regained hope and found the strength to persevere.",
      tag: [
        {
          likes: 1,
          comments: 1,
          flags: 1,
        },
      ],
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
    {
      _id: "3",
      name: "#user52198",
      message:
        "A 14-year-old, bravely reached out for help after enduring a harrowing battle with drugs that left him homeless. Despite the challenges he faced, his courage shines through as he seeks support to overcome these struggles. It's a poignant reminder of the impact of substance abuse on young lives and the importance of providing assistance and understanding to those in need. Gilbert's story underscores the resilience of youth and the significance of community support in the face of adversity.",
      tag: [
        {
          likes: 1,
          comments: 1,
          flags: 1,
        },
      ],
      comments: [],
      time: new Date().toLocaleTimeString(),
    },
  ]);
  useEffect(() => {}, []);
  return (
    <>
      <div className="content">
        <div className="nav-content p-3">
          <div>
            <h5 style={{ cursor: "pointer" }}>YouMeHome</h5>
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
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
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
          <main className="main-prop w-lg-80 w-100">
            <div className="chats w-100 w-sm-100 w-md-100 w-xs-100 pb-5">
              {tags.length <= 0 && (
                <>
                  <div className="starter-conv">
                    <p className="text-center">
                      <FontAwesomeIcon icon={faMessage} />
                      &nbsp; There are no conversations at the moment
                    </p>
                  </div>
                </>
              )}
              {tags.length > 0 &&
                tags.map((value, index) => {
                  return (
                    <>
                      <div
                        className="card mb-2 rounded-0"
                        onClick={() => {
                          let chat = tags.find((a) => a._id == value.id);
                          setChats([value]);
                          if (window.innerWidth <= 768) {
                            document.querySelector(".chats").style.display =
                              "none";
                            document.querySelector(
                              ".reply-chat"
                            ).style.display = "block";
                          }
                        }}
                        key={index}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="card-body">
                          <h6>{value.name}</h6>
                          <p>
                            {value.message.length > 50
                              ? `${value.message.substring(0, 50)}......`
                              : value.message}
                          </p>
                        </div>
                        <div className="card-footer">
                          <div className="engagements">
                            {value.tag.map((i, j) => {
                              let likes,
                                comments,
                                flags = null;
                              if (i.likes) {
                                likes = (
                                  <small key={j}>
                                    <FontAwesomeIcon icon={faUser} />
                                    {i.likes}
                                  </small>
                                );
                              }
                              if (i.comments) {
                                comments = (
                                  <small key={j}>
                                    <FontAwesomeIcon
                                      icon={faMessage}
                                      color="green"
                                    />
                                    {i.comments}
                                  </small>
                                );
                              }
                              if (i.flags) {
                                flags = (
                                  <small key={j}>
                                    <FontAwesomeIcon
                                      icon={faFlag}
                                      color="tomato"
                                    />
                                    {i.flags}
                                  </small>
                                );
                              }
                              return (
                                <>
                                  {likes}
                                  {comments}
                                  {flags}
                                  <small key={j}>
                                    <FontAwesomeIcon
                                      icon={faReply}
                                      color="gray"
                                    />
                                  </small>
                                </>
                              );
                            })}
                          </div>
                          <small className="tme">{value.time}</small>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div className="reply-chat w-100 w-lg-50 d-lg-block pb-5 pb-lg-0">
              {chats.length <= 0 && (
                <>
                  <div className="starter-conv">
                    <p className="text-center">
                      <FontAwesomeIcon icon={faPaperPlane} />
                      &nbsp; Reply any chat to start conversation
                    </p>
                  </div>
                </>
              )}
              {chats.length > 0 && (
                <>
                  {chats.map((value, index) => {
                    msg_id = value._id;
                    return (
                      <>
                        <div className="chat-hero">
                          <div className="card rounded-0">
                            <div className="card-body">
                              <h6 className="d-flex align-items-center">
                                <div className="d-block d-lg-none">
                                  <FontAwesomeIcon
                                    icon={faArrowLeft}
                                    style={{ cursor: "pointer" }}
                                    fontSize={30}
                                    onClick={() => {
                                      document.querySelector(
                                        ".chats"
                                      ).style.display = "block";
                                      document.querySelector(
                                        ".reply-chat"
                                      ).style.display = "none";
                                      setChats([]);
                                    }}
                                    color="gray"
                                  />
                                  &nbsp; &nbsp;
                                </div>
                                {value.name}
                              </h6>
                              <p>{value.message}</p>
                            </div>
                          </div>
                          {value.comments.length > 0 && (
                            <>
                              <div className="card mt-2 rounded-0">
                                <div className="card-body">
                                  {value.comments.length > 0 && (
                                    <>
                                      {value.comments.map((i, y) => {
                                        return (
                                          <>
                                            <div className="comment">
                                              <h6>{i.name}</h6>
                                              <p>{i.message}</p>
                                            </div>
                                          </>
                                        );
                                      })}
                                    </>
                                  )}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <div className="btn-area">
                          <div>
                            <div>
                              <div className="d-flex justify-content-around align-items-center mb-md-0">
                                <textarea
                                  name=""
                                  id="msg-col"
                                  placeholder="type message........"
                                ></textarea>
                                <button
                                  type="button"
                                  id="msg-col-btn"
                                  className="btn btn-sm btn-primary"
                                  onClick={() => {
                                    let data = tags.find(
                                      (a) => a._id === msg_id
                                    );
                                    let filter = tags.filter(
                                      (a) => a._id !== msg_id
                                    );
                                    comment_id = parseInt(comment_id + 1);
                                    let message =
                                      document.getElementById("msg-col").value;
                                    data.comments.push({
                                      _id: comment_id,
                                      name: "Anonymous",
                                      message: message,
                                    });
                                    filter.push(data);
                                    setTags(filter);
                                    document.querySelector(
                                      ".nav-container"
                                    ).style.display = "flex";
                                  }}
                                >
                                  <FontAwesomeIcon icon={faPaperPlane} />
                                  <br />
                                  send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </main>
        </div>
        <Modal show={state} centered>
          <Modal.Header closeButton onClick={() => setState(false)}>
            New Message
          </Modal.Header>
          <Modal.Body>
            <textarea
              name=""
              id="compose"
              placeholder="type message......."
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                _id += 1;
                let message = document.getElementById("compose").value;
                let tag = {
                  id: _id,
                  name: "Anonymous",
                  message: message,
                  tag: [
                    {
                      likes: 1,
                      comments: 1,
                      flags: 1,
                    },
                  ],
                  comments: [],
                  time: new Date().toLocaleTimeString(),
                };
                setTags([...tags, tag]);
              }}
            >
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="nav-container d-lg-none">
        <FontAwesomeIcon
          icon={faMessage}
          color="white"
          fontSize={20}
          onClick={() => {}}
        />
        <FontAwesomeIcon
          icon={faCodeBranch}
          color="white"
          fontSize={20}
          onClick={() => setUnits(true)}
        />
        <FontAwesomeIcon
          icon={faFlag}
          color="white"
          fontSize={20}
          onClick={() => setFlags(true)}
        />
        <FontAwesomeIcon
          icon={faUser}
          color="white"
          fontSize={20}
          onClick={() => setProfile(true)}
        />
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

export default Dashboard;
