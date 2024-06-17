import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../routes/routes'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((routerItem, index) =>
          <Route
            key={index}
            Component={routerItem.component}
            path={routerItem.path}
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter