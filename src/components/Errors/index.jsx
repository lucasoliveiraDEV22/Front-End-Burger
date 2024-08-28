import { ErrorMessage } from "./styles"
import PropTypes from 'prop-types'

export function Errors({children,...rest}){
    return <ErrorMessage {...rest}>{children}</ErrorMessage>
}

Errors.propTypes={
    children:PropTypes.children
}