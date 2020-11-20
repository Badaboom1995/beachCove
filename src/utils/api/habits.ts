import { makeRequest } from './shared'

const habitService = {
  createHabit: habit => makeRequest('/habits', 'POST', habit),
  getHabits: () => makeRequest('/habits', 'GET'),
  updateHabit: update => makeRequest(`/habit/${update.id}`, 'PATCH', update.diff),
  deleteHabit: id => makeRequest(`/habit/${id}`, 'DELETE'),
}

export default habitService
