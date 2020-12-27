import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'styles/global-styles'

import makeRoutes from 'utils/makeRoutes'
import { mainRoutes } from 'config/routes'
import firebase from 'firebase/app'
import config from 'config/firebase'
import 'firebase/storage'
import 'firebase/database'
import { setRooms, setImages } from './duck/slice'
import { useDispatch } from 'react-redux'

export function App() {
  const dispatch = useDispatch()
  const getData = async () => {
    const database = firebase.database()
    const roomsData = await database.ref('/rooms/').once('value')
    const rooms = { ...roomsData.val() }
    for (const key in roomsData.val()) {
      rooms[key].urls = []
    }
    dispatch(setRooms(rooms))
  }
  const getImages = async () => {
    const storage = firebase.storage()
    const storageRef = storage.ref('')
    const roomsRef = storageRef.child('/rooms')
    const folders = await roomsRef.listAll()

    folders.prefixes.forEach(folderRef => {
      roomsRef
        .child(folderRef.name)
        .listAll()
        .then(res => {
          res.items.forEach(function (itemRef) {
            const imgRef = storageRef.child(itemRef.fullPath)
            imgRef.getDownloadURL().then(function (url) {
              dispatch(setImages({ folder: folderRef.name, url }))
            })
          })
        })
    })
  }
  useEffect(() => {
    firebase.initializeApp(config)
    getData().then(() => {
      getImages()
    })
  }, [getData, getImages])

  return (
    <>
      <BrowserRouter>
        <Helmet defaultTitle="Beach Cove">
          <meta name="description" content="Search" />
        </Helmet>
        <Switch>{makeRoutes(mainRoutes)}</Switch>
        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}
