import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '.'
import { MainLayout } from '../components/layouts'
import { SearchPage, CharacterInfoPage, EpisodeInfoPage } from '../pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {
            routes.map(({ path, Component, index = false }) => (
              <Route index={index} key={path} path={path} element={<Component />} />
            ))
          }
          <Route path='search/:term' element={<SearchPage />} />
          <Route path='character/:id' element={<CharacterInfoPage />} />
          <Route path='episode/:id' element={<EpisodeInfoPage />} />
          <Route
            path='*'
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
