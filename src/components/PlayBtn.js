import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../pages/login.css';

class PlayBtn extends Component {
  render() {
    const { func } = this.props;
    return (
      <button
        type="button"
        data-testid="btn-play"
        id="play-btn"
        onClick={ func }
        className="btn-neon-red"
      >
        Jogar
      </button>
    );
  }
}

export default PlayBtn;

PlayBtn.propTypes = {
  func: PropTypes.func,
};

PlayBtn.defaultProps = {
  func: {},
};