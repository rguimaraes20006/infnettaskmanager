import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import React  from 'react'
import ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { DataProvider } from './Contexts/DataContext/Provider'
import store, { persistor } from './Store'
import theme from './theme'
import App from './Components/App'
import './index.css'
 
const root = document.getElementById('root')
const container = ReactDOMClient.createRoot(root)


container.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <DataProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </DataProvider>
    </PersistGate>
  </Provider>,
)
