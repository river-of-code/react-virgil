import React, { Component } from 'react';
import { FiniteMachine, Match } from './FiniteMachine';

const Virgil = (stateChart, componentStateMap) => {
  return (<FiniteMachine chart={stateChart}>
  {(currentState, transition, availableTransistions) => {
    return (<div>
    {Object.keys(componentStateMap).map((stateName) => {
      const componentData = componentStateMap[stateName]
      return (
        <Match when={stateName} currentState={currentState}>
          {
            React.createElement(
              componentData.component,
              {
                ...componentData.props,
                ...componentData.transitions(transition),
                availableTransitions: availableTransistions
              }
            )
          }
        </Match>
      );
    })}
    </div>)
  }}
  </FiniteMachine>)
}

export default Virgil;
