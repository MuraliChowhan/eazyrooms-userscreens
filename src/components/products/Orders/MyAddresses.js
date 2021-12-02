import React, { useState } from "react";
import AddAddressModal from "../Modals/AddAddressModal";
import './orders.css';

function MyAddresses(props) {
    const [addAddress, setAddAddress] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    return (
        <>
            <div className="col-sm-12 col-md-5 col-lg-5">
                <div className="card p-5 card-hover mt-4"
                    onClick={() => setAddAddress({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                >
                    <div className="d-flex justify-content-center align-items-center cursor-pointer" style={{ color: "#ee741f" }}>
                        <i className="fas fa-plus" style={{ marginRight: "10px" }}></i>  Add new address
                    </div>
                </div>
            </div>
            <AddAddressModal
                show={addAddress.modal}
                onHide={() => setAddAddress({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addAddress}
            />
        </>
    );
}

export default MyAddresses;
