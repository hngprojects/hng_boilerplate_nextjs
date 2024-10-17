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
  try {
    const { PYTHON_BASEURL: python, PHP_BASEURL: php, BASE_URL: BaseURL } = await getEnvVariables(
      'PYTHON_BASEURL',
      'PHP_BASEURL',
      'BASE_URL'
    )

    console.log({
      python, php
    })

    switch (backend) {
      case 'python':
        if (!python) {
          throw new Error('PYTHON_BASEURL environment variable is not defined')
        }
        return python
      case 'php':
        if (!php) {
          throw new Error('PHP_BASEURL environment variable is not defined')
        }
        return php
      default:
        if (!BaseURL) {
          throw new Error('BASE_URL environment variable is not defined')
        }
        return BaseURL
    }
  } catch (error) {
    if (backend === 'python' && error instanceof Error && error.message.includes('PYTHON_BASEURL')) {
      throw error
    } else if (backend === 'php' && error instanceof Error && error.message.includes('PHP_BASEURL')) {
      throw error
    } else if (!backend && error instanceof Error && error.message.includes('BASE_URL')) {
      throw error
    }

    return undefined
  }
}
