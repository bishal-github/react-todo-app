import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Todo from './Todo'
import {db} from './firebase'
import { query, collection, onSnapshot } from 'firebase/firestore'

const style = {
  bg : `w-screen h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-4`,
  container : `bg-slate-100 max-w-[500px] w-full rounded-md shadow-xl m-auto p-4 top-[30px]`,
  heading: `text-3xl text-gray-800 font-bold text-center p-2`,
  form: `flex justify-between`,
  input:`border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `p-2 text-center`,


}

function App() {
    const [todos, setTodos] = useState([]);

    //Create todo
    //read todo from firebase
    useEffect(()=>{
      const q = query(collection(db, 'todos'))
      const unsubscribe = onSnapshot(q, (querySnapshot)=>{
        let todosArr =[]
        querySnapshot.forEach((doc)=>{
          todosArr.push({...doc.data(), id: doc.id})
        });
        setTodos(todosArr);
      })
      return ()=>unsubscribe();
    },[])


    //update todo in firebase
    //delete todo


  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder='Add Todo' />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {todos.map((todo, index)=>(
          <Todo key={index} todo={todo} />
          ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  )
}

export default App
