import PropTypes from 'prop-types';

import React, { useState } from 'react';

const TodoListItem = (props) => {
  const {
    todoItem, handleCompleted, updateToDoItem, deleteHandle,
  } = props;
  const { id, title, completed } = todoItem;

  const [checked, setCompleted] = useState(completed);

  const [desc, setDesc] = useState(title);

  const ListStyle = {
    listStleType: 'none', display: 'flex', flexWrap: 'wrap',
  };

  const handleEdit = (e) => {
    const { value } = e.target;
    updateToDoItem(id, value);
    setDesc(value);
  };

  const handleCompletedChange = (e) => {
    const { checked } = e.target;
    setCompleted(checked);
    handleCompleted(id);
  };

  const handleDeleted = () => {
    deleteHandle(id);
  };

  return (
    <li style={ListStyle}>
      <input className="List-item List-item-checkbox" type="checkbox" checked={checked} onChange={handleCompletedChange} />
      <input className={checked ? 'List-item Input-item Pen-through' : 'List-item Input-item'} type="text" value={desc} onChange={handleEdit} />
      <button type="button" onClick={handleDeleted}>
        <i className="fas fa-trash-alt delete-task" />
      </button>

    </li>
  );
};

TodoListItem.propTypes = {
  handleCompleted: PropTypes.func.isRequired,
  updateToDoItem: PropTypes.func.isRequired,
  deleteHandle: PropTypes.func.isRequired,
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
};

export default TodoListItem;
