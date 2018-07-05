import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/components/dropdown.scss';

const Dropdown = ({items, placeholder, onSelect}) => {
  return (
    <select onChange={(evt)=>onSelect(evt.target.value)} className="dropdown">
      <option value="" disabled hidden>{placeholder}</option>
      {items.map((item, i) =>
        <option key={i} value={item.value}>{item.text}</option>
      )}
    </select>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default Dropdown;
