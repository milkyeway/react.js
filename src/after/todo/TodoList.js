import React from 'react'

const TodoList = ({todos, clickMethod}) => (
    <>
      {/* 直接展開所有的由上層父母元件的 props */}
      <ul>
         {todos.map((value, index) => {
             if(value.completed){
                return (
                    <li 
                      key={value.id}
                      onClick={()=>clickMethod(value.id)}>
                    <strike>
                      {value.text}
                    </strike>
                    </li>
                    )
             }else{
                return (
                    <li 
                      key={value.id}
                      onClick={()=>clickMethod(value.id)}>
                      {value.text}
                    </li>
                    )
             }
             
         })}
      </ul>
    </>
)

export default TodoList