import React from 'react'
import { NavLink } from 'react-router-dom'

const style = { color: `red` }

const RouterNav = () => {
  return (<div>
    <NavLink to='/' exact activeStyle={style}>首页</NavLink>
    <NavLink to='/about' activeStyle={style}>关于</NavLink>
  </div>)
}

export default RouterNav 