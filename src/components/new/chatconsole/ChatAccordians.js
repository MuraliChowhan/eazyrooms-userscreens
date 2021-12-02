import React, { useEffect, useRef, useState } from "react";
import './chatconsole.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const Accordion = ({ children }) => {
    let rfVal = useRef(null);

    useEffect(() => {
        handleClick();
    }, []);

    const handleClick = () => {
        const acc = rfVal.children;
        for (let i = 0; i < acc.length; i++) {
            let a = acc[i];
            a.children[0].onclick = () => a.classList.toggle("active");
        }
    };

    return <div ref={a => (rfVal = a)}>{children}</div>;
};
function ChatAccordians() {
    const [changeName, setChangeName] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(true);
    const [email, setEmail] = useState(true);
    const [rotateIcon, setRotateIcon] = useState(false);

    const clientLables = [
        {
            lable: "Name"
        },
        {
            lable: "Phone number"
        },
        {
            lable: "Email"
        },
        {
            lable: "Entity"
        },
        {
            lable: "Active"
        },
        {
            lable: "Since"
        },
        {
            lable: "Customer Info"
        }
    ]

    function updateProfile(e, updateName) {
        if (e.key === 'Enter') {
        }
    }

    return (
        <>
            <div className="d-flex align-items-center p-2">
                <div className="flex-shrink-0">
                    <i
                        className="fas fa-sms fa-2x"
                        style={{
                            backgroundColor: "#555ae9",
                            borderRadius: "15px",
                            padding: "10px",
                            color: "#fff"
                        }}
                    ></i>
                </div>
                <div className="flex-grow-1 ms-3">
                    <div className="text-id">ID39203</div>
                    <div className="text-date" style={{ fontSize: "12px" }}>Facebook</div>
                </div>
            </div>
            <Accordion>
                <div className="accor bg-transparent">
                    <div
                        onClick={() => setRotateIcon(!rotateIcon)}
                        className="d-flex justify-content-between align-items-center chat-header-text cursor-pointer">
                        Information
                        {rotateIcon ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                    <div className="body">Device</div>
                    <div className="body">Browser</div>
                </div>
                <div className="accor">
                    <div className="d-flex justify-content-between align-items-center chat-header-text cursor-pointer"
                        onClick={() => setRotateIcon(!rotateIcon)}
                    >Client details
                        {rotateIcon ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}

                    </div>
                    <div className="body">
                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text">Name</div>
                            {
                                changeName ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            onClick={() => setChangeName(false)}
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>

                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text cursor-pointer">Phone</div>
                            {
                                phoneNumber ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            onClick={() => setPhoneNumber(false)}
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>

                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text cursor-pointer">Email</div>
                            {
                                email ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            onClick={() => setEmail(false)}
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>

                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text cursor-pointer">Entity</div>
                            {
                                email ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            onClick={() => setEmail(false)}
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>

                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text cursor-pointer">Active since</div>
                            {
                                email ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            value="12/10/2021"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>


                        <div className="d-flex align-items-center align-items-center">
                            <div className="chat-header-text cursor-pointer">Customer Info</div>
                            {
                                email ?
                                    <div style={{ display: 'flex' }}>
                                        <i className="fas fa-pencil-alt"
                                            onClick={() => setEmail(false)}
                                            style={{ marginLeft: '10px', paddingRight: '20px', cursor: "pointer" }} ></i>
                                    </div>
                                    :
                                    <div style={{ marginLeft: "10px" }}>
                                        <input
                                            style={{ background: "#eef2f8" }}
                                            type="text"
                                            className="form-control"
                                            onKeyDown={(e) => updateProfile(e, true)}
                                        />
                                    </div>
                            }
                        </div>

                    </div>
                </div>
                <div className="accor">
                    <div className="d-flex justify-content-between align-items-center chat-header-text cursor-pointer"
                        onClick={() => setRotateIcon(!rotateIcon)}
                    >History
                        {rotateIcon ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                    <div className="body">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="accor">
                    <div className="d-flex justify-content-between align-items-center chat-header-text"
                        onClick={() => setRotateIcon(!rotateIcon)}
                    >Customer satisfaction
                        {rotateIcon ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}

                    </div>

                    <div className="body">Lorem ipsum dolor sit amet.</div>
                </div>
                <div className="accor">
                    <div className="d-flex justify-content-between align-items-center chat-header-text cursor-pointer">Notes
                        {rotateIcon ? <i className="fas fa-angle-down"></i> : <i className="fas fa-angle-up"></i>}
                    </div>
                    <div className="body">
                        <div className="card" style={{ backgroundColor: "#f2f5fc" }}>
                            <div className="card-header py-0 bg-transparent">
                                <input
                                    type="text"
                                    className="form-control p-0 border-0"
                                    placeholder="Object"
                                    style={{ backgroundColor: "#f2f5fc" }}
                                />
                            </div>
                            <div>
                                <div className="form-floating">
                                    <textarea
                                        style={{ backgroundColor: "#f2f5fc" }}
                                        className="form-control border-0"
                                        id="floatingTextarea">
                                    </textarea>
                                    <label>Content</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Accordion>

        </>
    );
}

export default ChatAccordians
