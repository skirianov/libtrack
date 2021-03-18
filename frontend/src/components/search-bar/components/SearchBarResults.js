import React from 'react';

import { GenericChoice } from 'src/shared/types/choices';

import SearchBarResult from './SearchBarResult';

interface SearchBarResultsProps {
  results: Array<GenericChoice>;

  onClickResult(result: GenericChoice): void;
}

// TODO: Add styling to show them directly below
//       the searchbar and above all other components as a dropdown

const SearchBarResults = ({
  results,
  onClickResult,
}) => (
  <ul className="list-unstyled m-2">
    {results.map((result) => (
      <SearchBarResult
        key={result.value}
        result={result}
        onClick={onClickResult}
      />
    ))}
  </ul>
);

export default SearchBarResults;
