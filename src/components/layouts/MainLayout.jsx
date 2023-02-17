import { Link, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Navbar, SideMenu } from '../ui'

export const MainLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <SideMenu />
      <main
        style={{
          margin: '80px auto',
          maxWidth: '14440px',
          padding: '0px 30px'
        }}
      >
        <Outlet />
      </main>

      <footer>
        <Typography textAlign='center'>
          Rick and Morty App Created by <Link href='https://g0car.dev' target="_blank">@G0C4R</Link> 2023
        </Typography>
      </footer>
    </>
  )
}
