import React, { Component } from 'react';
import styled from 'styled-components';

const Li = styled.li`
    width: 100%;
    border: solid 1px black;
    list-style: none;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    overflow: hidden;
    height: 20px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    border: none;
    background-color: red;
    color: white;
    padding: 5px;
    margin: -10px -10px -10px 0;
    width: 10%;
    margin-left: auto;
    font-size: 25px;
    font-weight: bold;
`;

const Checkbox = styled.input`
    opacity: 0;
    &:checked + label > span:before {
        content: '✓';
        display: flex;
        width: 100%;
        color: white;
        font-size: 25px;
        line-height: 1em;
        align-items: center;
        justify-content: center;
        text-shadow: 0 0 0 0.0714em rgb(115, 153, 77);
        font-weight: bold;
    }
`;

const Label = styled.label`
    margin: -10px 0px -10px -2em;
    display: flex;
    align-items: center;
    line-height: 1.5rem;
    width: 90%;
`;

const Checkmark = styled.span`
    display: flex;
    width: 12%;
    height: 100%;
    vertical-align: bottom;
    background: limegreen;
    margin-right: 15px;
`;

const Todo = ({ toggleTask, removeTask, complete, id, text }) => {
    function markComplete({ target: { id } }) {
        toggleTask(id);
    }

    function deleteTask({ target: { id } }) {
        removeTask(id);
    }

    return (
        <Li>
            <Checkbox
                checked={complete}
                name="taskCheck"
                type="checkbox"
                onChange={event => markComplete(event)}
                id={id}
            />
            <Label htmlFor={id}>
                <Checkmark>
                    <span />
                </Checkmark>
                {text}
            </Label>
            <Button id={id} name="remove" onClick={event => deleteTask(event)}>
                X
            </Button>
        </Li>
    );
};

export default Todo;
