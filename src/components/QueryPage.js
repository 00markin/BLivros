import React from 'react';
import Query from '../containers/Query';
import logo from '../images/logo.png'

const QueryPage = () => (
  <div className="query-page">
    <h1>
      Digite na busca o nome do livro ou autor
    </h1>
    <i className="fas fa-search" />
    <Query />
    <div className="symbols">
      <i className="fas fa-book" />
      <i className="fas fa-user-friends" />
    </div>
    <h2 className="mt-4 ml-3">
      Powered by
      <a href="https://instagram.com/markv.lab" target="_blank" rel="noreferrer">
         <img alt="MarkV.lab logo" className="d-block" src= { logo } width ="125px" height ="125px" />
      </a>
    </h2>
    <h2>
      Created by
      <p>
        <a href="https://instagram.com/mvmarcus" target="_blank" rel="noreferrer">
          Marcus Mello
        </a>
      </p>
    </h2>
  </div>
);

export default QueryPage;
