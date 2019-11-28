import React from 'react';

const SimpleDropdown = () => {
    return (
        <label>Status:{" "}
        <select>
            <option>Cooking</option>
            <option>Processing</option>
            <option>Ready for Pickup</option>
        </select>
        </label>
    );
}
 
export default SimpleDropdown;