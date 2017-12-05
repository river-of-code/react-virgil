import React from 'react';
import { Machine } from 'xstate';

export class FiniteMachine extends React.Component {
  machine = Machine(this.props.chart)

  state = {
    machineState: this.machine.getInitialState(),
  }

  transition = (actionType) => {
    const machineState = this.state.machineState;

    const nextState = this.machine.transition(machineState, actionType).toString();

    this.setState({
      machineState: nextState
    })
  }

  render() {
    const availableTransistions = Object.keys(this.props.chart.states[this.state.machineState].on)
    return this.props.children(this.state.machineState, this.transition, availableTransistions);
  }
}

export const Match = ({when, currentState, children}) => (
  when === currentState ? children : null
);
