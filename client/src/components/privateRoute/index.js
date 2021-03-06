import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
   
    return (
        <Route
            {...rest}
            render={props =>
            {
                return (
                    localStorage.getItem("userIdentify") ?
                        (<Component {...props} />) : (<Redirect to='/'></Redirect>)
                    )
            }}
        >

        </Route>
    )
}

export default PrivateRoute