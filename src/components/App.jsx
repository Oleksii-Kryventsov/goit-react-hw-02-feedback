import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Section } from './Section';
import { Statistics } from './Statistics';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


updateStatistic = option => {
  this.setState(prevState => ({ [option]: prevState[option] + 1 }))
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
}

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const totalFeedback = this.countTotalFeedback;
  return good ? Math.round((good / totalFeedback) * 100) : 0;
};

render() {
  const options = Object.keys(this.state);
  const { good, neutral, bad } = this.state;
  return (
    <div>
      <Section title="Please leave feedback">
      <FeedbackOptions options={options} updateStatistic={this.updateStatistic} />
      <Section title="Statistics">
            {this.countTotalFeadback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                totalFeedback={this.countTotalFeadback}
                positivePercentage={this.countPositiveFeedbackPercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
          )}
          </Section>
        </Section>
  </div>
  )
};
};     // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    