import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import request from '../api/request'

const style = { color: `red` }

const RouterNav = () => {
  useEffect(() => {
  }, []);
  return (<div>
    <NavLink to='/' exact activeStyle={style}>首页</NavLink>
    <NavLink to='/about' activeStyle={style}>关于</NavLink>
  </div>)
}

export default RouterNav 