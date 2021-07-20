import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/login.css';

class InputName extends Component {
  render() {
    const { func } = this.props;
    return (
      <label htmlFor="inputName" className="inputName">
        <input
          type="text"
          id="inputName"
          data-testid="input-player-name"
          onChange={ func }
          placeholder="Nome"
          className="inputNeon-blue"
        />
      </label>
    );
  }
}

export default InputName;

InputName.propTypes = {
  func: PropTypes.func,
};

InputName.defaultProps = {
  func: {},
};