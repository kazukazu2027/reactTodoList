import "./App.css";
import React, { useState } from "react";
import AddArea from "./components/AddArea";
import IncompleteArea from "./components/IncompleteArea";
import CompleteArea from "./components/CompleteArea";
import styled from "styled-components";

function App() {
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    const incompleteText = [...incompleteTodo, todoText];
    setIncompleteTodo(incompleteText);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newIncomplete = [...incompleteTodo];
    newIncomplete.splice(index, 1);
    setIncompleteTodo(newIncomplete);
  };

  const onClickComplete = (index) => {
    const newIncomplete = [...incompleteTodo];
    newIncomplete.splice(index, 1);
    setIncompleteTodo(newIncomplete);
    const newComplete = [...completeTodo, incompleteTodo[index]];
    setCompleteTodo(newComplete);
  };

  const onClickReturn = (index) => {
    const newComplete = [...completeTodo];
    newComplete.splice(index, 1);
    setCompleteTodo(newComplete);

    const newIncomplete = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newIncomplete);
  };

  return (
    <div className="App">
      <SContainer>
        <h1>To Do List</h1>
        <AddArea
          todoText={todoText}
          onChange={onChangeText}
          onClick={onClickAdd}
        />
        <IncompleteArea
          incompleteTodo={incompleteTodo}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteArea completeTodo={completeTodo} onClick={onClickReturn} />
      </SContainer>
    </div>
  );
}

export default App;

const SContainer = styled.div`
  text-align: center;
  width: 30%;
  margin: 0 auto;
`;
