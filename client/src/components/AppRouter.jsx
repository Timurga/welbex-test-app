import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';

const AppRouter = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(auth())
    })


    return (
        <>
          {isAuth || localStorage.getItem('token') ? (
            <Routes>
              {privateRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
              <Route path="/*" element={<Navigate to="/posts" replace />} />
            </Routes>
          ) : (
            <Routes>
              {publicRoutes.map((route) => (
                <Route
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
              <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
          )}
          
        </>
      );
}

export default AppRouter;
