import API from '..'

const getFilms = () => API.get('films/')
const getFilmById = (id = '') => API.get(`films/${id}`)

export { getFilms, getFilmById }