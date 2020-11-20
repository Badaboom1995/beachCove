import { createSelector } from '@reduxjs/toolkit'
import { TemplateState } from './duck'

export const selectTemplates = () =>
  createSelector(
    (state: TemplateState) => state.templates,
    templates => {
      return templates.entities || null
    },
  )
