import React from "react";

const Todo = (props) => {

  return (
    <div
      className={`item${props.item.completed} ? 'completed' : ''} `}
      onClick={() => props.toggleItem(props.item.id)}>
      <div>
        <p>{props.item.name}</p>
      </div>
    </div>
  );
};
export default Todo;