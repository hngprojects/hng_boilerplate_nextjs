'use client'

import useEnvironmentStore from '~/hooks/global/use-enviroment'

export const SendBackend = () => {
  const { backend } = useEnvironmentStore()

  return backend
}
