import React from "react";
function Searchbar() {
    return (
        <>
            <div class="input-group custom-search mb-3">
                <input type="text" class="p-2 shadow-lg form-control border-0" placeholder="Search" />
                <span class="input-group-text px-4 bg-secondary border-0" id="basic-addon1">
                    <i class="fas fa-search text-white"></i>
                </span>
            </div>
        </>
    );
}

export default Searchbar;


