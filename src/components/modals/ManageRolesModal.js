import React from "react";
import { Modal, Button } from 'react-bootstrap';
function ManageRoleModal(props) {
    const {
        setRoleModal,
        params
    } = props;
    const modaldata = [
        {
            account: "User",
            name: "Manage"
        },
        {
            account: "Role",
            name: "Create"
        },
        {
            account: "Lead",
            name: "Edit"
        },
        {
            account: "Deal",
            name: "Delete"
        }
    ]
    return (
        <>
            <div className="custom-bid-modal-height">

                <Modal className="custom-bid-modal"
                    {...props}
                    size="lg"
                    keyboard={false} >
                    <Modal.Header className="border-0 mx-2 bg-transparent close-modal h5" closeButton>
                        <div>
                            Role Name
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-4 pt-0">
                        <form>
                            <div className="mb-4" style={{ fontSize: "14px", color: "#000" }}>Assign Permissions</div>
                            <div className="row mb-4 pb-2 border-bottom">
                                <div className="col-sm-12 col-md-2 col-lg-2" style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Module</div>
                                <div className="col-sm-12 col-md-2 col-lg-2" style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Permissions</div>
                            </div>
                            <div className="row mb-3 pb-2 border-bottom">
                                <div className="col-sm-12 col-md-2 col-lg-2" style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>Account</div>
                                <div className="col-sm-12 col-md-2 col-lg-2 form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label style={{ fontSize: "14px" }} className="form-check-label" >
                                        Permissions
                                    </label>
                                </div>
                            </div>
                            <div>
                                {
                                    modaldata.map((item, index) =>
                                        <div className="row mb-3 pb-2 border-bottom">
                                            <div className="col-sm-12 col-md-2 col-lg-2" style={{ fontSize: "14px", fontWeight: "500", color: "#000" }}>User</div>
                                            <div className="col-sm-12 col-md-2 col-lg-2 form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label style={{ fontSize: "14px" }} className="form-check-label" >
                                                    {item.name}
                                                </label>
                                            </div>
                                            <div className="col-sm-12 col-md-2 col-lg-2 form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label style={{ fontSize: "14px" }} className="form-check-label" >
                                                    {item.name}
                                                </label>
                                            </div>
                                            <div className="col-sm-12 col-md-2 col-lg-2 form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label style={{ fontSize: "14px" }} className="form-check-label" >
                                                    {item.name}
                                                </label>
                                            </div>
                                            <div className="col-sm-12 col-md-2 col-lg-2 form-check">
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label style={{ fontSize: "14px" }} className="form-check-label" >
                                                    {item.name}
                                                </label>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn px-3 btn-success mx-3">Create</button>
                                <button type="button" className="btn px-3 btn-secondary">Cancel</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

            </div>
        </>
    );
}

export default ManageRoleModal;
