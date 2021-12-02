import React, { useState } from "react";
import './chatconsole.css';
import LibraryModel from "./modals/LibraryModal";
import { Dropdown } from 'react-bootstrap';
import ClassRoom from "./modals/ClassRoom";
function ChatBox(props) {
    const { activeRoom } = props;
    const [libraryModal, setLibraryModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const [classRoomModal, setClassRoomModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    // const { details, type, modalType } = params;
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
            desc: "Hello, this is kmc.?",
            status: "All"
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "Occupied"
        },
        {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "Vacate"
        }, {
            icon: "fas fa-sms",
            chat_date: "20/02/2021",
            id: "ID3920",
            desc: "Hello, hi how are you.?",
            status: "Reserved"
        }

    ]

    return (
        <>
            <div className="custom-card" >
                <div className="card text-center" style={{ height: "300px" }}>
                    <div className="card-header chatHeader"
                        onClick={
                            () => {
                                setClassRoomModal({ modal: true, modalType: 'New ', type: 'Class room', action: 'New', details: '' });
                            }
                        }
                    >
                        <span className="chatbox-header-text cursor-pointer">Mark the conversation as resolved</span>
                    </div>
                    <div className="card-body">

                        {activeRoom ?
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
                            </div> : <div style={{ fontSize: "20px", color: "#6f7781", marginTop: "10%" }}>No rooms selected</div>}
                    </div>


                    <div className="card-footer text-muted" >
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-1 col-lg-1">
                                <i className="far fa-smile"></i>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-7">
                                <input
                                    type="text"
                                    className="form-control border-0"
                                    placeholder="Type your message..."
                                />
                            </div>

                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Dropdown>
                                        <Dropdown.Toggle className=" border-0" id="dropdown-basic">
                                            <i className="fas fa-plus"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-options" href="#/action-1"
                                                onClick={
                                                    () => {
                                                        setLibraryModal({ modal: true, modalType: 'New ', type: 'Send Address', action: 'New', details: '' });
                                                    }
                                                }
                                            >
                                                <i className="fas fa-map-marker-alt" style={{ marginRight: "5px" }}></i>Send Address
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                className="dropdown-options"
                                                href="#/action-2"
                                                style={{ marginRight: "5px" }}
                                                onClick={
                                                    () => {
                                                        setLibraryModal({ modal: true, modalType: 'New ', type: 'Re-Queue', action: 'New', details: '' });
                                                    }
                                                }
                                            >
                                                <i class="fas fa-reply" style={{ marginRight: "5px" }}></i>Re-queue
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                                className="dropdown-options"
                                                href="#/action-3"
                                                onClick={
                                                    () => {
                                                        setLibraryModal({ modal: true, modalType: 'New ', type: 'Transfer agent', action: 'New', details: '' });
                                                    }
                                                }
                                            >
                                                <i class="fas fa-user-friends" style={{ marginRight: "5px" }}></i>Transfer to an agent
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-options" href="#/action-3"
                                                onClick={
                                                    () => {
                                                        setLibraryModal({ modal: true, modalType: 'New ', type: 'Block User', action: 'New', details: '' });
                                                    }
                                                }
                                            >
                                                <i className="fas fa-ban" style={{ marginRight: "5px" }}></i>Block user
                                            </Dropdown.Item>
                                            <Dropdown.Item className="dropdown-options" href="#/action-3"
                                                onClick={
                                                    () => {
                                                        setLibraryModal({ modal: true, modalType: 'New ', type: 'Close Conversation', action: 'New', details: '' });
                                                    }
                                                }
                                            >
                                                <i className="far fa-window-close" style={{ marginRight: "5px" }}></i>Close conversation
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <label
                                        for="upload-photo"
                                    >
                                        <i className="fas fa-file-upload" style={{ marginTop: "10px" }}></i>
                                    </label>
                                    <input
                                        type="file"
                                        name="photo"
                                        id="upload-photo" />
                                    <i className="far fa-map cursor-pointer"
                                        onClick={
                                            () => {
                                                setLibraryModal({ modal: true, modalType: 'New ', type: 'Message Library', action: 'New', details: '' });
                                            }
                                        }
                                    ></i>
                                    <i className="far fa-paper-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ClassRoom
                setClassRoomModal={(doc) => setClassRoomModal(doc)}
                show={classRoomModal.modal}
                onHide={() => setClassRoomModal({ modal: false, modalType: '', type: '', details: {} })}
                params={classRoomModal}
            />


            <LibraryModel
                setLibraryModal={(doc) => setLibraryModal(doc)}
                show={libraryModal.modal}
                onHide={() => setLibraryModal({ modal: false, modalType: '', type: '', details: {} })}
                params={libraryModal}

            />

        </>
    );
}

export default ChatBox
