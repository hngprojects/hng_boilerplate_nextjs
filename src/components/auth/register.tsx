'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next-nprogress-bar'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { registerUser } from '~/actions/auth'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import { cn } from '~/utils'
import { RegisterSchema } from '~/schemas'
import { Input } from '../ui/input'
import { toast } from 'sonner'
import { Button } from '~ui/button'
import GoogleLogo from '../icons/google-logo'
import FramerButton from '../ui/framer-button'
import useEnvironmentStore from '~/hooks/global/use-enviroment'
import { setBackend } from '~/actions/nextauth'

const Register = () => {
  const router = useRouter()
  const { status } = useSession()
  const [isLoading, startTransition] = useTransition()
  const [showPassword, setShowPassword] = useState(false)
  const { backend } = useEnvironmentStore()

  if (status === 'authenticated') {
    router.push('/dashboard')
  }

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(async () => {
      await registerUser(values, backend).then(async (data) => {
        console.log(data)
        toast[data.status === 201 ? 'success' : 'error'](
          data.status === 201
            ? 'Account created successfully'
            : 'an error occurred',
          {
            description:
              data.status === 201 ? 'verify your account' : data.error,
          }
        )
      })
    })
  }

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-semibold leading-tight">
            Sign Up
          </h1>
          <p className="font-inter text-neutralColor-dark-2 mt-2 text-center text-sm font-normal leading-6">
            Create an account to get started with us.
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
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter your first name"
                      {...field}
                      className={cn(
                        'font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none',
                        form.formState.errors.first_name && 'border-destructive'
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder="Enter your last name"
                      {...field}
                      className={cn(
                        'font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none',
                        form.formState.errors.last_name && 'border-destructive'
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
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
                      type="email"
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
                        onClick={() => setShowPassword(!showPassword)}
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
            <FramerButton
              isLoading={isLoading}
              disabled={isLoading}
              text="Sign up"
            />
            {/* <CustomButton
              type="submit"
              variant="primary"
              size="default"
              className="w-full py-6"
              isDisabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-x-2">
                  <span className="animate-pulse">Logging in...</span>{' '}
                  <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                </span>
              ) : (
                <span>Create Account</span>
              )}
            </CustomButton> */}
          </form>
        </Form>

        <p className="font-inter text-neutralColor-dark-1 mt-5 text-center text-sm font-normal leading-[15.6px]">
          Already Have An Account?{' '}
          <Link
            href="https://telex.im/"
            className="font-inter ms-1 text-left text-base font-bold leading-[19.2px] text-primary hover:text-orange-400"
            data-testid="link"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
