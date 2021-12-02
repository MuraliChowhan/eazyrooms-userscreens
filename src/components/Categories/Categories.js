import React, { useState } from "react";
import Header from "../Header/Header";
import { useHistory } from 'react-router-dom';
import './categories.css';
import IndividualCategories from "./IndividualCategories";

function Categories() {
    let history = useHistory();
    const [bagCount, setBagCount] = useState(0);
    const sidebarItems = [
        {
            name: "Mens wear",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200"
        },
        {
            name: "Jewellery",
            heading: "Sweet corns",
            img: "./3.jpg",
            cost: "200"
        },
        {
            name: "Womens Wear",
            heading: "Sweet corns",
            img: "./3.jpg",
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
            img: "./3.jpg",
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

    const handleIncrement = () => {
        setBagCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setBagCount(prevCount => prevCount - 1);
    };
    return (
        <>
            <Header bagCount={bagCount} />
            <div className="container mt-3">
                <p className="mb-3 items-heading">All Categories</p>
                <div className="row">
                    {
                        sidebarItems.map((item, index) =>
                            <div key={index} className="col-sm-12 col-md-2 col-lg-2 mb-4 categories-zoom"
                            // onClick={() => history.push({
                            //     pathname: `/categories-list`
                            // })}
                            >
                                <div className="card bg-dark text-white">
                                    <a href="#section1">
                                        <img src={item.img} className="card-img" alt="img" />
                                        <div className="card-img-overlay" style={{ marginTop: "65%", }}>
                                            <p className="text-center category-name text-white">{item.name}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div id="section1">
                    <p className="mb-3 items-heading">Jeans</p>
                    <IndividualCategories
                        bagCount={bagCount}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                    />
                </div>
            </div>
        </>
    );
}

export default Categories;
