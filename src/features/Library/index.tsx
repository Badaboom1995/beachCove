import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTemplates } from './duck/actions'
import LibraryView from './view'
import { useSelector } from 'react-redux'
import { selectTemplates } from './selectors'
import { RootState } from 'index'

type LibraryProps = {
  onSubmit: (habit: any, callback: any) => void
}

function Library({ onSubmit }: LibraryProps) {
  const templates = useSelector(selectTemplates())
  const dispatch = useDispatch()
  const onAdd = (habit, callback) => {
    onSubmit(habit, callback)
  }

  useEffect(() => {
    if (!templates.length) dispatch(getTemplates())
  }, [dispatch, templates.length])

  return <LibraryView templates={templates} onSubmit={onAdd} />
}
export default Library
