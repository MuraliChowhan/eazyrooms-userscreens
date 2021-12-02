import React, { useState } from 'react';
import Header from '../../Header/Header';
import './orders.css';
import { useHistory } from 'react-router-dom';

function RequestCancillation(props) {
    let history = useHistory();
    return (
        <>
            <Header />
            <div className="container">
                <span className="cursor-pointer user-lables">
                    <i className="fas fa-arrow-left py-4"
                        style={{ marginRight: "5px" }}
                        onClick={() => history.goBack()}
                    ></i> Request Cancellation
                </span>
                <div className="row">
                    <div className="col-sm-12 col-md-2"></div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <div className="border-bottom mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2" style={{ fontWeight: "500", color: "rgb(70 68 68)", fontSize: "15px", }}>
                                    Order #2557939
                                </p>
                                <span style={{ fontSize: "16px", fontWeight: "500" }}>&#8377; 500</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-2" style={{ fontSize: "15px", fontWeight: "500", color: "#808080" }}>
                                    Item
                                </p>
                                <span style={{ fontSize: "15px", fontWeight: "500", color: "#808080" }}>
                                    Yesterday, 08:08 PM
                                </span>
                            </div>
                        </div>

                        <div className="request-cancilation-text mb-3">
                            REASON FOR CANCELLATION
                        </div>

                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 cancel-types">I Ordered it by mistake</label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 cancel-types">
                                I want to change my delivery address
                            </label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 cancel-types">
                                Price for the product has decreased
                            </label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 cancel-types">
                                I have changed my mind</label>
                        </div>
                        <div className="mb-3 d-flex align-items-center" style={{ marginLeft: "18px" }}>
                            <input
                                className="form-check-input mt-0"
                                type="radio"
                                value=""
                                aria-label="Radio button for following text input" />
                            <label className="mb-0 ml-2 cancel-types">
                                Other</label>
                        </div>
                    
                        <div className="btn">
                            <button className="cancel-order-button"
                             onClick={() => history.push({
                                pathname: `/confirm-cancel`
                            })}
                            >Cancel Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RequestCancillation;
