import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FilterModal from '../Modals/FilterModal';
import './orders.css';

function MyOrders(props) {
    const { handleIncrement, handleDecrement, bagCount } = props;
    let history = useHistory();
    const [addItem, setAddItem] = useState(true);
    const [addnewServiceModal, setAddNewServiceModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });


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
            <div className="p-4">
                <div className="d-flex justify-content-between">
                    <div className="user-lables mb-3">Showing all orders</div>
                    <div class="cursor-pointer"
                        onClick={() => setAddNewServiceModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                    >
                        <i className="fas fa-filter fa2x border p-2 rounded"></i>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">

                        <div className="card p-3 cursor-pointer items-cards"
                            onClick={() => history.push({
                                pathname: `/cancelorders`
                            })}
                        >
                            <div class="d-flex align-items-center mb-3">
                                <div class="flex-shrink-0">
                                    <img src="./1.jpg" alt="..." className="rounded border" width="50px" height="50px" />
                                </div>
                                <div className="flex-grow-1 ms-3" style={{ color: "#146eb4", fontSize: "15px", fontWeight: "600" }}>
                                    Amigo
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <div style={{ fontWeight: "500", fontSize: "15px" }}>
                                    Order #2557939
                                </div>
                                <div style={{ fontWeight: "600", fontSize: "15px" }}>
                                    &#8377; 500
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div style={{ fontWeight: "500", fontSize: "15px", color: "#808080" }}>
                                    Item
                                </div>
                                <div style={{ fontWeight: "500", fontSize: "15px", color: "#808080" }}>
                                    Yesterday, 08:08 PM
                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <div style={{ fontWeight: "500", fontSize: "15px", color: "rgb(92 89 89)" }}>
                                    <span className="dots"></span>  Pending
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FilterModal
                show={addnewServiceModal.modal}
                onHide={() => setAddNewServiceModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addnewServiceModal}
            />
            {/* <FilterModal
                show={addnewServiceModal.modal}
                onHide={() => setAddNewServiceModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={addnewServiceModal}
            /> */}

        </>
    );
}

export default MyOrders;
