import React from 'react'
import Footer from '../../components/common/Footer'
import { Link } from 'react-router-dom'
import SecondHeader from '../../components/common/SecondHeader'
import { setPropertyToStore } from '../../rtk/features/property/propertySlice'
import { useDispatch } from 'react-redux'
import { useGetAllPropertyQuery } from '../../rtk/features/property/propertyApi'
import ApartmentCard from '../../components/common/ApartmentCard'

const Listings = () => {
  const dispatch = useDispatch()
  // load property
  const { data: allProperties, isLoading, isError } = useGetAllPropertyQuery()
  const properties = allProperties?.data
  if (properties) {
    dispatch(setPropertyToStore(properties))
  }

  return (
    <>
      <SecondHeader></SecondHeader>
      <div className='max-width'>
        {/* Breadcrumb */}
        <div className='flex mt-6' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <Link
                to='/'
                className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <Link
                  to='/your-trips'
                  className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Recent trips
                </Link>
              </div>
            </li>
          </ol>
        </div>

        <div className='pb-32'>
          <h1 className='text-3xl uppercase font-bold text-bl text-center py-10'>
            Explore Our Exciting Deals
          </h1>

          {/*  listings */}
          <section className='max-width mt-10 '>
            <div className='grid grid-cols-5 gap-4'>
              {properties ? (
                properties?.map((property, index) => (
                  <ApartmentCard
                    key={index}
                    property={property}
                  ></ApartmentCard>
                ))
              ) : (
                <p>No Property Available</p>
              )}
            </div>

            <div className='join mx-auto items-center'>
              <button className='join-item btn'>⬅️</button>
              <button className='join-item btn'>1</button>
              <button className='join-item btn btn-active'>2</button>
              <button className='join-item btn'>3</button>
              <button className='join-item btn'>4</button>
              <button className='join-item btn'>➡️</button>
            </div>
          </section>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Listings
