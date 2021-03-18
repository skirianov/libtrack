import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Edit = ({
  className = 'btn btn-light',

}) => (
  <div className="option-elem">
    <button type="button" className={`${className}`}>
      <FontAwesomeIcon icon={faBars} />
    </button>
  </div>
);

export default Edit;
