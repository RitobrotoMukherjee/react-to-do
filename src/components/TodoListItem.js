import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';

const TodoListItem = (props) => {
    const { id, title, completed } = props.todoItem;
    const { handleCompleted, updateToDoItem } = props;
    const ListStyle = {
        listStleType: "none", display: "flex", flexWrap: "wrap"
    }

    const handleUpdate = (e) => {
        const { value } = e.target;
        updateToDoItem(id, value);
    }

    return (
        <li style={ListStyle}>
            <input className="List-item List-item-checkbox" type="checkbox" checked={completed} onChange={() => handleCompleted(id)} />
            <input className="List-item Input-item" type="text" value={title} onChange={handleUpdate} />
        </li>
    );
}

TodoListItem.propTypes = {
    handleCompleted: PropTypes.func.isRequired,
    updateToDoItem: PropTypes.func.isRequired,
    todoItem: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool,
    }).isRequired,
}

export default TodoListItem;