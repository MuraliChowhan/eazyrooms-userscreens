import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import ListItemsDetails from "./ListDetails";
import ProjectLogo from "../Multistep-components/ProjectLogo";
import ManageProfile from "../../settings/ManageProfile";
import MultiSelectFormHeader from "../MultiSelectForm";
import SimpleSearchBar from "../searchbar/SimpleSearchBar";
function Index() {
    const [activeStep, setActiveStep] = useState('Soup');
    const [filteredData, setFilteredData] = useState([]);
    const [itemCost, setItemCost] = useState(0)

    const sidebarItems = [
        {
            name: "Soup",
            heading: "Sweet corns",
            img: "./hotel2.jpg",
            cost: "200"
        },
        {
            name: "Tomato Soup",
            heading: "Sweet corns",
            img: "./hotel3.jpg",
            cost: "100"
        },
        {
            name: "Dal Soup",
            heading: "Sweet corns",
            img: "./hotel4.jpg",
            cost: "130"
        },
        {
            name: "Chicken",
            heading: "Chicken Biryani",
            img: "./hotel5.jpg",
            cost: "160"
        },
        {
            name: "Chinese",
            heading: "Egg fired rice",
            img: "./hotel6.jpg",
            cost: "600"
        },
        {
            name: "Biryani",
            heading: "Mutton Biryani",
            img: "./hotel5.jpg",
            cost: "200"
        },
        {
            name: "Chieckn Biryani",
            heading: "Sweet corns",
            img: "./hotel6.jpg",
            cost: "200"
        },
        {
            name: "Biverages",
            heading: "Fish Fry",
            img: "./hotel7.jpg",
            cost: "200"
        }

    ]

    const [parkingCount, setParkingCount] = useState(0);
    const handleIncrement = () => {
        setParkingCount(prevCount => prevCount + 1);

    };
    const handleDecrement = () => {
        setParkingCount(prevCount => prevCount - 1);
    };

    const sidebarClick = (item) => {
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
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-2 col-lg-2 px-0">
                        <SidebarItems
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            sidebarClick={sidebarClick}
                        />
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7 border">
                        <ListItemsDetails
                            bookNow={bookNow}
                            filteredData={filteredData}
                            sidebarItems={sidebarItems}
                        />
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 border-top">
                        <div style={{ marginLeft: "15px", marginRight: "15px" }}>
                            <div className="pt-3 d-flex justify-content-between align-items-center border-bottom mb-3 pb-2">
                                <div style={{ marginTop: "10px", fontSize: "20px", lineHeight: "32px", fontWeight: 500 }}>
                                    Bag
                                    <span className="custom-badge" style={{ marginLeft: "2px" }}>4</span>
                                </div>
                                <div style={{ fontSize: "14px", lineHeight: "14px", fontWeight: "500" }}>Clear bag</div>
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

                            <div className="custom-btn">
                                Proceed to check
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
