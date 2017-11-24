import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import SelectedArtist from './components/selected_artist';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/selected_artist/:id" component={SelectedArtist} />
    </div>
  </BrowserRouter>
, document.querySelector('.container')
);
