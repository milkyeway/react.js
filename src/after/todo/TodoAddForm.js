import React from 'react'

const TodoAddForm = (props) => (
    <>
        {/* 直接展開所有的由上層父母元件的 props */}
        <input type="text" {...props} />
    </>
)

export default TodoAddForm