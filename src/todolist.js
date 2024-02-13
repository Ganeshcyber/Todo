import React from 'react';

const Todolist = ({ todolist, onDelete }) => {
return (
    <div>
        {todolist.map((todo, index) => (
        <div key={index}>
            <h4>
            {todo} &nbsp;
            <button id='btn4' onClick={() => onDelete(index)}>Delete</button>
            </h4>
        </div>
    ))}
    </div>
);
}

export default Todolist;
