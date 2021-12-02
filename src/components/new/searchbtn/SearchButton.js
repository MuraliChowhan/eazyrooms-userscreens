import React from "react";
import "./searchbtn.css";
import { useHistory } from 'react-router-dom';
function SearchButton() {
    let history = useHistory();
    return (
        <>
            <div className="col-6 offset-3">
                <div className="search-btn"
                    onClick={(e) => {
                        history.push({
                            pathname: `/hotel-details`,
                            state: {
                                data: "details"
                            }
                        })
                    }}
                >
                    Search
                </div>
            </div>
        </>
    );
}

export default SearchButton
