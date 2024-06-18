import React from 'react'

import styles from './AppRouter.module.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../routes/routes'

import NavigationBar from '../NavigationBar/NavigationBar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className={styles.addaptive}>
        <NavigationBar />
        <Routes>
          {ROUTES.map((routerItem, index) =>
            <Route
              key={index}
              Component={routerItem.component}
              path={routerItem.path}
            />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter