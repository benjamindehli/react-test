// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Stylesheets
import style from './Step.module.scss';

class Step extends Component {
  getActiveClass() {
    return this.props.activeStepId === this.props.step.id ? style.active : '';
  }

  getFinishedClass() {
    return this.props.step.finished ? style.finished : '';
  }

  getErrorClass() {
    return this.props.step.hasErrors ? style.hasErrors : '';
  }

  render() {
    const step = this.props.step;
    return step.link && Object.keys(step.link).length
      ? (<Link to={step.link} className={`${style.wizardTopnavItem} ${this.getActiveClass()} ${this.getFinishedClass()} ${this.getErrorClass()}`}>
        <span className={style.wizardTopnavItemContent}>
          <span className={style.stepNumber}>{this.props.index + 1}</span>
          <span className={style.stepName}>{this.props.step.name}</span>
        </span>
      </Link>)
      : (<div className={`${style.wizardTopnavItem} ${this.getActiveClass()} ${this.getFinishedClass()} ${this.getErrorClass()}`}>
        <span className={style.wizardTopnavItemContent}>
          <span className={style.stepNumber}>{this.props.index + 1}</span>
          <span className={style.stepName}>{this.props.step.name}</span>
        </span>
      </div>)
  }
}

Step.propTypes = {
  step: PropTypes.object.isRequired,
  activeStepId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  index: PropTypes.number.isRequired
};



export default Step;
