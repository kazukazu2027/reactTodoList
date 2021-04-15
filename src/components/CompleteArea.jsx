import React from "react";
import styled from "styled-components";

const CompleteArea = (props) => {
  const { completeTodo, onClick } = props;
  return (
    <SCompleteArea>
      <h2>終わったTo Do</h2>
      <div>
        <ul>
          {completeTodo.map((todo, index) => {
            return (
              <div key={todo} className="list">
                <li>{todo}</li>
                <button onClick={() => onClick(index)}>戻る</button>
              </div>
            );
          })}
        </ul>
      </div>
    </SCompleteArea>
  );
};

export default CompleteArea;

const SCompleteArea = styled.div`
  background-color: #ffffe0;
  width: 100%;
  height: auto;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
