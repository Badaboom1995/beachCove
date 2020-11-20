import { makeRequest } from './shared'

const templatesService = {
  getTemplates: () => makeRequest('/templates', 'GET'),
}

export default templatesService
