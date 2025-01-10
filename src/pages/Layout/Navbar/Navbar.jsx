import { SearchInput } from '@/components'
import { icons } from '@/utils/constants'
import React from 'react'
import "./Navbar.scss"
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '@/store/globalSlice'
const Navbar = () => {
  const dispatch = useDispatch();
  const reduxdata = useSelector((state) => state.global.sidebarOpen);
  return (
    <div id="Navbar-container" className="position-static">
  <div className="d-flex justify-content-between align-items-center mt-20">
    <div className="d-flex">
      <div className="click-icon d-flex align-items-center">
        <img src={icons.humbarger} alt="clickicon" className="img-fluid"  onClick={() => dispatch(toggleSidebar(!reduxdata))} />
      </div>
      <div className="search-bar">
        <SearchInput 
        placeholder="Ctrl + K"
        />
      </div>
    </div>
    <div className="d-flex align-items-center gap-2">
      <div>
        <img src={icons.chaticon} alt="img" className="img-fluid" />
      </div>
      <div>
        <img src={icons.notifcation} alt="img" className="img-fluid" />
      </div>
      <div>
        <img src={icons.avatar} alt="img" className="img-fluid w-40 h-40" />
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar
