import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function TodoCheck(props) {

  const status = props.status;
  if (status) {
    return <FontAwesomeIcon icon={faCheckCircle} />;
  }
  return <FontAwesomeIcon icon={faCircle} />;
};

TodoCheck.propTypes = {
  status: PropTypes.bool.isRequired
};

export default TodoCheck;