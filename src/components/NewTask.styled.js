import styled from "styled-components";

export const TaskInput = styled.input`
  display: block;
  text-align: center;
  font-family: "Merriweather", serif;
  flex-basis: 400px;

  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 1.05em;
  border-radius: 12px;
  color: Black;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  button {
    color: #fff;
    background-color: green;

    padding: 10px 30px;
    font-size: 1.05em;
    border: none;
    outline: none;

    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }

  button.clear {
    margin-left: 2em;
    background-image: none;
    background-color: darkorange;
  }
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  column-gap: 2em;
`;
