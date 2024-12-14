import { useContext } from "react"
import AuthCntext from "../Provider/AuthContext"

const useAuth = () => {
    const context = useContext(AuthCntext);
    return context;
}

export default useAuth;