import React, { useState } from 'react';
import ProfileAccountModal from '../modals/ProfileAccountModal';
import '../new/list.css';
// import MultiForm from './Multistep-components/Multi-Step-Forms';
import MasterForm from './Multistep-components/Multi-Step-Forms';
import MultiStepProgressBar from './Multistep-components/MultiStepProgressBar';

import { useHistory } from 'react-router-dom';
function MultiSelectFormHeader(props) {
    let history = useHistory();
    const [lastReasonModal, setLastReasonModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

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

    const nextStep = (item) => {
        setStep(item.name)
        if (step < 4) {
            setStep(step + 1);
        } else if (step === 4) {
            // console.log(values);
        }
    };

    const prevStep = (item) => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-md-end justify-content-lg-end">
                <div className="text-center d-flex align-items-center account account-bg"
                    style={{ marginRight: "10px" }}
                    onClick={() => history.push({
                        pathname: `/categories`
                    })}
                >
                    <i className="fas fa-th-large" style={{ paddingRight: "4px" }}></i> Categories
                </div>

                <div className="text-center icon-bg-bag"
                    onClick={() => history.push({
                        pathname: `/bag`
                    })}
                >
                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"
                        style={{ width: "25px", height: "25px" }}
                    >
                        <span class="visually text-white" style={{ position: "absolute", left: "7px", bottom: "0px" }}>
                            {props.bagCount ? <span>{props.bagCount}</span> : 0}
                        </span>
                    </span>
                    <i className="fas fa-shopping-bag" style={{ paddingRight: "4px" }}></i> Bag
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
