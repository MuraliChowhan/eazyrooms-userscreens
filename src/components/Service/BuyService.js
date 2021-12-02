import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Header/Header";
import './buyservice.css';

function BuyService(props) {
    let history = useHistory();
    const [activeSlot, setActiveSlot] = useState();
    const [icon, setIcon] = useState(false);
    const [location, setLocation] = useState('');
    const [staff, setStaff] = useState('');
    const [date, setDate] = useState('');
    const [timeSlot, setTimeSlot] = useState();
    const [payment, setPayment] = useState('');

    const timeSlots = [
        {
            slot: [
                {
                    slots: "09:00",
                    meridium: "AM"
                },
                {
                    slots: "10:00",
                    meridium: "AM"
                },
                {
                    slots: "11:00",
                    meridium: "AM"
                }

            ]
        },
        {
            slot: [
                {
                    slots: "12:00",
                    meridium: "AM"
                },
                {
                    slots: "01:00",
                    meridium: "PM"
                },
                {
                    slots: "02:00",
                    meridium: "PM"
                }
            ]
        },
        {
            slot: [
                {
                    slots: "03:00",
                    meridium: "PM"
                },
                {
                    slots: "04:00",
                    meridium: "PM"
                },
                {
                    slots: "05:00",
                    meridium: "AM"
                }
            ]
        },
        {
            slot: [
                {
                    slots: "06:00",
                    meridium: "PM"
                },
                {
                    slots: "07:00",
                    meridium: "PM"
                },
                {
                    slots: "08:00",
                    meridium: "AM"
                }
            ]
        }
    ]
    
    function SubmitButton() {
        if (location && staff && date && payment) {
            return <button className="btn custom-btn" type="button">Confirm</button>
        } else {
            return <button className="btn custom-btn" type="button" disabled>Confirm</button>
        };
    };

    const selectSlots = (slots) => {
        setIcon(true);
        setTimeSlot(slots)
        setActiveSlot(slots);
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="mb-2">
                            <label className="lable-heading">Location</label>
                            <div className="input-group">
                                <select className="form-select" value={location} onChange={e => setLocation(e.target.value)}>
                                    <option selected>--Select--</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Chennai">Chennai</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="lable-heading">Staff</label>
                            <div className="input-group">
                                <select className="form-select"
                                    onChange={e => setStaff(e.target.value)}
                                >
                                    <option selected>--Select--</option>
                                    <option value="Murali">Murali</option>
                                    <option value="Kiran">Kiran</option>
                                    <option value="Chowhan">Chowhan</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="lable-heading">Date</label>
                            <div className="input-group">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={date}
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="lable-heading">Time Slots</label>
                            <div className="time-slot">
                                <ul className="row clearfix">
                                    {
                                        timeSlots.map((item) =>
                                            item.slot.map((doc, index) =>
                                                <li key={index} className="col-sm-12 col-md-3 col-lg-3"
                                                    onClick={() => selectSlots(doc.slots)}
                                                >
                                                    <a className={activeSlot === doc.slots ? "timing text-decoration-none slotActive" : "timing text-decoration-none slotInactive"}

                                                    >
                                                        <span>{doc.slots}</span> <span style={{ marginRight: "10px" }}>{doc.meridium}</span>
                                                        {
                                                            icon ? <i className="fas fa-check-circle text-white"></i> : null
                                                        }
                                                    </a>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="lable-heading">Mode of payment</label>
                            <div className="input-group">
                                <select className="form-select"
                                    onChange={e => setPayment(e.target.value)}
                                >
                                    <option selected>--Select--</option>
                                    <option value="Razorpay">Paytm</option>
                                    <option value="Razorpay">Razorpay</option>
                                    <option value="Google pay">Google pay</option>
                                    <option value="Phone pay">Phone pay</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-12 col-md-1 col-lg-1"> </div> */}

                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card p-3 mb-2">
                            <div style={{ fontSize: "15px", marginLeft: "9px", fontWeight: "600" }}> Details: </div>
                            <div style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fab fa-servicestack"></i> Service
                                        </div>
                                        Software
                                        {/* {location ? <span>{location}</span> : <span>--</span>} */}
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fas fa-map-marker-alt"></i> Location
                                        </div>
                                        {location ? <span>{location}</span> : <span>--</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fas fa-user"></i> Staff
                                        </div>
                                        {staff ? <span>{staff}</span> : <span>--</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fab fa-typo3"></i> Type
                                        </div>
                                        Personel
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fas fa-clock"></i>  Time
                                        </div>
                                        {timeSlot ? <span>{timeSlot}</span> : <span>--</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fas fa-shopping-cart"></i> Mode of payment
                                        </div>
                                        {payment ? <span>{payment}</span> : <span>--</span>}
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" style={{ padding: "8px" }}>
                                <div className="d-flex justify-content-between">
                                    <span className="item-heading">
                                        <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>
                                            <i className="fas fa-dollar-sign"></i> Cost
                                        </div>
                                        &#8377;  1000
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <SubmitButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BuyService;
