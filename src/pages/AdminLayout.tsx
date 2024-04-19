import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Page404 from "./Page404"

type Props = {}

function AdminLayout({}: Props) {
  const theme = useSelector((state: RootState) => state.settings.theme)
  const admin = useSelector((state: RootState) => state.auth.isAdmin)
  
  return (
    admin ? (
    <div className={`main-layout ${theme ? 'dark' : ''}`}>
        <div className="left"><Sidebar /></div>
        <div className="right">
          <Navbar />
          <Outlet />
        </div>
    </div>
    ):(
      <Page404 />
    )
  )
}

export default AdminLayout