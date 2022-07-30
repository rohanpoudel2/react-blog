import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

const SideBar = () => {

  const [cat, setCat] = useState([])

  const getCats = async () => {
    const res = await axios.get('/categories')
    setCat(res.data.msg)
  }

  useEffect(() => {
    getCats()
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://images.unsplash.com/photo-1585422544771-75e895ba76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="aboutmeIMG"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quia iusto voluptate
          necessitatibus quaerat. Cumque tenetur ut
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link key={c._id} to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default SideBar