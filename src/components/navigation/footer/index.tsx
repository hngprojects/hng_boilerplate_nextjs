'use client'

import {
  Copyright,
  Facebook,
  Instagram,
  Linkedin,
  XIcon,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import LoadingSpinner from '~/components/miscellaneous/loading-spinner'
import { Input } from '~ui/input'
import { Button } from '~ui/button'
import { makeSubscription } from '~/actions/subscription'
import { toast } from 'sonner'
import useEnvironmentStore from '~/hooks/global/use-enviroment'
import Image from 'next/image'

const Footer = () => {
  const [values, setValues] = useState('')
  const [isPending, startTransition] = useTransition()
  const { backend } = useEnvironmentStore()

  console.log(backend)

  const handleSubmit = async () => {
    startTransition(async () => {
      await makeSubscription(values, backend).then((res) => {
        toast[res.success ? 'success' : 'error'](res.message)
      })
    })
  }

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { route: 'Home', link: '/' },
        { route: 'About us', link: '/about-us' },
        { route: 'Career', link: '/career' },
        { route: 'Features', link: '/' },
        { route: 'Blog', link: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { route: 'Help center', link: '/help-center' },
        { route: 'FAQ', link: '/faqs' },
        { route: 'Waiting List', link: '/waitlist' },
        { route: 'Pricing Experience', link: '/pricing' },
        { route: 'Contact Us', link: '/contact-us' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { route: 'Privacy Policy', link: '/privacy-policy' },
        { route: 'Terms and condition', link: '/terms-and-conditions' },
      ],
    },
  ]

  const socialLinks = [
    {
      icon: XIcon,
      link: '/',
    },
    {
      icon: Youtube,
      link: '/',
    },
    {
      icon: Instagram,
      link: '/',
    },
    {
      icon: Linkedin,
      link: '/',
    },
    {
      icon: Facebook,
      link: '/',
    },
  ]

  const footerBottom = [
    { route: 'Privacy Policy', link: '/' },
    { route: 'Terms of Use', link: '/' },
  ]

  //

  return (
    <footer className="dark:bg-default bg-background">
      <div className="px-4">
        <div className="mx-auto w-full max-w-[1200px] items-start justify-between gap-[60px] pb-[130px] pt-[28px] sm:grid-cols-2 md:gap-4 md:pb-[46px] md:pt-[72px] lg:flex">
          <div className="mb-[100px] lg:mb-0">
            <div className="mb-[47px] flex w-full flex-col items-center justify-center sm:mb-[60px] md:block md:max-w-[254px] lg:mb-0">
              <h5 className="text-md text-neutral-dark-2 mb-[18px] flex items-center gap-2.5 text-center font-bold sm:text-left">
                <Image
                  src="/images/logo(large).svg"
                  width={32}
                  height={32}
                  alt=""
                />
                <span className="text-2xl font-semibold">Telex AI Agents</span>
              </h5>
              <p className="text-nuetral-dark-2 text-center text-sm font-medium sm:text-left">
                10111, Hornchurch, London, United Kingdom
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:block lg:hidden">
              <h5 className="text-neurtal-dark-2 text-md mb-4 text-center font-semibold sm:text-left md:mb-[36px]">
                Sign Up For Newsletters
              </h5>
              <div className="item flex h-[46px] w-full items-center justify-start md:max-w-[283px]">
                <Input
                  placeholder="Enter your email"
                  className="border-r-none text-md h-[46px] rounded-r-none border-r-0 border-r-transparent bg-transparent active:border-transparent"
                  onChange={(event) => setValues(event.target.value)}
                  value={values}
                />
                <Button
                  variant="primary"
                  className="h-full"
                  onClick={handleSubmit}
                >
                  {isPending ? (
                    <span className="flex items-center gap-x-2">
                      <span className="animate-pulse">Loading</span>{' '}
                      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                    </span>
                  ) : (
                    'Subscibe'
                  )}
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-1 gap-y-[60px] md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {footerLinks.map((item, index) => {
              return (
                <div key={index}>
                  <h5 className="text-neurtal-dark-2 mb-[37px] text-[16px] font-semibold">
                    {item.title}
                  </h5>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={item.link}
                            className="text-md text-neutral-dark-2 cursor-pointer transition-colors duration-300 hover:text-primary hover:underline dark:text-white"
                          >
                            {item.route}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}

            <div className="hidden lg:block">
              <h5 className="text-neurtal-dark-2 text-md mb-4 font-semibold md:mb-[36px]">
                Sign Up For Newsletter
              </h5>
              <div className="item flex h-[46px] w-full max-w-[283px] items-center justify-start">
                <Input
                  className="border-r-none h-[46px] rounded-r-none border-r-0 border-r-transparent bg-transparent active:border-transparent"
                  placeholder="Enter your email"
                  onChange={(event) => setValues(event.target.value)}
                  value={values}
                />
                <Button
                  variant="primary"
                  className="h-full hover:bg-destructive"
                  onClick={handleSubmit}
                >
                  {isPending ? (
                    <span className="flex items-center gap-x-2">
                      <span className="animate-pulse">Loading</span>{' '}
                      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                    </span>
                  ) : (
                    'Subscibe'
                  )}
                </Button>
              </div>
            </div>

            <div className="lg:hidden">
              <h5 className="text-neurtal-dark-2 mb-[10px] text-[20px] font-semibold">
                Follow Us
              </h5>
              <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
                {socialLinks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="hover:bg-default flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary p-1 md:h-10 md:w-10"
                    >
                      <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-default h-[1px] w-full"></div>
      <div className="px-4">
        <div className="mx-auto block w-full max-w-[1200px] items-center justify-between pb-[30px] pt-4 md:pt-[27px] lg:flex">
          <div className="hidden lg:block">
            <div className="flex w-full max-w-[116px] items-center justify-between gap-1 md:max-w-[212px]">
              {socialLinks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full bg-primary p-1 hover:bg-destructive md:h-10 md:w-10"
                  >
                    <item.icon className="h-[10px] w-[10px] text-white md:h-4 md:w-4" />
                  </div>
                )
              })}
            </div>
          </div>
          <span className="text-stroke-colors-stroke flex items-center justify-center text-center text-xs font-semibold">
            <Copyright className="text-stroke-colors-stroke h-5 w-5" />
            2024 All Rights Reserved
          </span>
          <div className="hidden lg:block">
            <ul className="flex items-center justify-between gap-[13px]">
              {footerBottom.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-neutral-dark-2 cursor-pointer text-sm transition-colors duration-300 hover:text-primary hover:underline"
                    >
                      {item.route}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
