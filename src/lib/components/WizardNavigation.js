// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Step from './WizardNavigation/Step';

// Stylesheets
import style from './WizardNavigation.module.scss';

class WizardNavigation extends Component {
  renderSteps(steps, activeStepId) {
    const hasSteps = steps && Object.keys(steps).length;
    return hasSteps
      ? Object.keys(steps).map((stepKey, stepIndex) => {
        const step = steps[stepKey];
        return <Step step={step} activeStepId={activeStepId} index={stepIndex} key={stepKey} />;
      })
      : '';
  }
  render() {
    return (<div className={style.wizardTopnav}>
      {this.renderSteps(this.props.steps, this.props.activeStepId)}
    </div>)
  }
}

WizardNavigation.propTypes = {
  steps: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    finished: PropTypes.bool,
    hasErrors: PropTypes.bool
  }).isRequired,
  activeStepId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};

export default WizardNavigation;
