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
