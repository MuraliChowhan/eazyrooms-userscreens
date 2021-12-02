import React, { useState } from "react";
import MultiSelectFormHeader from "../new/MultiSelectForm";
import SimpleSearchBar from "../new/searchbar/SimpleSearchBar";
import ProjectLogo from "../products/ProjectLogo";

function Header(props) {

    return (
        <>
            <div className="border-bottom">
                <div className="container py-2">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-2 col-lg-2 mb-3 mb-lg-0 mb-md-0">
                            <ProjectLogo />
                        </div>
                        <div className="col-sm-12 col-md-7 col-lg-7 mb-3 mb-lg-0 mb-md-0">
                            <SimpleSearchBar />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <MultiSelectFormHeader bagCount={props.bagCount} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
