import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from "react-router-dom"

// 不同頁面
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

// 導覽列
import MyNavBar from './components/MyNavBar'

const App = () => {
  const userStatus = "登出"

  return (
    <Router>
       <>
       {/* 導覽列: 選單 */}
        <MyNavBar/>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" 
             component={() => <News userStatus={userStatus}/>} 
             />
            <Route path="/contact" 
             render={(props) =><Contact {...props} userStatus={userStatus}/>}
            />
        </Switch>
       </>
    </Router>
  )
}

export default App
