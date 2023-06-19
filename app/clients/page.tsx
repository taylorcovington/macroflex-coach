"use client"
import { useState } from 'react'
import Header from '../components/Header'
import Link from 'next/link';

var clients = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    status: "Active",
    goal: "Lose weight"
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    status: "Inactive",
    goal: "Gain muscle"
  },
  {
    name: "Alex Johnson",
    email: "alexjohnson@example.com",
    status: "Active",
    goal: "Lose weight"
  },
  {
    name: "Barbara Welch",
    email: "bwelch@example.com",
    status: "Onboarding",
    goal: "Lose weight"
  }
];

const statuses = { 
  Active: 'bg-green-50 text-green-700 ring-green-600/20', 
  Inactive: 'bg-rose-50 text-rose-700 ring-rose-600/20', 
  Onboarding: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20' 
}

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// @ts-ignore
export default function Clients(props) {
  // TODO: need to figure out how to pass down props and set the sidebar open
  // TODO: how can we use the same header component but change the title?
  console.log('props: ', props.color)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div className="lg:pl-72">
          <Header title={"Clients"} setSidebarOpen={setSidebarOpen} />

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  {/* <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1> */}
                  <p className="mt-2 text-sm text-gray-700">
                    A list of all your clients, their status, and their current goal.
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    className="block rounded-md bg-cyan-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    Add client
                  </button>
                </div>
              </div>
              <div className="-mx-4 mt-8 sm:-mx-0">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Name
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                      >
                        Goal
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Status
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {clients.map((person) => (
                      <tr key={person.email} className="even:bg-gray-50 ">
                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none ">
                          {person.name}
                          <dl className="font-normal lg:hidden">
                            <dt className="sr-only">Email</dt>
                            <dd className="mt-1 truncate text-gray-700">{person.email}</dd>
                            <dt className="sr-only sm:hidden">Goal</dt>
                            <dd className="mt-1 truncate text-gray-500 sm:hidden">{person.goal}</dd>
                          </dl>
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{person.email}</td>
                        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.goal}</td>
                        {/* <td className="px-3 py-4 text-sm text-gray-500">{person.status}</td> */}
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                          {/* @ts-ignore */}
                          <span className={ classNames(statuses[person.status], 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset' )}>
                            {person.status}
                          </span>
                          {/* <div className={classNames(statuses[item.status], 'flex-none rounded-full p-1')}>
                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                          </div>
                        <div className="hidden text-white sm:block">{item.status}</div> */}
                        </td>
                        <td className="py-4 pl-3 pr-4 text-right text-sm font-medium ">
                          <Link href="/clients/239783240234780" className="text-cyan-600 hover:text-cyan-900">
                            Edit<span className="sr-only">, {person.name}</span>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
    </>
  )
}
