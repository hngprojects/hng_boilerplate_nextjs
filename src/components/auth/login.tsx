'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, ShieldCheck } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useEffect, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { credentialsAuth } from '~/actions/auth'
import { setBackend } from '~/actions/nextauth'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import useEnvironmentStore from '~/hooks/global/use-enviroment'
import { cn } from '~/utils'
import { LoginSchema } from '~/schemas'
import { Input } from '../ui/input'
import GoogleLogo from '../icons/google-logo'
import { Button } from '../ui/button'
import FramerButton from '../ui/framer-button'

const Login = () => {
  const router = useRouter()
  const [isLoading, startTransition] = useTransition()
  const [showPassword, setShowPassword] = useState(false)
  const { status } = useSession()
  const { backend } = useEnvironmentStore()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const { email, password } = values

    startTransition(async () => {
      await setBackend(backend)
      await credentialsAuth(values).then(async (result) => {
        console.log(result)
        if (result.success) {
          await signIn('credentials', {
            email,
            password,
            redirect: false,
          })
          toast.success('Login success', {
            description: 'Redirecting',
          })
          router.push('/')
        } else {
          toast.error('Login failed', {
            description: result.message || 'An error occurred during login',
          })
        }
      })
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-semibold leading-tight">
            Login
          </h1>
          <p className="font-inter text-neutralColor-dark-2 mt-2 text-center text-sm font-normal leading-6">
            Welcome back, you&apos;ve been missed!
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <Button
            onClick={async () => {
              await setBackend(backend)
              signIn('google', { redirectTo: '/' })
            }}
            disabled={isLoading || status === 'authenticated'}
            variant="outline"
            className="h-10 w-full gap-x-3"
          >
            <GoogleLogo />
            <span className="h-full w-px bg-gray-300 dark:bg-gray-600" />
            <span>Continue with Google</span>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-full border-t border-gray-300" />
          <span className="font-inter text-neutralColor-dark-1 px-3 text-xs font-normal leading-tight">
            OR
          </span>
          <hr className="w-full border-t border-gray-300" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Enter Email Address"
                      {...field}
                      className={cn(
                        'font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none',
                        form.formState.errors.email && 'border-destructive'
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="email-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={isLoading}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Password"
                        {...field}
                        className={cn(
                          'font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none',
                          form.formState.errors.password && 'border-destructive'
                        )}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? (
                          <Eye
                            className="h-5 w-5 text-gray-400"
                            data-testid="eye-icon"
                          />
                        ) : (
                          <EyeOff
                            className="h-5 w-5 text-gray-400"
                            data-testid="eye-off-icon"
                          />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage data-testid="password-error" />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-neutral Color-dark-2 text-sm font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <FramerButton
              isLoading={isLoading}
              disabled={isLoading}
              text="Login"
            />
          </form>
        </Form>

        <Button
          asChild
          variant="outline"
          size="default"
          className="w-full py-6"
          type="button"
        >
          <Link href="/login/magic-link">Sign in with magic link</Link>
        </Button>

        <p className="font-inter text-neutralColor-dark-1 mt-5 text-center text-sm font-normal leading-[15.6px]">
          Don&apos;t Have An Account?{' '}
          <Link
            href="https://telex.im/"
            className="font-inter ms-1 text-left text-base font-bold leading-[19.2px] text-primary hover:text-orange-400"
            data-testid="link"
          >
            Sign Up
          </Link>
        </p>

        <p className="mt-2 text-center text-xs text-gray-500">
          <ShieldCheck className="mr-1 hidden h-4 w-4 text-gray-400 sm:inline-block" />
          By logging in, you agree to the{' '}
          <a
            href="/terms-and-conditions"
            className="text-sm font-bold text-primary hover:text-orange-500"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="/privacy-policy"
            className="text-sm font-bold text-primary hover:text-orange-500"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
