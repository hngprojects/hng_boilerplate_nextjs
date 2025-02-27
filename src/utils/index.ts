import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges and deduplicates CSS class names using clsx and tailwind-merge
 *
 * This utility function combines multiple class names or class name arrays into a single
 * string, while intelligently handling Tailwind CSS class conflicts by merging them
 * according to the tailwind-merge algorithm.
 *
 * @param inputs - Any number of class values (strings, objects, or arrays) that will be processed by clsx
 * @returns A string of merged and deduplicated class names optimized for Tailwind CSS
 *
 * @example
 * // Returns "p-4 bg-blue-500" (p-2 is overridden by p-4)
 * cn('p-2', 'p-4', 'bg-blue-500')
 *
 * @example
 * // Returns "dark:bg-gray-800 bg-white" with conditional classes
 * cn('bg-white', { 'dark:bg-gray-800': isDarkMode })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Indicates whether the application is running in a development environment
 *
 * This constant checks if the Node.js process exists and if its environment
 * is set to 'development'.
 *
 * @type {boolean}
 */
export const inDevEnvironment =
  !!process && process.env.NODE_ENV === 'development'

/**
 * The root domain for the application
 *
 * This constant defines the base domain used throughout the application.
 * It's used for consistent domain handling, especially when working with
 * subdomains.
 *
 * @type {string}
 */
export const ROOT_DOMAIN = 'boilerplate.hng.tech'

/**
 * Extracts the subdomain from a hostname
 *
 * This function parses a hostname string and extracts just the subdomain portion.
 * It handles various edge cases including development environments, hostnames with
 * ports, and cases where no subdomain exists.
 *
 * @param hostname - The full hostname (e.g., "blog.example.com" or "test.localhost:3000")
 * @param rootDomain - The root domain (e.g., "example.com")
 * @returns The subdomain string or an empty string if no subdomain is present
 *
 * @example
 * // Returns "blog"
 * getSubdomain("blog.example.com", "example.com")
 *
 * @example
 * // Returns "" (empty string)
 * getSubdomain("example.com", "example.com")
 *
 * @example
 * // Returns "test"
 * getSubdomain("test.localhost:3000", "localhost")
 */
export function getSubdomain(hostname: string, rootDomain: string): string {
  hostname = hostname.split(':')[0]
  if (hostname.endsWith(`.${rootDomain}`)) {
    const subdomain = hostname.slice(0, -rootDomain.length - 1)
    return subdomain
  }
  if (hostname === rootDomain) {
    return ''
  }
  if (hostname.includes('localhost')) {
    const parts = hostname.split('.')
    if (parts.length > 1) {
      return parts[0]
    }
    return ''
  }
  const parts = hostname.split('.')
  if (parts.length > 2) {
    return parts[0]
  }

  return ''
}
