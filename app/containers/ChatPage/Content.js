import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Content({ className }) {
  return <div className={className} />;
}

Content.propTypes = {
  className: PropTypes.string,
};

export default styled(Content)`
  flex: 1 1 auto;
  height: 100%;
`;
