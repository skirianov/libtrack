import React, { useCallback, useState } from 'react';

import SearchBarResults from 'src/components/search-bar/components/SearchBarResults';
import filterVisibleResults from 'src/components/search-bar/SearchBar.helpers';

const SearchBar = ({
  initialQuery = '',
  searchResults,
  onQueryChange,
  onClickResult,
}) => {
  const [query, setQuery] = useState(initialQuery);

  const shouldRenderResults = !!query;
  const visibleResults = filterVisibleResults(searchResults, query);

  const handleChangeQuery = useCallback(
    (event) => {
      const newQuery = event.currentTarget.value;
      setQuery(newQuery);
      onQueryChange(newQuery);
    }, [onQueryChange],
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={handleChangeQuery}
      />
      {
        shouldRenderResults
        && <SearchBarResults results={visibleResults} onClickResult={onClickResult} />
      }
    </form>
  );
};

export default SearchBar;
