import React, { useState } from "react";
import { Modal } from 'react-bootstrap';
import "./modal.css";
import { MODEL_LABLES } from "./variables_names";
function LibraryModel(props) {
    const {
        setLibraryModal,
        params,
        type
    } = props;

    return (
        <>
            <Modal
            
                size="lg"
                {...props}
                className="custom-modal-css p-4"
                keyboard={false}>
                <Modal.Header className="border-0 p-0 bg-transparent close-modal h5 px-4 pt-4" closeButton>
                    <div className="modal-header-text">{props.params.type}</div>
                </Modal.Header>
                <Modal.Body className="p-4">
                    {props.params.type === MODEL_LABLES.MESSAGE_LIBRARY ? <LibraryModal /> : null}
                    {props.params.type === MODEL_LABLES.SEND_ADDRESS ? <SendAddress /> : null}
                    {props.params.type === MODEL_LABLES.TRANSFER_AGENT ? <TransferAgent /> : null}
                    {props.params.type === MODEL_LABLES.RE_QUEUE ? <ReQueue /> : null}
                    {props.params.type === MODEL_LABLES.BLOCK_USER ? <BlockUser /> : null}
                    {props.params.type === MODEL_LABLES.CLOSE_CONVERSATION ? <CloseConversation /> : null}
                </Modal.Body>
            </Modal>
        </>
    );
}

function LibraryModal(setLibraryModal = { setLibraryModal }) {
    return (
        <>
            <input
                type="text"
                className="form-control mb-3"
                style={{ padding: "23px !important" }}
                placeholder="Search..."
            />
            {/* <i class="fas fa-search"></i> */}
            <div className="row">
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="category-header-text">Category</div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="category-header-text">Sub Category</div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <div className="category-header-text">Sentence</div>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div
                    className="librayr-cancel-button cursor-pointer"
                    style={{ marginRight: "6px" }}
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Cancel</div>
                <div className="librayr-ok-button cursor-pointer"
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Ok</div>
            </div>
        </>
    )
}

function SendAddress(setLibraryModal = { setLibraryModal }) {
    return (
        <>
            <input
                type="text"
                className="form-control mb-3"
                style={{ padding: "23px !important" }}
                placeholder="Search..."
            />

            <div className="d-flex justify-content-end">
                <div
                    className="librayr-cancel-button cursor-pointer"
                    style={{ marginRight: "6px" }}
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Cancel</div>
                <div className="librayr-ok-button cursor-pointer"
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Ok</div>
            </div>
        </>
    )
}

function TransferAgent(setLibraryModal = { setLibraryModal }) {
    return (
        <>
            <div className="text-center mb-2" style={{ fontFamily: "", fontWeight: "bold", fontSize: "18px" }}>
                Tranfer the conversation to an agent
            </div>
            <div className="text-center mb-4" style={{ color: "#606873", fontWeight: "500", fontSize: "14px" }}>
                Please confirm the agent to which the conversation will be transferred:
            </div>

            <div className="d-flex justify-content-end">
                <div
                    className="librayr-cancel-button cursor-pointer"
                    style={{ marginRight: "6px" }}
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Cancel</div>
                <div className="librayr-ok-button cursor-pointer"
                    onClick={
                        () => {
                            setLibraryModal({ modal: false, modalType: 'New ', action: 'New', details: '' });
                        }
                    }
                >Ok</div>
            </div>
        </>
    )
}

function ReQueue(setLibraryModal = { setLibraryModal }) {
    return (
        <>

        </>
    )
}

function BlockUser(setLibraryModal = { setLibraryModal }) {
    return (
        <>

        </>
    )
}

function CloseConversation(setLibraryModal = { setLibraryModal }) {
    return (
        <>

        </>
    )
}
export default LibraryModel;
