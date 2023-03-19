import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style={
    li:`flex justify-between bg-slate-200 my-2 p-4 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 m-2 capitalize`,
    row:`flex`,
    text:`ml-2 cursor-pointer`,
    textComplete:`ml-2 cursor-pointer line-through`,
    button:`cursor-pointer items-center`
}

const Todo = ({todo}) => {
  return (
    <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>
            <input type="checkbox" checked={todo.completed ? 'checked' : ''} />
            <p className={todo.completed ? style.textComplete : style.text}>{todo.text}</p>
        </div>
        <button>{<FaRegTrashAlt />}</button>
    </li>
  )
}

export default Todo
