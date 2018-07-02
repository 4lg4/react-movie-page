import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/components/dropdown.scss';

const Dropdown = ({items}) => {
  console.log(items);
  return (
    <select>
      {items.map((item, i) =>
        <option key={i} value={item.value}>{item.text}</option>
      )}
    </select>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Dropdown;
