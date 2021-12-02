import React, { useState } from "react";
import './sidebar.css';
import './product.css';
// import ProductSlider from "./slider/ProductSlider";
import { useHistory } from 'react-router-dom';

function ProductItemsDetails(props) {
    let history = useHistory();
    const { bookNow, serviceType, serviceData, productData } = props;
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
                <div style={{ fontSize: "15px", lineHeight: "32px", fontWeight: "600" }} className="py-1 itemNames">
                    Kids Toys
                    <span style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 500 }}>
                        <span style={{ marginLeft: "10px" }} className="custom-badge">4</span>
                    </span>
                </div>
                {
                    serviceType === "service" ?
                        serviceData?.map((item, index) =>
                            <div>
                                {/* <div className="hotelName">Barbeque</div> */}
                                <div key={index} className="media d-flex align-items-center mb-4">
                                    <img
                                        className="mr-3 border rounded"
                                        width="120px"
                                        height="110px"
                                        src={item.logo}
                                        alt="Generic placeholder image"
                                        onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                    />
                                    <div className="product-discount">
                                        30% 0FF
                                    </div>
                                    <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                        <div>
                                            <p className="Product-name-text mb-2"
                                                onClick={() => history.push({
                                                    pathname: `/choosedproduct`
                                                })}
                                            >
                                                {item.producName}
                                            </p>
                                            <p className="product-sub-text">
                                                Per piece
                                            </p>

                                            <div className="d-flex align-items-center">
                                                <span className="product-cost">&#8377; {item.cost}</span>
                                                <span className="product-cost-delete ml-3"> <del>&#8377; 600</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="col-sm-12 col-md-12 col-lg-12 subTotal">
                                            <button
                                                className="service-buy-btn btn"
                                                style={{ marginLeft: "20px" }}
                                                onClick={() => history.push({
                                                    pathname: `/buy`
                                                })}
                                            >Book now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        productData?.map((item, index) =>
                            <div>
                                {/* <div className="hotelName">Barbeque</div> */}
                                <div key={index} className="media d-flex align-items-center mb-4">
                                    <img
                                        className="mr-3 border rounded"
                                        width="120px"
                                        height="110px"
                                        src={item.logo}
                                        alt="Generic placeholder image"
                                        onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                                    />
                                    <div className="product-discount">
                                        30% 0FF
                                    </div>
                                    <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                        <div>
                                            <p className="Product-name-text mb-2 sdsdsdsd"
                                                onClick={() => history.push({
                                                    pathname: `/choosedproduct`
                                                })}
                                            >
                                                {item.producName}
                                            </p>
                                            <p className="product-sub-text">
                                                Per piece
                                            </p>

                                            <div className="d-flex align-items-center">
                                                <span className="product-cost">&#8377; {item.cost}</span>
                                                <span className="product-cost-delete ml-3"> <del>&#8377; 600</del></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="col-sm-12 col-md-12 col-lg-12 subTotal">
                                            <div className="col-sm-12 col-md-12 d-flex justify-content-between align-items-center product-bid-plus-minus">
                                                <div className="minus cursor-pointer"
                                                    onClick={handleDecrement}
                                                >-</div>
                                                <div className="initial-count px-2 cursor-pointer">
                                                    {
                                                        parkingCount === 0 ? 0 : parkingCount
                                                    }
                                                </div>
                                                <div className="plus cursor-pointer"
                                                    onClick={handleIncrement}
                                                >+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>

            {/* <ProductSlider
                show={itemSliderModal.modal}
                onHide={() => setItemSliderModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={itemSliderModal}
            /> */}
        </>
    );
}

export default ProductItemsDetails;
