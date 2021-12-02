import React, { useState } from "react";
import './message.css';
import { Dropdown } from 'react-bootstrap';

function Messages(props) {
    const { activeRoom } = props;

    return (
        <>
            <div className="row p-4" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                <div className="col-sm-12 col-md-4 col-lg-4 shadow-sm p-4" style={{ backgroundColor: "#fff", padding: "10px" }}>
                    <div className="d-flex align-items-center mb-3 cursor-pointer">
                        <div className="flex-shrink-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR7FvvC_9X1l2xqi2rdkStAHaSRMmg89O_g&usqp=CAU" alt="..." className="rounded user-image" />
                        </div>
                        <div className="flex-grow-1 ms-2 user-name-text">
                            Ada miller
                            <h6 className="small text-muted">Hello Hi..</h6>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3 cursor-pointer">
                        <div className="flex-shrink-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTf823mknt6aPfsXnaVqUTcyhhtwvC3soRFg&usqp=CAU" alt="..." className="rounded user-image" />
                        </div>
                        <div className="flex-grow-1 ms-2 user-name-text">
                            Ada miller
                            <h6 className="small text-muted">Hello Hi..</h6>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3 cursor-pointer">
                        <div className="flex-shrink-0">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTf823mknt6aPfsXnaVqUTcyhhtwvC3soRFg&usqp=CAU" alt="..." className="rounded user-image" />
                        </div>
                        <div className="flex-grow-1 ms-2 user-name-text">
                            Ada miller
                            <h6 className="small text-muted">Hello Hi..</h6>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8">
                    <div className="card text-center" style={{ height: "370px" }}>
                        <div className="card-body">
                            <div>
                                <div className="d-flex justify-content-start align-items-center mb-4">
                                    <i className="far fa-user user-border-area" style={{ marginRight: "4px" }}></i>
                                    <div className="message-area px-3">
                                        {activeRoom}...
                                        <div className="text-date" style={{ color: "#7e8187" }}>
                                            07:45 pm
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end align-items-center">
                                    <i className="far fa-user user-border-area" style={{ marginRight: "4px" }}></i>
                                    <div className="replay-message-area px-3">
                                        {activeRoom}
                                        <div className="text-date" style={{ color: "#7e8187" }}>
                                            07:45 pm
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card-footer text-muted" >
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-1 col-lg-1">
                                    <i className="far fa-smile"></i>
                                </div>
                                <div className="col-sm-12 col-md-8 col-lg-8">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Type your message..."
                                    />
                                </div>
                                <div className="col-sm-12 col-md-3 col-lg-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <i className="far fa-laugh"></i>
                                        <label
                                            for="upload-photo">
                                            <i className="fas fa-file-upload" style={{ marginTop: "10px" }}></i>
                                        </label>
                                        <input
                                            type="file"
                                            name="photo"
                                            id="upload-photo" />
                                        <i className="far fa-paper-plane"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Messages
