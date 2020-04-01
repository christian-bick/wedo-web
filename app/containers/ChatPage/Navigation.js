import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Navigation({ className }) {
  return <div className={className} />;
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default styled(Navigation)`
  flex: 0 0 200px;
  background-color: grey;
  height: 100%;
`;
