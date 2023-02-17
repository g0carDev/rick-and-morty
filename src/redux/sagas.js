import { takeEvery, call, put, all } from 'redux-saga/effects'
import { getCharactersSuccess, getCharacterSuccess } from './characters/charactersSlice'
import { getEpisodesSuccess, getEpisodeSuccess } from './episodes/episodesSlice'
import { getSearchSuccess } from './search/searchSlice'
import { getDataFromAPI } from '../api'

function * workEpisodesFetch (action) {
  try {
    const response = yield call(getDataFromAPI, action.payload)
    if (response.results) yield put(getEpisodesSuccess(response))
    else yield put(getEpisodeSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

function * workCharactersFetch (action) {
  try {
    const response = yield call(getDataFromAPI, action.payload)
    if (response.results) yield put(getCharactersSuccess(response))
    else yield put(getCharacterSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

function * workSearchFetch (action) {
  try {
    const response = yield call(getDataFromAPI, action.payload)
    yield put(getSearchSuccess(response))
  } catch (error) {
    console.log(error)
  }
}

function * watchAll () {
  yield all([
    takeEvery('episodes/getEpisodesFetch', workEpisodesFetch),
    takeEvery('characters/getCharactersFetch', workCharactersFetch),
    takeEvery('search/getSearchFetch', workSearchFetch)
  ])
}

export default watchAll
