import styled from "styled-components";

export const TaskInfoWrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 1em;

  button {
    color: #fff;
    background-color: #2c3e50;

    padding: 10px 30px;
    font-size: 1.05em;

    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const RadioInputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  margin: 20px 0;
  font-size: 1.3em;
  div {
    margin: 0 15px;
  }

  label {
    color: #2c3e50;
    padding: 0.5em;
  }

  input {
  }
`;
