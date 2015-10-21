import fetch from 'isomorphic-fetch'

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
export const RECIEVE_PHOTOS = 'RECIEVE_PHOTOS'

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS
  }
}

function recievePhotos(data) {
  const dirs = data.dirs.map(dir => {
    const dirname = dir.name
    const files = dir.files.map(file => {
      const date = file.d
      const name = file.n
      const url = `http://192.168.0.1/v1/photos/${dirname}/${name}?size=view`
      return {date, name, url}
    })
    return {
      name: dirname,
      avatar: files[0] || {date:null, name:null, url:null},
      files: files
    }
  })
  return {
    type: RECIEVE_PHOTOS,
    dirs: dirs
  }
}

export function fetchPhotos () {
  return dispatch => {
    dispatch(requestPhotos())
    return fetch(`http://localhost:8080/_gr/objs`)
      .then(response => response.json())
      .then(data => dispatch(recievePhotos(data)))
  }
}

export function showFiles (files) {
  console.log('showFiles:', files)
  return files
}
