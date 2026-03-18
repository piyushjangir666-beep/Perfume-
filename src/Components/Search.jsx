import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FaSearch, FaTimes } from "react-icons/fa"

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`)
      setSearchQuery("")
    }
  }

  const handleClose = () => {
    navigate("/")
  }

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between px-6 py-6">
        <FaSearch className="text-gray-400 text-xl" />
        
        <form onSubmit={handleSearch} className="flex-1 mx-4">
          <input type="text" placeholder="Search our store" value={searchQuery}
           onChange={(e) =>  setSearchQuery(e.target.value)} 
           className="w-full bg-transparent text-lg outline-none placeholder-gray-400" autoFocus/>
        </form>

        <button onClick={handleClose} className="text-gray-400 text-xl cursor-pointer">
          <FaTimes />
        </button>
      </div>
    </div>
  )
}