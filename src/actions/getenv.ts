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
    let baseURL: string | undefined

    switch (backend) {
      case 'python':
        baseURL = process.env.PYTHON_BASEURL
        if (!baseURL) {
          throw new Error('PYTHON_BASEURL environment variable is not defined')
        }
        return baseURL

      case 'php':
        baseURL = process.env.PHP_BASEURL
        if (!baseURL) {
          throw new Error('PHP_BASEURL environment variable is not defined')
        }
        return baseURL

      default:
        baseURL = process.env.BASE_URL
        if (!baseURL) {
          throw new Error('BASE_URL environment variable is not defined')
        }
        return baseURL
    }
  } catch (error) {
    console.log(error)
    if (
      backend === 'python' &&
      error instanceof Error &&
      error.message.includes('PYTHON_BASEURL')
    ) {
      throw error
    } else if (
      backend === 'php' &&
      error instanceof Error &&
      error.message.includes('PHP_BASEURL')
    ) {
      throw error
    } else if (
      !backend &&
      error instanceof Error &&
      error.message.includes('BASE_URL')
    ) {
      throw error
    }

    return undefined
  }
}
