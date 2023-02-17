import { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

import SearchOutlined from '@mui/icons-material/SearchOutlined'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleSideMenu } from '../../redux/ui/uiSlice'
import { setSearchTerm } from '../../redux/filters/filtersSlice'
import { routes } from '../../routes'
import { Filters } from '../Filters'

export const SideMenu = () => {
  const [searchLocalTerm, setSearchlocalTerm] = useState('')

  const { isMenuOpen } = useSelector((state) => state.ui)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSearchTerm = () => {
    if (searchLocalTerm.trim().length <= 0) return setSearchTerm('')
    dispatch(setSearchTerm(searchLocalTerm))
    navigateTo(`/search/${searchLocalTerm}`)
  }

  const navigateTo = (url = '') => {
    navigate(url)
    dispatch(toggleSideMenu())
  }
  return (
    <Drawer
      open={isMenuOpen}
      onClose={() => {
        dispatch(toggleSideMenu())
      }}
      anchor='right'
      sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
      <Box sx={{ width: 250, paddingTop: 5 }}>
        <List>
          <ListItem>
            <Input
              autoFocus
              value={searchLocalTerm}
              onChange={(e) => setSearchlocalTerm(e.target.value)}
              type='text'
              placeholder='Search...'
              onKeyUp={(e) => e.key === 'Enter' ? onSearchTerm() : null}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={onSearchTerm} aria-label='toggle password visibility'>
                    <SearchOutlined />
                  </IconButton>
                </InputAdornment>
              }
            />
          </ListItem>
          <Filters />
          {
            routes.map(({ path, name, Icon }) => (
              <ListItemButton key={path} onClick={() => navigateTo(path)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            )
            )
          }

        </List>
      </Box>
    </Drawer>
  )
}
