import { useNavigate } from "react-router-dom" 

export default function Login() {

  const navigate = useNavigate() 

  const handleLogin = () => {
    navigate("/")  
  } 

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <div className="w-[450px] bg-gray-100 p-10">

        <h1 className="text-center text-4xl tracking-[6px] mb-12 font-serif">
          LOGIN
        </h1>
 
        <div className="mb-8">
          <label className="block text-sm tracking-[4px] mb-2">
            EMAIL
          </label>
          <input
            type="email"
            className="w-full border border-black p-3 outline-none bg-transparent"
          />
        </div>

        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <label className="text-sm tracking-[4px]">
              PASSWORD
            </label>
           
          </div>

          <input
            type="password"
            className="w-full border border-black p-3 outline-none bg-transparent"
          />
        </div>

        <button className="w-full py-4 text-white tracking-[4px] bg-gradient-to-r from-[#bfa874] to-[#a89563] hover:opacity-90" onClick={handleLogin}>
          SIGN IN
        </button>
   
      </div>

    </div>
  )   
}