import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step4 = props => {
    const [activeStep, setActiveStep] = useState('Online Payment');
    const [onlinePayment, setOnlnePayment] = useState();
    // const [deliver, setDeliver] = useState();

    if (props.currentStep !== 4) {
        return null;
    }

    const paymentOptions = [
        {
            icon: "fas fa-shopping-bag",
            name: "Online Payment",
            type: "Pay Online",
            desc: "Use credit/debit card, net-banking, upi, wallets to complete the payment.",
            order: "140"
        },
        {
            icon: "fas fa-wallet",
            name: "Cash on delivery",
            type: "Pay on delivery (Debit card, Credit Card)",
            desc: "Pay in cash or pay in person at the time of delivery with GPay/PayTM/PhonePe.",
            order: "Place Order"
        }
    ]

    const sidebarClick = (item) => {
        setActiveStep(item.name)

        if (item.name === "Online Payment") {
            setOnlnePayment(item)
        }
        else {
            setOnlnePayment(item)
        }
    }

    return (
        <>
            <div className="choosePayment">Choose Payment mode</div>
            <div className="row">
                <div className="col-sm-12 col-md-8 col-lg-8 mb-3 mb-lg-0 mb-md-0">
                    <div className="card">
                        <div className="row" style={{ marginLeft: "0px" }}>
                            <div className="col-sm-12 col-md-5 col-lg-5 paymentBorders px-0" style={{ backgroundColor: "#fafafa" }}>
                                {
                                    paymentOptions.map((item, index) =>
                                        <div className={activeStep === item.name ? "activeBg border-bottom cursor-pointer" : "cursor-pointer border-bottom inactiveBg"} key={index}
                                            onClick={() => sidebarClick(item, index)}
                                        >
                                            {item.name}
                                        </div>
                                    )
                                }
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-7">
                                {
                                    onlinePayment?.name === "Online Payment" ?
                                        <div style={{ padding: "20px" }}>
                                            <div className="paymentText">
                                                Online Payment
                                            </div>
                                            <div className="paymentDesc mb-4">
                                                Use credit/debit card, net-banking, upi, wallets to complete the payment.
                                            </div>

                                            <div className="custom-btn">
                                                Pay &#8377; 140
                                            </div>

                                        </div>
                                        :
                                        <div style={{ padding: "20px" }}>
                                            <div className="paymentText">
                                                Cash on delivery
                                            </div>
                                            <div className="paymentDesc mb-4">
                                                Pay in cash or pay in person at the time of delivery with GPay/PayTM/PhonePe.
                                            </div>
                                            <div className="custom-btn">
                                                Place order
                                            </div>
                                        </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="card">
                        {/* <div style={{ padding: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="apply-coupon-text"><i className="fas fa-percent "></i> Apply Coupon</div>
                  <div className="apply-coupon-btn">Apply</div>
                </div>
              </div> */}
                        <div style={{ padding: "18px" }}>
                            <div className="d-flex mb-1 justify-content-between">
                                <span className="item-heading">
                                    Item Total
                                </span>
                                <span className="item-cost">
                                    $3
                                </span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span className="item-heading">
                                    Delivery Free
                                    <div style={{ marginTop: "3px", color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>Free delivery above <span style={{ color: "#000", fontWeight: "500" }}>	&#8377;50</span> </div>
                                </span>
                                <span className="item-cost">
                                    $3
                                </span>
                            </div>
                        </div>
                        <div className="border-top" style={{ padding: "18px" }}>
                            <div className="d-flex justify-content-between">
                                <div className="items-total">Grand Total
                                    <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Inclusive of all taxes</div>
                                </div>
                                <div className="items-total">&#8377; 120</div>
                            </div>
                        </div>
                        <div className="border-top" style={{ padding: "18px" }}>
                            <div className="d-flex justify-content-between">
                                <div className="items-total">
                                    <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Average delivery time
                                    </div>
                                </div>
                                <div className="items-total">5-10 days</div>
                            </div>
                        </div>

                        {/* <div className="card-footer bg-transparent">
                <div className="custom-btn">Continue</div>
              </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step4;
