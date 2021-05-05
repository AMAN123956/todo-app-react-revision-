import React from 'react'

const Task = (props) => {
    return (
        <div className=
            {`event-cards ${props.task.reminder ? 'reminder' : ' '}`} onClick={
            () => props.onToggle(props.task.id)
        }>
            <h3 className="task-text">{props.task.text}
                <span className="cross-icon">
                    <i className="fa fa-times" aria-hidden="true"
                        onClick={() => props.onDelete(props.task.id)}
                        
                    >
                        
                        </i></span></h3>
            <p>{props.task.day}</p>
        </div>
    )
}

export default Task