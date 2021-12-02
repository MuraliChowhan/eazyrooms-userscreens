import React, { useState } from "react";
import ItemSlider from "../Multistep-components/slider/ItemSlider";
import './sidebar.css';
function ListItemsDetails(props) {
    const { bookNow } = props;
    const [itemSliderModal, setItemSliderModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    const { sidebarItems, filteredData } = props;
    const [parkingCount, setParkingCount] = useState(0);
    const handleIncrement = () => {
        setParkingCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setParkingCount(prevCount => prevCount - 1);
    };

    return (
        <>
            <div className="pt-2">
                <div style={{ fontSize: "15px", lineHeight: "32px", fontWeight: "600" }} className="itemNames">
                    Kritunga Restaurent
                    {/* <span style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 500 }}>
                        <span style={{ marginLeft: "10px" }} className="custom-badge">4</span>
                    </span> */}
                </div>
                <div className="media d-flex align-items-center mb-4">
                    <img
                        className="mr-3 border rounded "
                        width="140px"
                        height="140px"
                        src="./hotel1.jpg"
                        alt="Generic placeholder image"
                        onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                    />
                    <div className="media-body w-100" style={{ marginLeft: "12px" }}>

                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Free self parking
                                </div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Free self parking
                                </div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Room only
                                </div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Cancellation Charges Apply
                                </div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Two kids under 5 years stay free
                                </div>
                                <div className="summery-text">
                                    <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Outside food not allowed
                                </div>

                            </div>
                            <div className="border p-3" style={{ backgroundColor: "rgb(20 110 180 / 8%)", width: "45%" }}>
                                <div className="summery-text mb-2">
                                    <i className="fas fa-map-marker-alt" style={{ marginRight: "4px" }}></i> 0.8 km away from beach
                                </div>
                                <div className="mb-2" style={{ fontSize: "10px" }}>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                </div>
                                <div className="itemPrice mb-2">&#8377; 350 <span style={{ fontSize: "12px", fontWeight: "400" }}>(Per Night)</span></div>
                                <div className="col-sm-12 col-md-12 bid-plus-minus">
                                    <div className="bookNow cursor-pointer"
                                        onClick={() => bookNow(350)}
                                    >Book Now</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {
                    filteredData?.map((item, index) =>
                        <div>
                            <div className="hotelName">Barbeque</div>
                            <div key={index} className="media d-flex align-items-center mb-4">
                                <img
                                    className="mr-3 border rounded"
                                    width="140px"
                                    height="140px"
                                    src={item.img}
                                    alt="Generic placeholder image"
                                    onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                />
                                <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <span className="d-flex align-items-center" style={{ fontSize: "17px", fontWeight: "500", }}>
                                            <span className="square-box" style={{ marginRight: "5px" }}> <span className="dot"></span> </span>   {item.name}
                                        </span> */}
                                        <div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Pets are not allowed
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Room only
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Cancellation Charges Apply
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Two kids under 5 years stay free
                                            </div>

                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Outside food not allowed
                                            </div>
                                        </div>
                                        <div className="border p-3" style={{ backgroundColor: "rgb(20 110 180 / 8%)", width: "45%" }}>
                                            <div className="summery-text mb-2">
                                                <i className="fas fa-map-marker-alt" style={{ marginRight: "4px" }}></i> 0.8 km away from beach
                                            </div>
                                            <div className="mb-2" style={{ fontSize: "10px" }}>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>

                                            </div>
                                            <div className="itemPrice mb-2">&#8377; 350 <span style={{ fontSize: "12px", fontWeight: "400" }}>(Per Night)</span></div>
                                            <div className="col-sm-12 col-md-12 bid-plus-minus">
                                                <div className="bookNow cursor-pointer"
                                                    onClick={() => bookNow(350)}
                                                >Book Now</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hotelName">Taj Hotel</div>
                            <div key={index} className="media d-flex align-items-center mb-4">
                                <img
                                    className="mr-3 border rounded"
                                    width="140px"
                                    height="140px"
                                    src="./hotel2.jpg"
                                    alt="Generic placeholder image"
                                    onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                />
                                <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Free wifi
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Room only
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Cancellation Charges Apply
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Two kids under 5 years stay free
                                            </div>
                                            <div className="summery-text">
                                                <i className="fas fa-check text-success" style={{ marginRight: "4px" }}></i> Outside food not allowed
                                            </div>
                                        </div>
                                        <div className="border p-3" style={{ backgroundColor: "rgb(20 110 180 / 8%)", width: "45%" }}>
                                            <div className="summery-text mb-2">
                                                <i className="fas fa-map-marker-alt" style={{ marginRight: "4px" }}></i> 0.8 km away from beach
                                            </div>
                                            <div className="mb-2" style={{ fontSize: "10px" }}>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                                <i class="fas fa-star text-warning"></i>
                                            </div>
                                            <div className="itemPrice mb-2">&#8377; 350 <span style={{ fontSize: "12px", fontWeight: "400" }}>(Per Night)</span></div>
                                            <div className="col-sm-12 col-md-12 bid-plus-minus">
                                                <div className="bookNow cursor-pointer"
                                                    onClick={() => bookNow(350)}
                                                >Book Now</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="cost-text mb-2">&#8377; 40</div> */}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <ItemSlider
                show={itemSliderModal.modal}
                onHide={() => setItemSliderModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={itemSliderModal}
            />
        </>
    );
}

export default ListItemsDetails;
