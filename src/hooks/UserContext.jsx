import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async (userInfo) => {
    setUserData(userInfo)

    await localStorage.setItem('burger:userInfo', JSON.stringify(userInfo))
  }

  const logout = async () => {
      await localStorage.removeItem('burger:userInfo')
  }


  useEffect(() => {
    const loadUserData = async () => {
      const clientInfo = await localStorage.getItem('burger:userInfo')
    }

      if(clientInfo){
        setUserData(JSON.parse(clientInfo))
      }
      loadUserData()
  }, [])

  return(
    <UserContext.Provider value = {{putUserData, userData, logout}}>
        {children}
    </UserContext.Provider>
      )
    }

    export const useUser = () => {
        const context = useContext(UserContext)
      
        if (!context) {
          throw new Error('useUser must be used with UserContext')
        }
      
        return context
      }
      
      UserProvider.propTypes = {
        children: PropTypes.node,
      }
    