import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../Header/Header';
import OrderSidebar from './OrderSidebar';
import './orders.css';
import MyOrders from './MyOrders';
import MyAddresses from './MyAddresses';
import UplodFiles from '../../Files/UploadFiles';
import Messages from '../../Message/Message';

function ItemOrders(props) {
    const [lastReasonModal, setLastReasonModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
    let history = useHistory();
    const [step, setStep] = useState(1);
    const [clickedItem, setClickedItem] = useState('My Order');
    console.log('clickedItem', clickedItem)
    return (
        <>
            <Header />
            <div style={{ backgroundColor: "#fafafa" }}>
                <div className="container">
                    <div className="d-flex justify-content-between mb-3">
                        <div className="mt-4" style={{ fontSize: "18px", fontWeight: "600" }}>
                            Orders
                        </div>
                        <div className="mobile-number mt-4">
                            +91-6200383283
                        </div>
                    </div>
                    <div className="card" style={{ height: "400px" }}>
                        <div className="row">
                            <div className="col-sm-12 col-md-3 col-lg-3 border-right px-0">
                                <OrderSidebar setClickedItem={setClickedItem} />
                            </div>
                            <div className="col-sm-12 col-md-9 col-lg-9">
                                {/* <UplodFiles /> */}
                                {
                                    clickedItem === "My Order" ? <MyOrders /> : null
                                }
                                {
                                    clickedItem === "My Address" ? <MyAddresses /> : null
                                }
                                {
                                    clickedItem === "Files" ? <UplodFiles /> : null
                                }
                                {
                                    clickedItem === "Messages" ? <Messages /> : null
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemOrders;
