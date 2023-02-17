import { CssBaseline, ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { Navigation } from './routes/Navigation'
import { darkTheme } from './themes'
import store from './redux/store'

function App () {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Navigation />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
