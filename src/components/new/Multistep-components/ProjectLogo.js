import React, { useState } from 'react';

function ProjectLogo(props) {

    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <img src="./hotel1.jpg" style={{ borderRadius: "6px" }} width="60px" height="60px" />
                </div>
                <div style={{ fontSize: "18px", lineHeight: "22px", marginLeft: "10px", fontWeight: 500, marginTop: "12px" }}>
                    Hungrr
                    <div>
                        <i class="fas fa-location-arrow text-secondary cursor-pointer" style={{ fontSize: "15px" }}>
                            <a href='https://www.google.com/maps' className="text-decoration-none" style={{ fontSize: "12px", fontWeight: "300" }}>click</a>
                        </i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectLogo;
