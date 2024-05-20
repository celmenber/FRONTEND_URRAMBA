/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import DashboardAdmin from './DashboardAdmin'
import DashboardAutoridad from './DashboardAutoridad'
import DashboardEncuestador from './DashboardEncuestador'

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))
  const [roll, setRoll] = useState("");

  useEffect(() => {
    setRoll(currentUser.ID_ROLL);
  }, []);

  return (
    <>
            {parseInt(roll) === 1 && (
              <DashboardAdmin />
            )}
            {parseInt(roll) === 2 && (
              <DashboardEncuestador />
            )}
            {parseInt(roll) === 3 && (
              <DashboardAutoridad />
            )}
    </>
  )
}

export default Dashboard
