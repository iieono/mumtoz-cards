import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { RootState } from "@/store/store"
import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"

type Props = {}

function Layout({}: Props) {
  const theme = useSelector((state: RootState) => state.settings.theme)
  
  return (
    <div className={`main-layout ${theme ? 'dark' : ''}`}>
        <div className="left"><Sidebar /></div>
        <div className="right">
          <Navbar />
          <Outlet />
        </div>
    </div>
  )
}

export default Layout