import React, { useState } from "react";
import { useEffect } from "react";
import ChatAccordians from "./ChatAccordians";
import ChatBox from "./ChatBox";
import './chatconsole.css';
import EmptyThread from "./EmptyThread";
import ReactTooltip from "react-tooltip";

function ChatConsoleRooms() {
    const [isShow, setIsShow] = useState(true);
    const [activeStep, setActiveStep] = useState('Messages');
    const [activeStepItem, setActiveStepItem] = useState();
    const [roomData, setRoomData] = useState([]);
    const [filteredData, setFilteredData] = useState('All');
    const [vacanedData, setVacanedData] = useState([]);
    const [active, setActive] = useState('All');
    const [activeRoom, setActiveRoom] = useState();

    const roomsData = [
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "vacaned",
            rooms: [
                {
                    roomNo: "101"
                },
                {
                    roomNo: "102"
                },
                {
                    roomNo: "103"
                },
                {
                    roomNo: "104"
                },
                {
                    roomNo: "105"
                }

            ]
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, this is kmc.?",
            status: "cleaned",
            rooms: [
                {
                    roomNo: "201"
                },
                {
                    roomNo: "202"
                },
                {
                    roomNo: "203"
                },
                {
                    roomNo: "204"
                },
                {
                    roomNo: "205"
                }

            ]
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "occupied",
            rooms: [
                {
                    roomNo: "301"
                },
                {
                    roomNo: "302"
                },
                {
                    roomNo: "303"
                },
                {
                    roomNo: "304"
                },
                {
                    roomNo: "305"
                }

            ]
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "All",
            rooms: [
                {
                    roomNo: "401",
                    sender: "Hello",
                    receiver: "How are you.?"
                },
                {
                    roomNo: "402",
                    sender: "Hello",
                    receiver: "How are you.?"
                },
                {
                    roomNo: "403",
                    sender: "Hello",
                    receiver: "How are you.?"
                },
                {
                    roomNo: "404",
                    sender: "Hello",
                    receiver: "How are you.?"
                },
                {
                    roomNo: "405",
                    sender: "Hello",
                    receiver: "How are you.?"
                }
            ]
        }

    ]

    const icons = [
        {
            icon: "fas fa-comment-alt",
            name: "Messages",
            activeIcon: "fas fa-comments",
            inActive: "fas fa-comments",
            status: "All",
            color_code: "#0000FF"
        },
        {
            icon: "fas fa-user-friends",
            name: "Comments",
            activeIcon: "fas fa-user",
            inActive: "far fa-instalod",
            status: "vacaned",
            color_code: "#0000FF"

        },
        {
            icon2: "far fa-clock",
            name: "",
            activeIcon: "fas fa-clock",
            inActive: "far fa-clock",
            status: "cleaned",
            color_code: "",
            color_code: ""
        },
        {
            icon2: "far fa-check-circle",
            name: "",
            activeIcon: "fas fa-check",
            inActive: "fas fa-check-circle",
            status: "occupied",
            color_code: "#00FF00"
        }
    ]

    const handleClick = (item) => {
        setActiveStep(item.name);
        setIsShow(!isShow);
    };

    const onClickIcons = (item) => {
        setActive(item.status);
        let result = [];
        roomsData.map((item) => {
            if (item.status === "All") {
                setFilteredData(item)
            }
            else if (item.status === "vacaned") {
                setFilteredData(item)
            }
            else if (item.status === "cleaned") {
                setFilteredData(item)
            }
            else if (item.status === "occupied") {
                setFilteredData(item)
            }
            else {
                console.log(item)
            }
            result.push(item);
        });
        setRoomData(result);
    }

    const handleClickIcons = (item) => {
        setActiveRoom(item.roomNo);

    };

    // const handleChat = (e) => {
    //     console.log(e)
    // }
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
                                                onClick={() => handleClick(item, index)}>
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
                                                    className={active === item.status ? 'cursor-pointer activeColor' :
                                                        'cursor-pointer InactiveColor'}
                                                    onClick={() => onClickIcons(item, index)}>
                                                    {
                                                        index === icons.length ?
                                                            <i
                                                                className={item.activeIcon}
                                                                style={{
                                                                    borderRadius: "20px",
                                                                    padding: "15px",
                                                                    fontSize: "20px",
                                                                    // backgroundColor: "#d1d8e8"
                                                                }}
                                                                data-tip data-for="rooms"
                                                            ></i> :
                                                            <i
                                                                className={item.activeIcon}
                                                                style={{
                                                                    borderRadius: "20px",
                                                                    padding: "15px",
                                                                    fontSize: "20px",

                                                                    // backgroundColor: "#555ae9"
                                                                }}
                                                                data-tip data-for="rooms"
                                                            ></i>
                                                    }
                                                    <ReactTooltip id="rooms" place="top" effect="solid" className="bg-primary">
                                                        Tooltip name
                                                    </ReactTooltip>
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
                                isShow ? <div className="row">
                                    {
                                        filteredData?.rooms?.length > 0 && filteredData?.rooms?.map((doc, index) =>
                                            <div key={index} className="col-sm-12 col-md-3 col-lg-3 mb-3">
                                                <div
                                                    className={activeRoom === doc.roomNo ? 'cursor-pointer activeColor' :
                                                        'cursor-pointer InactiveColor'}
                                                    style={{ padding: "12px", borderRadius: "10px" }}
                                                    onClick={() => handleClickIcons(doc, index)}>
                                                    {
                                                        <div style={{ fontSize: "15px", fontWeight: "bold" }}>{doc.roomNo}</div>
                                                    }
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
                                isShow ? <ChatBox activeRoom={activeRoom} /> : <EmptyThread />
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

export default ChatConsoleRooms
