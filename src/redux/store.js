import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { rootReducer } from './rootReducer'

import rootSaga from './sagas'

const saga = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: [saga]
})

saga.run(rootSaga)
export default store
