import React from "react";
import styled from "styled-components";

const IncompleteArea = (props) => {
  const { incompleteTodo, onClickComplete, onClickDelete } = props;

  return (
    <SIncompleteArea>
      <h2>これからやるTo Do</h2>
      <div>
        <ul>
          {incompleteTodo.map((todo, index) => {
            return (
              <div key={todo} className="list">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </SIncompleteArea>
  );
};

export default IncompleteArea;

const SIncompleteArea = styled.div`
  background-color: #c6ffe2;
  width: 100%;
  height: auto;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
