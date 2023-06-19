"use client"

import Header from "@/app/components/Header"
import { useState } from "react"

interface Props {
  params: {
    clientId: string
  }
}

export default function Client({ params }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // TODO: use params.clientId to fetch client data

  return (
    <>
    <div className="lg:pl-72">
        <Header title={"John Doe"} setSidebarOpen={setSidebarOpen} />

        {/* CONTENT */}
        <div className="m-6 flex gap-7 flex-wrap">
          <div 
            className="grow min-w-[16rem] overflow-hidden rounded-lg bg-white px-4 py-5 border sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Progress</h3>
          </div>

          <div className="flex-none w-64  overflow-hidden rounded-lg bg-white px-4 py-5 border sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Notes</h3>
          </div>
          <div className="flex-none w-32  overflow-hidden rounded-lg bg-white px-4 py-5 border sm:p-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Profile</h3>
          </div>
        </div>
    </div>
    </>
  )
}