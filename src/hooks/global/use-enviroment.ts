import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type EnvironmentStore = {
  backend: 'python' | 'php'
  setBackend: (backend: 'python' | 'php') => void
}

const useEnvironmentStore = create<EnvironmentStore>()(
  persist(
    (set) => ({
      backend: 'python',
      setBackend: (backend) => set({ backend }),
    }),
    {
      name: 'environment-storage',
    }
  )
)

export default useEnvironmentStore
