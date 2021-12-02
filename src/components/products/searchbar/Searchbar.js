import React, { useState, useEffect, useRef } from "react";
import IndexDatePicker from "../datepicker";
import SearchMemberDropdown from "../dropdown/SearchMemberDropdown";
import SearchButton from "../searchbtn/SearchButton";
import './searchbar.css';
import { searchFilter } from "./SearchFilter";
const SearchBar = (props) => {

    const list = [
        { id: 1, name: 'Tom', type: 'Cat', img: "./item.jpg", category: "restaurant" },
        { id: 2, name: 'Zeus', type: 'Labrador', img: "./item.jpg", category: "restaurant" },
        { id: 3, name: 'Jax', type: 'Malamute', img: "./item.jpg", category: "restaurant" },
        { id: 4, name: 'Seb', type: 'Developer', img: "./item.jpg", category: "restaurant" },
        { id: 5, name: 'MacBook', type: 'Notebook', img: "./item.jpg", category: "restaurant" },
    ];

    const [visible, setVisible] = useState(false);
    const [visibleCategory, setCateogryVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchCategory, setCategoryValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [itemName, setItemName] = useState(null);
    const dropdownRef = useRef(null);

    // click away listener
    useEffect(() => {
        document.addEventListener('mousedown', handleClick, false);
        return () => document.removeEventListener('mousedown', handleClick, false);
    }, []);

    const handleClick = e => {
        if (dropdownRef.current.contains(e.target)) {
            return;
        }
        setVisible(false);
        setCateogryVisible(false);
    };


    const handleChangeCategory = (e, name) => {
        setCategoryValue(e.target.value);

        if (!visibleCategory) {
            setCateogryVisible(true);
        }
    };

    const selectItemCategory = item => {
        setCategoryValue(item.img);
        setSelectedItem(item.id);
        setItemName(item)
        setCateogryVisible(false);
    };

    const handleChange = (e, name) => {
        setSearchValue(e.target.value);
        if (name === 'location') {

        }
        if (!visible) {
            setVisible(true);
        }
    };

    const selectItem = item => {
        setSearchValue(item.name);
        setSelectedItem(item.id);
        setVisible(false);
    };

    
    return (
        <>
            <div className="container border search-bar-container" style={{ backgroundColor: "#f3f8fb", padding: "25px 40px 188px 0px" }}>
                <div className="col-sm-12 col-md-8 col-lg-8 offset-md-2">
                    <div className="search-bar mb-3 w-100">
                        <div className="search-bar-item w-100">
                            <div className="d-flex col-7 justify-content-between">
                                <label style={{ fontSize: "14px", fontWeight: "500" }}>Location</label>
                                <label style={{ fontSize: "14px", fontWeight: "500", marginLeft: "20px" }}>Category</label>
                            </div>

                            <div className="input-group row">
                                <input type="text" placeholder="Enter your location" className="border-right col-sm-12 col-md-6 col-mlg-6 border-0 form-control"
                                    onChange={(e) => handleChange(e, 'location')}
                                    onFocus={() => {
                                        // if (searchValue) {
                                        setVisible(true);
                                        // };
                                    }}
                                />

                                <div className="col-sm-12 col-md-6">
                                    <div className="input-group search-icon">
                                        <input type="text" placeholder="Select your category"
                                            onChange={(e) => handleChangeCategory(e, 'category')}
                                            onFocus={() => {
                                                // if (searchValue) {
                                                setCateogryVisible(true);
                                                // };
                                            }}
                                            className="border-0 form-control"
                                        />
                                        {/* <span className="input-group-text border-0 bg-transparent" id="basic-addon2">
                                            <i className="fas fa-search text-white"></i>
                                        </span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row search-bar mb-3 w-100" style={{ marginLeft: "0px" }}>
                        <div className="col-sm-12">
                            <IndexDatePicker />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <div className="row search-bar mb-3 w-100" style={{ marginLeft: "0px" }}>
                                <SearchMemberDropdown />
                            </div>
                        </div>
                    </div>

                    <SearchButton />

                    <div ref={dropdownRef} className={`dropdown ${visible ? 'v' : ''}`}>
                        {visible && (
                            <ul className="list-unstyled">
                                {!list && (
                                    <li key="zxc" className="dropdown_item">
                                        no result
                                    </li>
                                )}
                                {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
                                {list &&
                                    searchFilter(searchValue, list).map(x => (
                                        <li
                                            key={x.id}
                                            onClick={() => selectItem(x)}
                                            className="dropdown_item border-bottom p-3"
                                        >
                                            <div className="item_text1 mb-0"><i className="fas fa-map-marker-alt"></i> {x.name}</div>
                                            <div className="item_text2 mb-0">{x.type}</div>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                    <div ref={dropdownRef} className={`dropdown2 ${visible ? 'v' : ''}`}>
                        {visibleCategory && (
                            <ul className="list-unstyled">
                                {!list && (
                                    <li key="zxc" className="dropdown_item">
                                        no result
                                    </li>
                                )}
                                {/* you can remove the searchFilter if you get results from Filtered API like Google search */}
                                {list &&
                                    searchFilter(searchCategory, list).map(x => (
                                        <li
                                            key={x.id}
                                            onClick={() => selectItemCategory(x)}
                                            className="d-flex dropdown_item border-bottom p-3"
                                        >
                                            <div className="item_text1 mb-0">
                                                <img src={x.img} className="rounded" width="40px" height="40px" />
                                            </div>
                                            <div className="item_text2 mb-0" style={{ fontSize: "15px", fontWeight: "500", textTransform: "capitalize" }}>{x.category}</div>
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>

    );
};

export default SearchBar;