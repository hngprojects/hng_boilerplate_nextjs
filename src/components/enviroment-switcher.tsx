'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useEnvironmentStore from '~/hooks/global/use-enviroment'
import { signOut } from 'next-auth/react'
import { cn } from '~/utils'

export default function EnvironmentSwitcher() {
  const { backend, setBackend } = useEnvironmentStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentBackend = backend || 'default'

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-2 text-lg font-bold text-white">Backend Environment</h3>
      <div className="flex items-center space-x-4">
        <motion.div
          className="relative flex h-12 w-24 cursor-pointer items-center justify-center rounded-full bg-white"
          onClick={async () => {
            const newBackend = currentBackend === 'python' ? 'php' : 'python'
            setBackend(newBackend)
            await signOut({
              callbackUrl: '/',
            })
          }}
          aria-label={`Switch to ${currentBackend === 'python' ? 'PHP' : 'Python'}`}
        >
          <motion.div
            className="absolute h-11 w-11 rounded-full"
            layout
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 30,
            }}
            style={{
              backgroundColor:
                currentBackend === 'python' ? '#306998' : '#8892BF',
              left: currentBackend === 'python' ? '2px' : 'calc(100% - 46px)',
            }}
          />
          <PythonIcon
            className={cn(
              'absolute left-0.5 h-9 w-9',
              currentBackend === 'python' ? 'text-white' : 'text-gray-400'
            )}
          />
          <PhpIcon
            className={cn(
              'absolute left-0.5 h-9 w-9',
              currentBackend === 'php' ? 'text-white' : 'text-gray-400'
            )}
          />
        </motion.div>
        <span className="text-lg font-semibold text-white">
          {currentBackend === 'python'
            ? 'Python'
            : currentBackend === 'php'
              ? 'PHP'
              : 'Default'}
        </span>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
          onClick={async () => {
            setBackend('')
            await signOut({
              callbackUrl: '/',
            })
          }}
        >
          Default
        </button>
      </div>
    </motion.div>
  )
}

function PythonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <linearGradient
        id="python-original-a"
        gradientUnits="userSpaceOnUse"
        x1="70.252"
        y1="1237.476"
        x2="170.659"
        y2="1151.089"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#5A9FD4" />
        <stop offset="1" stopColor="#306998" />
      </linearGradient>
      <linearGradient
        id="python-original-b"
        gradientUnits="userSpaceOnUse"
        x1="209.474"
        y1="1098.811"
        x2="173.62"
        y2="1149.537"
        gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
      >
        <stop offset="0" stopColor="#FFD43B" />
        <stop offset="1" stopColor="#FFE873" />
      </linearGradient>
      <path
        fill="currentColor"
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        transform="translate(0 10)"
      />
      <path
        fill="currentColor"
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        transform="translate(0 10)"
      />
    </svg>
  )
}

function PhpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path
        fill="currentColor"
        d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"
      />
    </svg>
  )
}
