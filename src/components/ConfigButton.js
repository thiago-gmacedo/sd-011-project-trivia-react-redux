import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ConfigButton extends Component {
  render() {
    return (
      <Link to="/settings">
        <button
          className="configuration-button"
          data-testid="btn-settings"
          type="button"
        >
          Configurações
        </button>
      </Link>
    );
  }
}

export default ConfigButton;