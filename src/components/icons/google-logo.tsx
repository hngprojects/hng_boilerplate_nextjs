import { cn } from '~/utils'
import React, { forwardRef } from 'react'
export interface SVGProps extends React.SVGAttributes<SVGSVGElement> {
  children?: React.ReactNode
}

const GoogleLogo = forwardRef<SVGSVGElement, SVGProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('size-6', className)}
        ref={ref}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.44 14.3182C27.44 13.3255 27.3509 12.371 27.1854 11.4546H14V16.87H21.5345C21.21 18.62 20.2236 20.1028 18.7409 21.0955V24.6082H23.2654C25.9127 22.1709 27.44 18.5819 27.44 14.3182Z"
          fill="#4285F4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9998 28C17.7798 28 20.9489 26.7464 23.2653 24.6082L18.7407 21.0955C17.4871 21.9354 15.8835 22.4318 13.9998 22.4318C10.3535 22.4318 7.26713 19.9691 6.16622 16.66H1.48895V20.2873C3.79259 24.8627 8.52713 28 13.9998 28Z"
          fill="#34A853"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.16636 16.66C5.88636 15.82 5.72726 14.9227 5.72726 14C5.72726 13.0773 5.88636 12.18 6.16636 11.34V7.71274H1.48909C0.540908 9.60274 0 11.7409 0 14C0 16.2591 0.540908 18.3973 1.48909 20.2873L6.16636 16.66Z"
          fill="#FBBC05"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.9998 5.56817C16.0553 5.56817 17.9007 6.27454 19.3517 7.66181L23.3671 3.64636C20.9426 1.38727 17.7735 0 13.9998 0C8.52712 0 3.79259 3.13727 1.48895 7.71272L6.16622 11.34C7.26713 8.0309 10.3535 5.56817 13.9998 5.56817Z"
          fill="#EA4335"
        />
      </svg>
    )
  }
)

GoogleLogo.displayName = 'GoogleLogo'
export default GoogleLogo
