import React from "react";
import "./hoteldetails.css";
import { useHistory } from 'react-router-dom';
import ProjectLogo from "../Multistep-components/ProjectLogo";
import SimpleSearchBar from "../searchbar/SimpleSearchBar";
import MultiSelectFormHeader from "../MultiSelectForm";
function HotelDetails() {
    let history = useHistory();
    const hoteldetails = [
        {
            name: "Taj hotel",
            img: "./hotel1.jpg",
            address: "Madhapur, near metro 3-80, telangana",
            route: "./hotel-details"
        },
        {
            name: "Kritunga Restaurent",
            img: "./hotel2.jpg",
            address: "Jubli hills, near metro 3-82, telangana",
            route: "./hotel-details"
        },
        {
            name: "Barbeque",
            img: "./hotel3.jpg",
            address: "Uppal, near metro 3-80, telangana",
            route: "./hotel-details"
        },
        {
            name: "Barbeque",
            img: "./hotel4.jpg",
            address: "Uppal, near metro 3-80, telangana",
            route: "./hotel-details"
        },
        {
            name: "Barbeque",
            img: "./hotel5.jpg",
            address: "Uppal, near metro 3-80, telangana",
            route: "./hotel-details"
        },
        {
            name: "Barbeque",
            img: "./hotel6.jpg",
            address: "Uppal, near metro 3-80, telangana",
            route: "./hotel-details"
        },
    ]

    // const onClick = (item, index) => {
    //     setActiveStep(item.name)
    //     history.push({
    //         pathname: item.route,
    //         state: { data: item.route, param: item.name }
    //     })
    // }

    return (
        <>
            <div className="border-bottom pb-3">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 col-lg-3 mb-3 mb-lg-0 mb-md-0">
                            <ProjectLogo />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 mb-3 mb-lg-0 mb-md-0">
                            <SimpleSearchBar />
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-3">
                            <MultiSelectFormHeader />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    {
                        hoteldetails.map((item, index) =>
                            <div key={index} className="col-sm-12 col-md-3 col-lg-3" style={{ marginBottom: "20px" }}>
                                <div className="card h-100"
                                    onClick={(e) => {
                                        history.push({
                                            pathname: `/hotel-menu`,
                                            state: {
                                                data: "details"
                                            }
                                        })
                                    }}
                                >
                                    <img className="card-img-top " src={item.img} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontSize: "15px", fontWeight: "600" }}>{item.name}</h5>
                                        <p className="card-text" style={{ fontSize: "14px" }}>
                                            <i className="fas fa-map-marker-alt" style={{ marginRight: "3px" }}></i>
                                            {item.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default HotelDetails
