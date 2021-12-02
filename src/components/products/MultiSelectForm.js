import React, { useState } from 'react';
import ProfileAccountModal from '../modals/ProfileAccountModal';
import '../new/list.css';
import { useHistory } from 'react-router-dom';
function MultiSelectFormHeader(props) {
    const [lastReasonModal, setLastReasonModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    let history = useHistory();
    const [step, setStep] = useState(1);

    const formData = [
        {
            id: "account",
            name: "Bag"
        },
        {
            id: "personal",
            name: "Address"
        },
        {
            id: "payment",
            name: "Info"
        },
        {
            id: "confirm",
            name: "Payment"
        }
    ]


    return (
        <>
            <div className="d-flex justify-content-md-end justify-content-lg-end align-items-center">
                <div className="text-center d-flex align-items-center">
                    <i className="fas fa-th-large" style={{ marginRight: "4px" }}></i> Categories
                </div>

                <div className="text-center icon-bg-bag"
                    style={{ marginLeft: "6px" }}
                    onClick={() => history.push({
                        pathname: `/bag`
                    })}
                >
                    <i className="fas fa-shopping-bag"></i> Bag
                </div>

                <div className="account-bg"
                    onClick={() => setLastReasonModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                >
                    <i className="far fa-user"></i> <span className="account"> Account </span>
                </div>
            </div>

            <ProfileAccountModal
                show={lastReasonModal.modal}
                onHide={() => setLastReasonModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={lastReasonModal}
            />

            {/* <div className="container">
                <MasterForm
                    setStep={setStep}
                    step={step}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            </div> */}
        </>
    );
}

export default MultiSelectFormHeader;
