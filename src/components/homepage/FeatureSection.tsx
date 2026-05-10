import Image from 'next/image'

import { FeaturesData } from '~/types/features'

export default function Features() {
  return (
    <div className="mx-auto max-w-[1200px]">
      <div className="flex flex-col items-center py-5 text-center">
        <span className="mb-3 rounded-md bg-[#FAFAFA] px-4 py-2.5 sm:mb-4 md:mb-5">
          Features
        </span>
        <p className="mb-4 text-center text-2xl font-medium sm:mb-6 md:mb-8 md:text-5xl md:leading-[55px]">
          Everything you need to stay <br /> protected
        </p>
        <p className="px-5 text-center text-base font-normal text-[#666666] sm:mb-6 md:mb-10 md:text-xl">
          One platform with everything. Every layer of your webstack{' '}
          <br className="hidden sm:block" /> backed up by real-time threat
          intelligence
        </p>
      </div>
      <div className="mx-auto mb-14 grid w-[80%] gap-6 sm:mx-6 sm:w-full sm:grid-cols-2 md:grid-cols-3">
        {FeaturesData.map(({ image, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-lg border border-[#EFEFEF] p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md bg-[#F4F8F5]">
              <Image
                src={image}
                alt={title}
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-[#666666]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
