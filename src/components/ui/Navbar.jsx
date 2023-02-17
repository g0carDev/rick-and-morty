import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Image from 'mui-image'

import ClearOutlined from '@mui/icons-material/ClearOutlined'
import SearchOutlined from '@mui/icons-material/SearchOutlined'

import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toggleSideMenu } from '../../redux/ui/uiSlice'
import { setSearchTerm } from '../../redux/filters/filtersSlice'
import { routes } from '../../routes'
import Logo from '../../assets/images/rick-and-morty-logo.png'

export const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const [searchLocalTerm, setSearchLocalTerm] = useState('')

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const matchPatch = (url = '') => {
    return url === (location.pathname.slice(1)) ? 'primary' : 'info'
  }

  const onCloseSearch = () => {
    setIsSearchVisible(false)
    setSearchLocalTerm('')
  }

  const onSearchTerm = () => {
    if (searchLocalTerm.trim().length <= 0) return setSearchLocalTerm('')
    dispatch(setSearchTerm(searchLocalTerm))
    navigate(`/search/${searchLocalTerm}`)
    onCloseSearch()
  }

  return (
    <AppBar>
      <Toolbar>
        <Link to='/'>
          <Image src={Logo} />
        </Link>
        <Box flex={1} />
        <Box
          className='fadeIn'
          sx={{
            display: isSearchVisible ? 'none' : { xs: 'none', sm: 'block' }
          }}
        >
          {
            routes.map(({ path, name }) => {
              if (path === '/') return null
              return (
                <Link to={path} key={path}>
                  <Button color={matchPatch(path)}>{name}</Button>
                </Link>
              )
            })
          }

        </Box>
        <Box flex={1} />
        {/* Pantallas grandes */}

        {isSearchVisible
          ? (
            <Input
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              autoFocus
              className='fadeIn'
              value={searchLocalTerm}
              onChange={e => setSearchLocalTerm(e.target.value)}
              type='text'
              placeholder='Search...'
              onKeyUp={e => e.key === 'Enter' ? onSearchTerm() : null}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    onClick={onCloseSearch}
                    aria-label='toggle password visibility'
                  >
                    <ClearOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
            )
          : (
            <IconButton
              className='fadeIn'
              sx={{ display: { xs: 'none', sm: 'flex' } }}
              onClick={() => setIsSearchVisible(true)}
            >
              <SearchOutlined />
            </IconButton>
            )}
        {/* Pantallas peques */}
        <IconButton
          sx={{ display: { xs: 'flex', sm: 'none' } }}
          onClick={() => {
            dispatch(toggleSideMenu())
          }}
        >
          <SearchOutlined />
        </IconButton>
        <Button onClick={() => {
          dispatch(toggleSideMenu())
        }}
        >Menu
        </Button>
      </Toolbar>
    </AppBar>
  )
}
