import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  RefinementList,
  ClearRefinements,
  CurrentRefinements,
  Pagination,
  HitsPerPage
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

import CustomHits from './CustomHits'

const searchClient = algoliasearch('I3JU913ICM', '7bbc002b560942a366ca70ee403919d8');

function App() {
  return (
    <div>
      <header className="header">
        <h1>
          TED Talks
        </h1>
        <p className="header-subtitle">
          Look for ideas worth spreading - Powered by Algolia
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="talks">
          <div className="search-panel">
            <div className="search-panel__filters">
              <span className="header-name">Filters: </span>
            <CurrentRefinements />
            <RefinementList
                attribute="tags"
                operator="and"
                showMore={true}
              />
            <ClearRefinements />
            </div>

            <div className="search-panel__results">
              Search for the next talk that will inspire you:
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />

              <HitsPerPage
                defaultRefinement={5}
                items={[
                  { value: 5, label: 'Show 5 results'},
                  { value: 10, label: 'Show 10 results'},
                  { value: 25, label: 'Show 25 results'}
                ]}
              />

              <CustomHits />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

export default App;
