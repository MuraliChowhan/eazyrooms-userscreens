import React, { useState } from "react";
import './chatconsole.css';

function EmptyThread(props) {
    const {
        setLibraryModal,
        params
    } = props;
    return (
        <>
            <div className="pt-4" style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "10px" }}>
                <div className="select-thread">
                    <div className="d-flex justify-content-center" style={{}}>
                        <i className="fas fa-circle fa-2x" style={{ marginRight: "4px" }}></i>
                        <i className="far fa-circle fa-2x"></i>
                    </div>
                    Please select a thread
                </div>
            </div>
        </>
    );
}

export default EmptyThread;
