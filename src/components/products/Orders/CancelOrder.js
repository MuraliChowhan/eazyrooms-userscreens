import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import './orders.css';

function CancelOrder(props) {
    const { handleIncrement, handleDecrement, bagCount } = props;
    let history = useHistory();
    const [addItem, setAddItem] = useState(true);
   
    const sidebarItems = [
        {
            name: "Mens wear",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200"
        },

        {
            name: "Jents wear",
            heading: "Chicken Biryani",
            img: "./3.jpg",
            cost: "200"
        },
        {
            name: "Jents wear",
            heading: "Chicken Biryani",
            img: "./3.jpg",
            cost: "200"
        }
    ]
   
    return (
        <>
            <Header />
            <div style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                <div className="container">
                    <span className="cursor-pointer">
                        <i className="fas fa-arrow-left py-4"
                            style={{ marginRight: "5px" }}
                            onClick={() => history.goBack()}
                        ></i> Order #2557939
                    </span>
                    <div className="row">
                        <div className="col-sm-12 col-md-2 col-lg-2"></div>
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <div className="card p-4 border-0 shadow">
                                <div class="d-flex align-items-center mb-3 border-bottom pb-3">
                                    <div class="flex-shrink-0">
                                        <img src="./1.jpg" alt="..." className="rounded border" width="40px" height="40px" />
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{ color: "#146eb4", fontSize: "15px", fontWeight: "600" }}>
                                        Amigo
                                        <div style={{ fontWeight: "500", fontSize: "15px", color: "#808080" }}>Yesterday, 08:08 PM | 1 Item | ₹500</div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3 border-bottom pb-3">
                                    <div class="flex-shrink-0">
                                        <i className="fas fa-poll-h" style={{ fontSize: "40px", color: "#808080" }}></i>
                                        {/* <img src="./1.jpg" alt="..." className="rounded border" width="50px" height="50px" /> */}
                                    </div>
                                    <div className="flex-grow-1 ms-3" style={{ color: "#ee741f", fontSize: "15px", fontWeight: "600" }}>
                                        Order Pending
                                        <div style={{ fontWeight: "500", fontSize: "14px", color: "#808080" }}>
                                            Your order is successful and seller will confirm your order shortly
                                        </div>
                                    </div>
                                    <button className="cancel-order-btn"
                                        onClick={() => history.push({
                                            pathname: `/cancel`
                                        })}
                                    >Cancel Order</button>
                                </div>

                                <div class="d-flex align-items-center mb-3 border-bottom pb-3">
                                    <div className="flex-shrink-0">
                                        <i className="fas fa-truck" style={{ fontSize: "30px", color: "#808080" }}></i>
                                        {/* <img src="./1.jpg" alt="..." className="rounded border" width="50px" height="50px" /> */}
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div style={{ fontWeight: "500", fontSize: "14px", color: "#808080" }}>
                                            To be shipped
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3 border-bottom pb-3">
                                    <div className="flex-shrink-0">
                                        <i className="far fa-check-square" style={{ fontSize: "40px", color: "#808080" }}></i>
                                        {/* <img src="./1.jpg" alt="..." className="rounded border" width="50px" height="50px" /> */}
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div style={{ fontWeight: "500", fontSize: "14px", color: "#808080" }}>
                                            To be Delivered
                                        </div>
                                    </div>
                                </div>

                                <p className="mb-2" style={{ fontWeight: "500", fontSize: "15px", color: "#808080" }}>I Item</p>
                                <div className="media d-flex align-items-center  mb-3 pb-3 border-bottom">
                                    <img
                                        className="mr-3 border rounded"
                                        width="120px"
                                        height="110px"
                                        src='./item.jpg'
                                        alt="image"
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
                                                Stuffed Face Kid's Pillow
                                            </p>
                                            <p className="product-sub-text">
                                                Per piece
                                            </p>

                                            <div className="d-flex align-items-center">
                                                <div className="border px-2 rounded order-items-count">1</div>
                                                <span className="product-cost" style={{ marginLeft: "5px" }}>&#8377; 500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="media d-flex align-items-center mb-3 pb-3 border-bottom">
                                    <div className="media-body w-100" style={{ marginLeft: "12px" }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2" style={{ fontWeight: "500", color: "rgb(70 68 68)", fontSize: "15px", }}>
                                                Item total
                                            </p>
                                            <span style={{ fontSize: "16px", fontWeight: "500" }}>&#8377; 500</span>
                                        </div>
                                        <div className="d-flex justify-content-between mb-3">
                                            <p className="mb-2" style={{ fontWeight: "500", color: "rgb(70 68 68)", fontSize: "15px", }}>
                                                Delivery
                                            </p>
                                            <span style={{ color: "#17b31b", fontSize: "16px", fontWeight: "500" }}>Free</span>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="mb-2" style={{ fontWeight: "600", color: "#000", fontSize: "16px", }}>
                                                Grand Total
                                            </p>
                                            <span style={{ color: "#000", fontSize: "16px", fontWeight: "600" }}>&#8377; 500</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p style={{ fontSize: "15px", color: "#808080", textTransform: "uppercase" }}>Your details </p>
                                    <div className="row" style={{ marginLeft: "15px" }}>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">Name :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">Vijay Bhasker</div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">Mobile :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">+91-6830037837</div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">Address :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">hyderabad, jubli hills</div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">City :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">hyderabad</div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">Pincode :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">500082</div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 col-lg-4 mb-2">
                                            <div className="user-lables">Payment :</div>
                                        </div>
                                        <div className="col-sm-12 col-md-8 col-lg-8">
                                            <div className="user-values">Cash on delivery</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CancelOrder;
