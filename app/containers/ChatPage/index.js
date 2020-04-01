import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Content from './Content';
import Navigation from './Navigation';

function ChatPage({ className }) {
  return (
    <div className={className}>
      <Navigation />
      <Content />
    </div>
  );
}

ChatPage.propTypes = {
  className: PropTypes.string,
};

export default styled(ChatPage)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
