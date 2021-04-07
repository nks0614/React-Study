import React from 'react';
import  {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className="checkbox" onClick={() => onToggle(id)}>
                {checked ? <MdCheckBoxOutlineBlank /> : <MdCheckBox />}
            <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
}

export default TodoListItem;