import React from 'react'
import MyNav from '../components/MyNav'
import Footer from '../components/Footer'

export default function MainLayout({children}) {
  return (
    <>
    <MyNav />
    {children}
    <Footer />
    </>
  )
}
