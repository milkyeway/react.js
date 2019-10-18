import React from 'react'

const News = (props) => {
    return (
        <>
        <h1>新聞</h1>
        <h3>會員狀態：{props.userStatus}</h3>
        </>
    )
}

export default News