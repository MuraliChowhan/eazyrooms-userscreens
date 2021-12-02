import React, { useState } from "react";
import Header from "../Header/Header";
import { useHistory } from 'react-router-dom';
import './categories.css';

function IndividualCategories(props) {
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
            name: "Lehanga choli seats",
            heading: "Egg fired rice",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Shoes",
            heading: "Mutton Biryani",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Shorts",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Lungis",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200"
        }

    ]

    const plusButton = () => {
        setAddItem(false);
    }

    return (
        <>
            {/* <Header bagCount={bagCount} /> */}
            <div className="container mt-4">
                {/* <div className="d-flex align-items-center mb-4 cursor-pointer">
                    <i className="fas fa-arrow-left"
                        style={{ marginRight: "5px" }}
                        onClick={() => history.goBack()}
                    ></i> Back
                </div> */}
                <div className="row">
                    {
                        sidebarItems.map((item, index) =>
                            <div key={index} className="col-sm-12 col-md-3 col-lg-3 grid-ite mb-4">
                                <div className="card">
                                    <div className="d-flex justify-content-end">
                                        <div className="categories-discount">30% 0FF</div>
                                    </div>
                                    <img src={item.img} className="card-img" alt="img"
                                        onClick={() => history.push({
                                            pathname: `/choosedproduct`
                                        })}
                                    />
                                    <div className="card-body">
                                        <p className="mb-0 item-name-text"
                                            onClick={() => history.push({
                                                pathname: `/choosedproduct`
                                            })}
                                        >{item.name}</p>
                                        <p className="mb-0 total-piece-text">Per piece</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <span className="item-cost-text">₹ 900</span>
                                                <span className="deleted-cost-text ml-3"> <del>₹ 600</del></span>
                                            </div>
                                            <div>
                                                {
                                                    addItem ?
                                                        <button className="d-flex px-2 justify-content-between align-items-center item-counts add-item-text">
                                                            <span className="pt-1">ADD</span>
                                                            <i className="fas fa-plus"
                                                                onClick={plusButton}
                                                            ></i>
                                                        </button>
                                                        :
                                                        <div class="col-sm-12 col-md-12 px-2 d-flex justify-content-between align-items-center item-counts">
                                                            <div class="item-count-dec cursor-pointer"
                                                                onClick={handleDecrement}
                                                            >-</div>
                                                            <div class="item-initial-count px-2 cursor-pointer">
                                                                {
                                                                    bagCount < 0 ? 0 : bagCount
                                                                }
                                                            </div>
                                                            <div class="item-count-inc cursor-pointer"
                                                                onClick={handleIncrement}
                                                            >+</div>
                                                        </div>
                                                }
                                            </div>
                                        </div>
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

export default IndividualCategories;
