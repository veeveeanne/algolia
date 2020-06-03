import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('I3JU913ICM', '7bbc002b560942a366ca70ee403919d8');

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          TED Talks
        </h1>
        <p className="header-subtitle">
          Look for the next talk to inspire you
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="talks">
          <div className="search-panel">
            <div className="search-panel__filters">
              <RefinementList attribute="tags" />
            </div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

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

function Hit(props) {
  return (
    <div>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="hit-name cell small-4">
            <Highlight attribute="name" hit={props.hit} />
          </div>
          <div className="hit-speakers cell small-4">
            <Highlight attribute="speakers" hit={props.hit} />
          </div>
          <div className="hit-description cell small-4">{props.hit.description}</div>
        </div>
      </div>
    </div>



  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
