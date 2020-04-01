/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import ChatPage from '../ChatPage';

function App({ className }) {
  return (
    <div className={className}>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string,
};

export default styled(App)`
  width: 100%;
  height: 100%;
`;
