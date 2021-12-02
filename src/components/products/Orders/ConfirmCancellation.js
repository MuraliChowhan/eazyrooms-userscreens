import React, { useState } from 'react';
import Header from '../../Header/Header';
import './orders.css';
import { useHistory } from 'react-router-dom';

function ConfirmCancellation(props) {
    let history = useHistory();
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2"></div>
                    <div className="col-sm-12 col-md-8 col-lg-8 pt-5 mt-3 text-center">
                        <img src="./success.gif" width="200" height="200" />
                        {/* <i className="fas fa-check-circle fa-4x m-4" style={{ color: "#146eb4" }}></i> */}
                        <div className="mb-2" style={{ fontSize: "17px", color: "#000", fontFamily: "system-ui" }}>
                            Cancellation confirmed!
                        </div>
                        <div className="mb-3" style={{ fontSize: "17px", color: "#808080", fontFamily: "system-ui" }}>
                            Your order #2557939 from
                            <span style={{ color: "#000", fontFamily: "system-ui", cursor: "pointer" }}
                                onClick={() => history.push({
                                    pathname: `/`
                                })}
                            > Amigo.Products </span>
                            has been successfully cancelled.
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="check-status-btn"
                                onClick={() => history.push({
                                    pathname: `/cancelorders`
                                })}
                            >
                                Check Status
                            </button>
                            <button className="continue-shopping-btn"
                                onClick={() => history.push({
                                    pathname: `/Categories`
                                })}
                            >
                                Continue shopping
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ConfirmCancellation;
