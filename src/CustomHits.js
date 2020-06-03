import React from 'react'
import { Highlight, connectHits } from 'react-instantsearch-dom';

const Hits = ({ hits }) => (
  <div className="grid-container">
    <div className="grid-x grid-margin-x">

        {hits.map(hit => (
          <div key={hit.name} className="callout">
            <div className="hit-name">
              <Highlight attribute="name" hit={hit} />
            </div>
            <div className="hit-speakers">
              <span className="header-name">Speakers: </span>
              <Highlight attribute="speakers" hit={hit} />
            </div>
            <div className="hit-description"><span className="header-name">Description: </span>{hit.description}</div>
          </div>
        ))}
        
    </div>
  </div>

);

const CustomHits = connectHits(Hits);

export default CustomHits
