import React, { useState } from "react";
import Header from "../../Header/Header";
import './selectedproducts.css';
import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function ChoosedProducts(props) {
    let history = useHistory();
    const [parkingCount, setParkingCount] = useState(0);
    const [addtoCart, setAddToCart] = useState(false);
    const handleIncrement = () => {
        setParkingCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setParkingCount(prevCount => prevCount - 1);
    };

    const addToCart = () => {
        setAddToCart(true);
    }

    const similarItems = [
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
        }
    ]

    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="d-flex justify-content-end">
                                <div className="categories-discount">30% 0FF</div>
                            </div>
                            {/* <img src="./item.jpg" className="rounded" /> */}
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block rounded w-100"
                                        src="./item.jpg"
                                        alt="First slide"
                                    />
                                    {/* <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block rounded w-100"
                                        src="./3.jpg"
                                        alt="Second slide"
                                    />
                                    {/* <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block rounded w-100"
                                        src="./item.jpg"
                                        alt="Third slide"
                                    />
                                    {/* <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption> */}
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8">
                        <p style={{ fontSize: "18px", fontWeight: "600" }}>Lehenga choli</p>
                        <p className="product-desc"> Tina Voguish Elegant Georegette Embroidered Lehengas Vol 1 Fabric: Lehenga - Georegette ,
                            Choli - Georegette, Dupatta - Art Silk Size: Lehenga ( Waist Size ) - Up To 40 in, Choli - 1 Mtr,
                            Dupatta - 2.3 Mtr Flair - 3.5 Mtr Length: Lehenga - Up To 40 in Type: Lehenga - Semi - Stitched,
                            Choli - Un - Sttiched Description: It Has 1 Piece Of Lehanga, 1 Piece Of Choli And 1 Piece Of Dupatta
                            Work : Lehenga - Embroidery, Choli - Embroidery, Dupatta - Lace Work
                        </p>
                        <p className="product-pieces">
                            Per piece
                        </p>
                        <p className="d-flex align-items-center">
                            <span className="selected-product-cost">&#8377; 500</span>
                            <span className="selected-cost-delete ml-3"> <del>&#8377; 600</del></span>
                        </p>

                        <div className="d-flex">
                            {
                                addtoCart ?
                                    <div className="col-sm-12 col-md-12 d-flex justify-content-between align-items-center add-to-cart-btn">
                                        <div className="minus cursor-pointer"
                                            onClick={handleDecrement}
                                        >-</div>
                                        <div className="product-initial-count px-2 cursor-pointer">
                                            {
                                                parkingCount < 0 ? 0 : parkingCount
                                            }
                                        </div>
                                        <div className="plus cursor-pointer"
                                            onClick={handleIncrement}
                                        >+</div>
                                    </div>
                                    :
                                    <button
                                        className="add-to-cart-btn btn"
                                        onClick={addToCart}
                                    >Add to cart</button>
                            }

                            <button className="buy-now-btn btn" style={{ marginLeft: "20px" }}
                                onClick={() => history.push({
                                    pathname: `/bag`
                                })}
                            >Buy now</button>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="similar-products">SIMILAR PRODUCTS</div>
                    <div className="view-all-products"
                        onClick={() => history.push({
                            pathname: `/categories-list`
                        })}
                    >View All <i className="fas fa-chevron-circle-right"></i></div>
                </div>

                <div className="row">
                    {
                        similarItems.map((item, index) =>
                            <div key={index} className="col-sm-12 col-md-3 col-lg-3 mb-3 categories-zoom">
                                <div className="card onHoverItems">
                                    <div className="d-flex justify-content-end">
                                        <div className="categories-discount">30% 0FF</div>
                                    </div>
                                    <img src={item.img} className="card-img" alt="img"
                                        onClick={() => history.push({
                                            pathname: `/choosedproduct`
                                        })}
                                    />
                                    <div className="card-body">
                                        <p className="mb-0 item-name-text">{item.name}</p>
                                        <p className="mb-0 total-piece-text">Per piece</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center">
                                                <span className="item-cost-text">₹ 900</span>
                                                <span className="deleted-cost-text ml-3"> <del>₹ 600</del></span>
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

export default ChoosedProducts;
