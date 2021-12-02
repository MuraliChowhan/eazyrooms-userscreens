import React, { useState } from 'react';

function DropdownIcon() {
    const [hidden, setHidden] = useState({});

    const toggleHide = index => {
        setHidden({ ...hidden, [index]: !hidden[index] });
    };

    return {
        toggleHide,
        hidden
    };
}

export default DropdownIcon;