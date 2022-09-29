//tools import
import { Redirect, Route as ReactDOMRoute } from 'react-router-dom'

const Route = ({
  isPrivate = false,
  isSign = false,
  component: Component,
  ...rest
}) => {
  const token = JSON.parse(localStorage.getItem('@quackritics:token'))

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return !!token && !isSign ? (
          <Component />
        ) : !!token && isSign ? (
          <Redirect to={'/'} />
        ) : isPrivate ? (
          <Redirect to={'/login'} />
        ) : (
          <Component />
        )
      }}
    />
  )
}

export default Route
