import React from 'react'
import styled from 'styled-components'

const AddArea = (props) => {
    const {todoText, onChange, onClick } = props;

    return(
        <SAddArea>
            <SInput placeholder="TODOを入力" value={todoText} onChange={onChange} type="text" />
            <button onClick={onClick}>追加</button>
        </SAddArea>
    )
}

export default AddArea;

const SAddArea = styled.div`
    background-color: #c1ffff;
    width: 100%;
    height: auto;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
`;

const SInput = styled.input`
    margin-right: 15px;
`;