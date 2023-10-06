import { Link } from 'react-router-dom'
//components
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer'
// images
import apartment from '../../assets/apartment.jpg'

// icons
import rattingIcon from '../../assets/ratting.svg'
import bedIcon from '../../assets/bed-solid.svg'
import userIcon from '../../assets/user-solid.svg'

import {
  useGetAllWishlistQuery,
  useGetMyWishlistQuery,
  useRemoveFromWishListMutation,
} from '../../rtk/features/wishlist/wishlistApi'
import { useSelector } from 'react-redux'
import Loading from '../../components/common/Loading'
import { useEffect } from 'react'

const Wishlist = () => {
  const user = useSelector((state) => state.user.userInfo)

  const {
    data: myWishlist,
    isLoading,
    isError,
  } = useGetMyWishlistQuery(user?._id)
  const [deleteWishlistItem, { isSuccess }] = useRemoveFromWishListMutation()

  useEffect(() => {
    if (isSuccess) {
      window.location.reload()
    }
  }, [isSuccess])

  // decide what to render
  let content
  if (isLoading && !isError) {
    content = <Loading></Loading>
  }

  if (!isLoading && !isError && myWishlist?.data) {
    myWishlist?.data?.length > 0
      ? (content = (
          <div>
            {myWishlist?.data?.map((item, index) => (
              <div
                key={index}
                className='flex items-start gap-6 shadow-md rounded-md p-3 mt-6'
              >
                <img
                  className='rounded-md'
                  src={`${import.meta.env.VITE_SERVER_URL}/uploaded-images/${
                    item?.property?.thumbnail
                  }`}
                  width={250}
                  alt=''
                />

                <div className='flex justify-between gap-x-80'>
                  <div>
                    <h1 className='text-2xl font-semibold capitalize'>
                      {item?.property?.title}
                    </h1>
                    <div className='flex items-center gap-2 mt-2'>
                      <p>5.0</p>
                      <div className='flex gap-0.5 '>
                        <img src={rattingIcon} width={15} alt='' />
                        <img src={rattingIcon} width={15} alt='' />
                        <img src={rattingIcon} width={15} alt='' />
                        <img src={rattingIcon} width={15} alt='' />
                        <img src={rattingIcon} width={15} alt='' />
                      </div>
                    </div>

                    <div className='flex gap-2 underline text-bl mt-3'>
                      <p>{item?.property?.detailsAddress?.city || 'Unknown'}</p>
                      <p>Show On map</p>
                    </div>

                    <div className='flex gap-6 mt-3'>
                      <div className='flex gap-2 items-center'>
                        <img src={userIcon} width={20} alt='' />
                        <p className='text-sm'>
                          {item?.property?.basics?.guestLimit || 'No limit'}
                          <span> Persons</span>
                        </p>
                      </div>
                      <div className='flex gap-2 items-center '>
                        <img src={bedIcon} width={25} alt='' />
                        <p className='text-sm'>
                          {item?.property?.basics?.bedroom || 'Unknown'}
                          <span> Bedrooms</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='ps-80'>
                    <h1 className='text-4xl font-semibold'>
                      $ {item?.property?.costPerNight || 0.0}
                    </h1>
                    <div className='flex gap-x-2'>
                      <Link to={`/apartment-details/${item?.property?._id}`}>
                        <button className='primary-btn mt-10 h-[40px] w-[150px]'>
                          Show Details
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteWishlistItem(item?._id)}
                        className='primary-btn mt-10 h-[40px] w-[150px] bg-red-500'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      : (content = (
          <p className='text-2xl uppercase text-red-400 text-center my-auto'>
            No product added to wishlist
          </p>
        ))
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
                  wishlist
                </Link>
              </div>
            </li>
          </ol>
        </div>

        <div className='pb-32'>
          <h1 className='text-3xl uppercase font-bold text-bl text-center py-20'>
            Your wishlist
          </h1>

          {content}
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Wishlist
