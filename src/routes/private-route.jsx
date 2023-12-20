import React from "react";
import { Redirect, Route } from 'react-router-dom';

import PropTypes from 'prop-types';

function PrivateRoute ({element, ...rest}){
    const user = localStorage.getItem('codeburger:userData')

    if(!user){
        return <Redirect to="/login" />
    }

        return <Route {...rest} element = {element} />

}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
