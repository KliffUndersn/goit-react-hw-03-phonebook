import React from "react";
import { Component } from "react";

import RenderButtons from "./RenderButtons/RenderButtons";
import Statistic from "./RenderStatistic/RenderStatistic";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (value) => {
    this.setState({
      [value]: this.state[value] + 1,
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.ceil((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h1>Please Leave feedback</h1>
        <RenderButtons clickHandler={this.onClick} />
        <h2>Statistics</h2>

        {this.countPositiveFeedbackPercentage() ? (
          <Statistic
            value={this.state}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}
