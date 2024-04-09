import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Outlet } from "react-router-dom"

type Props = {}

function Layout({}: Props) {
  return (
    <div className="main-layout">
        <div className="left"><Sidebar /></div>
        <div className="right">
          <Navbar />
          <Outlet />
        </div>
    </div>
  )
}

export default Layout