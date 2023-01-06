import styled from "styled-components";

export const TaskWrapper = styled.div`
  background-color: white;
  height: 40px;
  padding: 1.2em 1em;
  font-size: 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid grey;
  border-radius: 0.25rem;
  color: ${(props) => (props.done ? "grey" : "black")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

export const TaskButton = styled.div`
  button {
    background-color: white;
    color: black;
    margin: 5px;
    padding: 5px 8px;
    height: 35px;
    width: 70px;
    font-size: 1.2em;
    border: none;
    cursor: pointer;
  }
  .done {
    color: green;
  }
  .delete {
    color: red;
  }

  .done:hover {
    border: 2px solid green;
  }

  .delete:hover {
    border: 2px solid red;
  }
`;

export const TaskName = styled.div`
  cursor: pointer;
  input {
    text-align: center;
    font-family: "Merriweather", serif;
    flex-basis: 80px;

    padding: 3px 5px;
    border: 2px solid grey;
    box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
    font-size: 1.05em;
    border-radius: 12px;
    color: Black;
  }
`;
