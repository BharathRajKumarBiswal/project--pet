import React, { useContext, useState } from 'react'
const AuthContext = React.createContext()

const Auth = (props) => {
    const [user, setUser] = useState(null)
    const [userid, setUserId] = useState(null)

    const login = (userX, userId) => {
        setUser(userX)
        setUserId(userId)
    }

    const logout = () => {
        setUser(null)
    }
    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, userid }}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}
export default Auth
