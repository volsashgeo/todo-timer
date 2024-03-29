import React from 'react';

import './timer.css';

export default class Timer extends React.Component {
  state = { date: null };

  onPauseTimer = () => {
    clearInterval(this.timerID);
  };

  onPlayTimer = () => {
    this.timerID = setInterval(() => this.tick(), 1000);
  };

  tick() {
    this.setState(({ date }) => ({
      date: date + 1,
    }));
  }

  render() {
    const { date } = this.state;

    const mins = Math.floor(date / 60);
    const secs = date - mins * 60;
    const timer = `${mins} : ${secs}`;

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onPlayTimer}></button>
        <button className="icon icon-pause" onClick={this.onPauseTimer}></button>
        <span className="timer">{timer}</span>
      </span>
    );
  }
}
