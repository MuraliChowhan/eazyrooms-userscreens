import React, { useState, useEffect, useRef } from "react";
import './searchbar.css';
import { searchFilter } from "./SearchFilter";
const SimpleSearchBar = (props) => {

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
            <div className="simple-search-bar col-10 offset-1">
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="border-right rounded simple-search-bar border-0 form-control"
                        style={{ padding: "8px" }}
                        onChange={(e) => handleChange(e, 'location')}
                        onFocus={() => {
                            // if (searchValue) {
                            setVisible(true);
                            // };
                        }}
                    />
                </div>
            </div>
            <div ref={dropdownRef} >
                {visible && (
                    <ul className={`list-unstyled row search-bar-dropdown ${visible ? 'v' : ''}`}>
                        <li>Best Seller</li>
                        {!list && (
                            <li key="zxc" className="dropdown_item">
                                no result
                            </li>
                        )}
                        {list &&
                            searchFilter(searchValue, list).map(x => (
                                <li
                                    key={x.id}
                                    onClick={() => selectItem(x)}
                                    className="col-sm-12 col-md-3 col-lg-3 text-center dropdown_item p-3"
                                >
                                    <div className="item_text1 mb-0"><img src={x.img} width="80px" height="80px" className="rounded" /> </div>
                                    <div className="item_text2 mb-0">{x.name}</div>

                                </li>
                            ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default SimpleSearchBar;