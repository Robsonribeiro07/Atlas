import { useFinishedTask } from '@/hooks/use-finished-task';
import React from 'react';
import styled from 'styled-components';

interface Task {
  TaskId: string
  checked: boolean
}
const Checkbox = ({TaskId, checked}: Task) => {
  const {handleFinishedTask} = useFinishedTask()
  

  const handleChange = () => {
    handleFinishedTask({taskId: TaskId})

  }
  return (
    <StyledWrapper>
      <label className="container">
        <input type="checkbox" id={TaskId}  onChange={handleChange} checked={checked}/>
        <div className="checkmark" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Hide the default checkbox */
  .container input {
    display: none;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: relative;
    top: 0;
    left: 0;
    height: 1em;
    width: 1em;
    background-color: #2196f300;
    border-radius: 1000em;
    transition: all 0.25s;
  }

  /* When the checkbox is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #8451e6;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    transform: rotate(0deg);
    border: 0.1em solid black;
    left: 0;
    top: 0;
    width: 1.05em;
    height: 1.05em;
    border-radius: 0.25em;
    transition:
      all 0.25s,
      border-width 0.1s;
    border-color: #8451e6;
  }

  /* Show the checkmark when checked */
  .container input:checked ~ .checkmark:after {
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border-color: #fff0 white white #fff0;
    border-width: 0 0.15em 0.15em 0;
    border-radius: 0em;
    transform: rotate(45deg);
  }`;

export default Checkbox;
