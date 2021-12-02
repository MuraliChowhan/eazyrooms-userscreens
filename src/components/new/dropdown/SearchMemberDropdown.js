import React, { useRef, useState } from "react";
import "./searchdropdown.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { listingType } from "./dropdownVariables";

export default function AreaDropdown() {
    const [active, setActive] = useState('Couple/Pair');
    const [parkingCount, setParkingCount] = useState(0);
    const [isShow, setIsShow] = useState(false);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    // const [islength, setIsLength] = useDetectOutsideClick();
    const onClick = () => setIsActive(!isActive);
    const [checkedState, setCheckedState] = useState(
        new Array(listingType.length).fill(false)
    );

    const dropdownOpt = [
        {
            name: "Couple/Pair",
            roomCount: "1 room, 2 adult"
        },
        {
            name: "Couple",
            roomCount: "2 rooms, 4 adult"
        },
        {
            name: "Family traveller",
            roomCount: "2 rooms, 6 adult"
        },
        {
            name: "Group traveller",
            roomCount: "2 rooms, 2 Childrens"
        },
        {
            name: "Business traveller",
            roomCount: "1 room, 1 adult"
        }
    ]

    var size = Object.keys(active).length;
    const clickDropdownOpt = (item) => {
        setActive(item.name);

        // document.getElementById('listWidth').style.width = "560px";
        // document.getElementById('listWidth').style.transition = "width 1s";
        // document.getElementById('dropdownOpt').style.marginRight = "115px";

        var hideText, i;
        hideText = document.querySelectorAll("#textHide");
        for (i = 0; i < hideText.length; i++) {
            hideText[i].style.display = "none";
        }
        setIsShow(!isShow);
    }

    const handleIncrement = () => {
        setParkingCount(prevCount => prevCount + 1);
    };
    const handleDecrement = () => {
        setParkingCount(prevCount => prevCount - 1);
    };

    return (
        <div className="menu-container " style={{ padding: "4px" }}>
            <div onClick={onClick} className="cursor-pointer filter-button">
                <div className="d-flex justify-content-between align-items-center dropdown-text">
                    <span style={{ marginLeft: "12px", fontSize: "14px", color: "#474444" }}>2 People
                        <div style={{ fontSize: "13px", color: "rgb(136 134 134)" }}>
                            1 room
                        </div>
                    </span>
                    {
                        isActive ? <i className="fas fa-angle-up custom-dropdown-icon" style={{ marginRight: "8px", fontSize: "20px" }}></i> :
                            <i className="fas fa-angle-down custom-dropdown-icon" style={{ marginRight: "8px", fontSize: "20px" }}></i>
                    }
                </div>
            </div>
            <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
            >
                <div>
                    <ul id="listWidth" className="toppings-list border">
                        {
                            dropdownOpt.map((item, index) =>
                                <li
                                    id="dropdownOpt"
                                    onClick={() => clickDropdownOpt(item)}
                                    key={index}
                                    className={active === item.name ?
                                        "activeClass border dropdown-item cursor-pointer p-3 mb-0 d-flex justify-content-between"
                                        :
                                        "mb-0 p-3 border cursor-pointer inactiveClass d-flex justify-content-between"}
                                >
                                    <div className="d-flex w-100 justify-content-between" style={{ width: "200px" }}>
                                        <div> {item.name}</div>
                                        <div style={{ fontSize: "13px" }}>
                                            {
                                                size > 0 ? <div id="dropdownOpt"> {item.roomCount} </div> : <div>23232323</div>
                                            }
                                        </div>
                                    </div>

                                    {/* {
                                        isShow ?
                                            <div className="d-flex justify-content-between align-items-center btn-increment-decrement">
                                                <div className="bid-minus cursor-pointer"
                                                    onClick={handleDecrement}
                                                >-</div>
                                                <div className="bid-money mt-1 cursor-pointer">
                                                    {
                                                        parkingCount === 0 ? <span style={{ fontSize: "12px" }}>2 Room</span> : parkingCount
                                                    }
                                                </div>
                                                <div className="bid-plus cursor-pointer"
                                                    onClick={handleIncrement}
                                                >+</div>
                                            </div>
                                            :
                                            null
                                    } */}

                                </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div >
    );
}
