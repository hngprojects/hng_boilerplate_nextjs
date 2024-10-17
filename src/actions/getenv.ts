'use server'

export const getEnvVariables = async (
  ...envNames: string[]
): Promise<{ [key: string]: string }> => {
  const envVariables: { [key: string]: string } = {}

  envNames.forEach((envName) => {
    const value = process.env[envName]

    if (!value) {
      throw new Error(`${envName} environment variable is not defined`)
    }

    envVariables[envName] = value
  })

  return envVariables
}

export const getBaseURL = async (backend?: string) => {
  const { python, php, BaseURL } = await getEnvVariables(
    'PYTHON_BASEURL',
    'PHP_BASEURL',
    'BASE_URL' // Add the default base URL
  )

  switch (backend) {
    case 'python':
      return python
    case 'php':
      return php
    default:
      return BaseURL
  }
}
