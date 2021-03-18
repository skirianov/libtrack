import React, { useCallback } from 'react';

const SearchBarResult = ({
  result,
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick(result);
  }, [result, onClick]);

  return (
    <li
      onClick={handleClick}
      onKeyPress={handleClick}
      role="presentation"
    >
      {result.label}
    </li>
  );
};

export default SearchBarResult;
