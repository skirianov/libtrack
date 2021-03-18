import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Trash = ({
  className = 'btn btn-light',
}) => (
  <div className="option-elem">
    <button type="button" className={className}>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  </div>
);

export default Trash;
