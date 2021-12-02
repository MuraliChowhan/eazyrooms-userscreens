import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import ProductItemsDetails from "./ProductItemDetails";
import ProjectLogo from "./ProjectLogo";
import ManageProfile from "../settings/ManageProfile";
import MultiSelectFormHeader from "./MultiSelectForm";
import SimpleSearchBar from "./searchbar/SimpleSearchBar";
import Header from "../Header/Header";
import { useHistory } from 'react-router-dom';
import ClearBagModal from "./Modals/ClearBgaModal";

function Products() {
    let history = useHistory();
    const [activeStep, setActiveStep] = useState();
    const [serviceType, setServiceType] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [itemCost, setItemCost] = useState(0);
    const [productData, setProductData] = useState('Mens wear');
    const [serviceData, setServiceData] = useState(0);
    const [parkingCount, setParkingCount] = useState(0);

    const [clearBagModal, setClearBagModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    const sidebarItems = [
        {
            name: "Mens wear",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200",
            productList: [
                {
                    producName: "Stuffed face kid's pillow 121212",
                    logo: "./3.jpg",
                    cost: "500"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./2.jpg",
                    cost: "900"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./4.jpg",
                    cost: "900"
                }
            ]
        },
        {
            name: "Jewellery",
            heading: "Sweet corns",
            img: "./1.jpg",
            cost: "200",
            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "600"
                }
            ]
        },
        {
            name: "Womens Wear",
            heading: "Sweet corns",
            img: "./2.jpg",
            cost: "660",
            productList: [
                {
                    producName: "Stuffed face kid's",
                    logo: "./1.jpg",
                    cost: "500"
                }
            ]
        },
        {
            name: "Jents wear",
            heading: "Chicken Biryani",
            img: "./3.jpg",
            cost: "800",
            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "4500"
                }
            ]
        },
        {
            name: "Lehanga choli seats",
            heading: "Egg fired rice",
            img: "./4.jpg",
            cost: "200",
            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "5040"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },

            ]
        },
        {
            name: "Shoes",
            heading: "Mutton Biryani",
            img: "./item.jpg",
            cost: "200",

            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "500"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
            ]
        },
        {
            name: "Shorts",
            heading: "Sweet corns",
            img: "./item.jpg",
            cost: "200",
            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "500"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
                {
                    producName: "stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
            ]
        },
        {
            name: "Lungis",
            heading: "Fish Fry",
            img: "./item.jpg",
            cost: "200",
            productList: [
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./1.jpg",
                    cost: "500"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
                {
                    producName: "Stuffed face kid's pillow",
                    logo: "./item.jpg",
                    cost: "540"
                },
            ]
        }

    ]

    const handleIncrement = () => {
        setParkingCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setParkingCount(prevCount => prevCount - 1);
    };

    const onClickService = (item) => {
        setServiceType(item.type);
        setServiceData(item);
        setActiveStep(item.name);
    }

    const sidebarClick = (item) => {
        setProductData(item)
        setActiveStep(item.name);
        sidebarItems.map((item) => {
            if (item.name === activeStep)
                setFilteredData([item])
        }
        )
    }

    const bookNow = (item) => {

        setItemCost(item)
    }

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3 px-0">
                        <SidebarItems
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            sidebarClick={sidebarClick}
                            onClickService={onClickService}
                            sidebarItems={sidebarItems}
                            setServiceType={setServiceType}
                        />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 border-left border-right">
                        <ProductItemsDetails
                            bookNow={bookNow}
                            filteredData={filteredData}
                            sidebarItems={sidebarItems}
                            productData={productData.productList}
                            serviceType={serviceType}
                            serviceData={serviceData.productList}
                        />
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                            <div className="pt-3 d-flex justify-content-between align-items-center border-bottom mb-3 pb-2">
                                <div style={{ marginTop: "10px", fontSize: "20px", lineHeight: "32px", fontWeight: 500 }}>
                                    Bag
                                    <span className="custom-badge" style={{ marginLeft: "2px" }}>4</span>
                                </div>
                                <div className="cursor-pointer" style={{ fontSize: "15px", lineHeight: "14px", fontWeight: "500" }}
                                    onClick={() => setClearBagModal({ modal: true, action: 'Edit', details: '' })}

                                >Clear bag</div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-sm-12 col-md-6 col-lg-6 subTotal">
                                    <div className="itemPrice mb-2"> &#8377; {itemCost} </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 subTotal">

                                    <div className="col-sm-12 col-md-12 d-flex justify-content-between align-items-center bid-plus-minus">
                                        <div className="bid-minus cursor-pointer"
                                            onClick={handleDecrement}
                                        >-</div>
                                        <div className="bid-money mt-1 cursor-pointer">
                                            {
                                                parkingCount === 0 ? 0 : parkingCount
                                            }
                                        </div>
                                        <div className="bid-plus cursor-pointer"
                                            onClick={handleIncrement}
                                        >+</div>
                                    </div>

                                </div>
                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div className="subTotal">
                                    Sub total
                                </div>
                                <div className="subTotal">
                                    &#8377;	 300
                                </div>

                            </div>

                            <div className="d-flex justify-content-between mb-4">
                                <div className="subTotal">
                                    21/09/2021
                                </div>
                                <div className="subTotal">
                                    24/09/2021
                                </div>

                            </div>

                            <div className="custom-btn"
                                onClick={() => history.push({
                                    pathname: `/bag`
                                })}
                            >
                                Proceed to check
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ClearBagModal
                show={clearBagModal.modal}
                onHide={() => setClearBagModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
                params={clearBagModal}
            />
        </>
    );
}

export default Products;
