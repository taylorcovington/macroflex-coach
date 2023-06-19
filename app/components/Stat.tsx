import { CldImage } from 'next-cloudinary'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  item: {
    name: string
    stat: string
    change: string
    changeType: 'increase' | 'decrease'
    imgSrc: string
    alt: string
  }
}

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Stat = ({ item }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white px-4 py-5 border sm:p-6">
      <CldImage
        src={item.imgSrc}
        alt={item.alt}
        width={150}
        height={150}
        className="h-6 w-6 text-gray-400"
      />
      <dt className="mt-4 truncate text-sm font-medium text-gray-500">{item.name}</dt>

      <div className='flex gap-6'>
        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>

        {/* Stat Pill */}
        <div
          className={classNames(
            item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
            'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0 self-center'
          )}
        >
          {item.changeType === 'increase' ? (
            <ArrowUpIcon
              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
              aria-hidden="true"
            />
          ) : (
            <ArrowDownIcon
              className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
              aria-hidden="true"
            />
          )}

          <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
          {item.change}
          </div>
      </div>
    </div>
  )
}

export default Stat