"use client"
import { useState } from 'react'

import Header from './components/Header'
import Stat from './components/Stat'

const stats = [
  { 
    name: 'Total Revenue', 
    stat: '$27,263', 
    change: '12%', 
    changeType: 'increase',
    imgSrc: 'https://res.cloudinary.com/dz7jmo1mr/image/upload/v1686952511/money_ulxdsa.png', 
    alt: 'money' 
  },
  { 
    name: 'Total Clients', 
    stat: '10',
    change: '2.02%', 
    changeType: 'increase',
    imgSrc: 'https://res.cloudinary.com/dz7jmo1mr/image/upload/v1686953595/users_jef5rw.svg',
    alt: 'clients' 
  },
  { 
    name: 'Active Clients', 
    stat: '3',
    change: '4.05%', 
    changeType: 'decrease',
    imgSrc: 'https://res.cloudinary.com/dz7jmo1mr/image/upload/v1686952480/active_zzjavt.svg',
    alt: 'active' 
  },
  { 
    name: 'Churn', 
    stat: '24.57%',
    change: '4.05%', 
    changeType: 'increase',
    imgSrc: 'https://res.cloudinary.com/dz7jmo1mr/image/upload/v1686952480/loss-chart_bzvury.svg',
    alt: 'churn' 
  },
]

// @ts-ignore
export default function Home(props) {
  // TODO: need to figure out how to pass down props and set the sidebar open
  // TODO: how can we use the same header component but change the title?

  console.log('props: ', props.color)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="lg:pl-72">
          <Header title={"Insights Dashboard"} setSidebarOpen={setSidebarOpen} />

          <main className="p-10">
            <div>
              {/* <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3> */}
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
                {stats.map((item) => (
                  <Stat key={item.name} item={item} />
                ))}
              </dl>
            </div>
          </main>
        </div>
    </>
  )
}
