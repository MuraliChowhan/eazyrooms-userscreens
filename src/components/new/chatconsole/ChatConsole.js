import React, { useState } from "react";
import ChatAccordians from "./ChatAccordians";
import ChatBox from "./ChatBox";
import './chatconsole.css';
import EmptyThread from "./EmptyThread";
import ReactTooltip from "react-tooltip";

function ChatConsole() {
    const [isShow, setIsShow] = useState(true);
    const [activeStep, setActiveStep] = useState('Messages');
    const [activeStepItem, setActiveStepItem] = useState('Messages');
    const chatData = [

        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?"
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, this is kmc.?"
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?"
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?"
        }, {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?"
        }

    ]

    const icons = [
        {
            icon: "fas fa-comment-alt",
            name: "Messages",
            activeIcon: "fas fa-comments",
            inActive: "fas fa-comments",
        },
        {
            icon: "fas fa-user-friends",
            name: "Comments",
            activeIcon: "fas fa-user",
            inActive: "far fa-instalod"

        },
        {
            icon2: "far fa-clock",
            name: "",
            activeIcon: "fas fa-clock",
            inActive: "far fa-clock"
        },
        {
            icon2: "far fa-check-circle",
            name: "",
            activeIcon: "fas fa-check",
            inActive: "fas fa-check-circle"
        }
    ]

    const handleClick = (item) => {
        setActiveStep(item.name);
        setIsShow(!isShow);
    };
    const handleClickIcons = (item) => {
        setActiveStepItem(item.activeIcon);
        // setIsShow(!isShow);
    };

    const handleChat = (e) => {
        console.log(e)
    }
    return (
        <>
            <div style={{ backgroundColor: "#eef2f8" }}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 pt-3" style={{ borderRadius: "10px", backgroundColor: "#eef2f8" }}>
                            <div className="card p-3 mb-3" style={{ borderRadius: "10px" }}>
                                <div className="d-flex justify-content-between">
                                    {
                                        icons.map((item, index) =>
                                            <div key={index}
                                                className={activeStep === item.name ? 'cursor-pointer activeItem' : 'cursor-pointer inactiveItem'}
                                                onClick={() => handleClick(item, index)}

                                            >
                                                <i class={item.icon} style={{ borderRadius: "10px", fontSize: "20px", marginLeft: "10px" }}>
                                                    {
                                                        item.name === "Messages" ?
                                                            <span className="badge badge-primary"
                                                                style={{
                                                                    fontSize: "9px",
                                                                    top: "8px",
                                                                    position: "absolute",
                                                                    left: "42px"
                                                                }}
                                                            >4</span>
                                                            :
                                                            null
                                                    }
                                                </i>
                                                <div className="text-date">{item.name}</div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>

                            {
                                isShow ?
                                    <div className="d-flex justify-content-between my-4">
                                        {
                                            icons.map((item, index) =>
                                                <div key={index}
                                                    className={activeStepItem === item.activeIcon ? 'flex-shrink-0 activeColor' :
                                                        'cursor-pointer flex-shrink-0 InactiveColor'}
                                                    // data-toggle="tooltip" data-placement="top" title={item.name}
                                                    data-tip data-for="registerTip"
                                                    onClick={() => handleClickIcons(item, index)}>
                                                    <ReactTooltip id="registerTip" place="top" effect="solid" className="bg-primary">
                                                        Tooltip name
                                                    </ReactTooltip>
                                                    {
                                                        index === icons.length ?
                                                            <i
                                                                className={item.activeIcon}
                                                                style={{

                                                                    borderRadius: "20px",
                                                                    padding: "15px",
                                                                    fontSize: "20px",
                                                                    backgroundColor: "#d1d8e8"
                                                                }}
                                                            ></i> :
                                                            <i
                                                                className={item.activeIcon}
                                                                style={{

                                                                    borderRadius: "20px",
                                                                    padding: "15px",
                                                                    fontSize: "20px",
                                                                    // backgroundColor: "#555ae9"
                                                                }}
                                                            ></i>
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                    :
                                    null
                            }

                            {
                                isShow ? <div className="d-flex justify-content-end my-4">
                                    <p className="mb-0 cursor-pointer" style={{ color: "#555ae9", fontSize: "12px" }}> Sort <i className="fas fa-arrow-up"></i> </p>
                                </div>

                                    :
                                    null
                            }

                            {
                                isShow ? <div style={{ overflowY: "auto", height: "335px" }}>
                                    {
                                        chatData.map((item, index) =>
                                            <div key={index} className="card borderColor mb-3"
                                            >
                                                <div className="card-body"
                                                    onClick={(e) => handleChat(e)}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <div className="flex-shrink-0">
                                                            <i
                                                                className={item.icon}
                                                                style={{
                                                                    backgroundColor: "#555ae9",
                                                                    borderRadius: "10px",
                                                                    padding: "10px",
                                                                    color: "#fff"
                                                                }}
                                                            ></i>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <div className="text-id">{item.id}</div>
                                                            <div className="text-date">{item.chat_date}</div>
                                                            <div className="text-desc">{item.desc}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                    :
                                    <div className="d-flex">
                                        <div className="flex-shrink-0" style={{ marginRight: "10px" }}>
                                            <i
                                                className="fas fa-sms fa-1x"
                                                style={{
                                                    backgroundColor: "#555ae9",
                                                    borderRadius: "15px",
                                                    padding: "10px",
                                                    color: "#fff",
                                                    fontSize: "20px"
                                                }}
                                            >
                                                <span className="badge badge-primary"
                                                    style={{
                                                        fontSize: "9px",
                                                        top: "100px",
                                                        position: "absolute",
                                                        left: "42px"
                                                    }}
                                                >4</span>
                                            </i>
                                        </div>
                                        <i class="fas fa-check"
                                            style={{
                                                backgroundColor: "#cdd5e5",
                                                borderRadius: "15px",
                                                padding: "10px",
                                                color: "#fff",
                                                fontSize: "20px"
                                            }}
                                        ></i>
                                    </div>
                            }

                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 pt-3">
                            {
                                isShow ? <ChatBox /> : <EmptyThread />
                            }
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3 pt-3" style={{ borderRadius: "10px", backgroundColor: "#eef2f8" }}>
                            {
                                isShow ? <ChatAccordians /> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatConsole
