/* eslint-disable no-unsafe-optional-chaining */
import { useState } from 'react'
//components import
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer'

// incon import
import LocationIcon from '../../assets/location-dot-solid.svg'
import rattingIcon from '../../assets/ratting.svg'
import bedIcon from '../../assets/bed-solid.svg'
import bathroomIcon from '../../assets/sink-solid.svg'
import guestIcon from '../../assets/person-circle-question-solid.svg'
import heartIconBlack from '../../assets/heart-solid-black.svg'
import heartIconFieldBlack from '../../assets/heart-solid-black.svg'

// import userIcon from '../../assets/user-solid.svg'
import verifyIcon from '../../assets/verified.png'
import profilePic from '../../assets/reza.jpg'
import { Link, useParams } from 'react-router-dom'
import { useGetPropertyDetailsQuery } from '../../rtk/features/property/propertyApi'
import Loading from '../../components/common/Loading'
import { useGetAllWishlistQuery } from '../../rtk/features/wishlist/wishlistApi'
import { useSelector } from 'react-redux'

const ApartmentDetails = () => {
  const params = useParams()
  const { id } = params
  const {
    data: propertyDetails,
    isLoading,
    isError,
  } = useGetPropertyDetailsQuery(id)
  const [activeImg, setActiveImage] = useState(null)

  //wishlist related activities
  const user = useSelector((state) => state.user.userInfo)
  const { data: allWishlist } = useGetAllWishlistQuery()
  const myWishlist = allWishlist?.data?.filter(
    (item) => item?.user === user?._id
  )
  //check it's on my wishlist or not
  const addedToWishlist = myWishlist?.find((item) => item.property?._id === id)

  let content
  if (isLoading) {
    content = <Loading></Loading>
  }
  if (!isLoading && propertyDetails) {
    const description = null
    const reviews = null

    const {
      title,
      costPerNight,
      property_type,
      room_type,
      detailsAddress,
      basics,
      facilities,
      standoutAmenities,
      safetyItems,
      thumbnail,
      extraImages,
    } = propertyDetails?.data || {}
    const images = {
      // img1: apartment1,
      // img2: apartment2,
      // img3: apartment3

      img1: `${import.meta.env.VITE_SERVER_URL}/uploaded-images/${
        extraImages[0]
      }`,
      img2: `${import.meta.env.VITE_SERVER_URL}/uploaded-images/${
        extraImages[1]
      }`,
      img3: `${import.meta.env.VITE_SERVER_URL}/uploaded-images/${
        extraImages[2]
      }`,
    }

    content = (
      <div className='max-width'>
        <div className=''>
          <div className='mt-10'>
            <h1 className='text-4xl font-bold text-bl capitalize'>{title}</h1>
            <div className='flex justify-between'>
              <div className='flex items-center gap-x-4 mt-6'>
                <img src={LocationIcon} width={20} alt='' />
                <p>Near Banani Club, Chairman Bari, Banani</p>
              </div>

              {addedToWishlist ? (
                <div className='flex items-center gap-x-4 mt-6'>
                  <img src={heartIconFieldBlack} width={20} alt='' />
                  <p>Added to wishlist</p>
                </div>
              ) : (
                <div className='flex items-center gap-x-4 mt-6'>
                  <img src={heartIconBlack} width={20} alt='' />
                  <p>Add to wishlist</p>
                </div>
              )}
            </div>
          </div>

          <div className='mt-10 w-full'>
            <img
              src={
                activeImg
                  ? activeImg
                  : `${
                      import.meta.env.VITE_SERVER_URL
                    }/uploaded-images/${thumbnail}`
              }
              className='h-[500px] w-full rounded-md'
              alt=''
            />
            <div className='flex  gap-x-6 mt-5 w-[60%]'>
              <img
                onClick={() => setActiveImage(images.img1)}
                src={images.img1}
                className='h-[80px] w-[150px]  cursor-pointer rounded-sm'
                alt=''
              />
              <img
                onClick={() => setActiveImage(images.img2)}
                src={images.img2}
                className='h-[80px] w-[150px]  cursor-pointer rounded-sm'
                alt=''
              />
              <img
                onClick={() => setActiveImage(images.img3)}
                src={images.img3}
                className='h-[80px] w-[150px]  cursor-pointer rounded-sm'
                alt=''
              />
            </div>
            <p className='text-gr mt-2'>Select image preview</p>
          </div>
        </div>

        <div className='flex justify-between mt-10'>
          <div>
            <h1 className='text-2xl uppercase font-semibold'>
              {title} - hosted by{' '}
              <span className='text-bl cursor-pointer'>Mohsin reza</span>
            </h1>
            <h1 className='py-2 text-gr'>
              Budget per night{' '}
              <span className='text-bl ms-4'>
                {costPerNight ? costPerNight.toFixed(2) : 0.0} Taka
              </span>
            </h1>

            <div className='flex gap-x-16 my-6'>
              <div className='flex gap-x-4 items-center '>
                <img src={bedIcon} width={30} alt='' />
                <p>{basics.bedroom} bedroom</p>
              </div>

              <div className='flex gap-x-4 items-center '>
                <img src={bathroomIcon} width={30} alt='' />
                <p>{basics.bathroom} bathroom</p>
              </div>

              <div className='flex gap-x-4 items-center '>
                <img src={guestIcon} width={30} alt='' />
                <p>{basics.guestLimit} Guest Limit</p>
              </div>
            </div>
          </div>

          <div className='flex-between gap-3'>
            <img
              className='h-[80px] w-[80px] rounded-full border-b-4 border-r-4 '
              src={profilePic}
              alt=''
            />
            <div>
              <p className='text-bl uppercase'>View Profile</p>
              <p className='text-bl uppercase'>Send Message</p>
            </div>
          </div>
        </div>

        <hr className='pb-10' />

        <div className='flex-between items-start'>
          <div className='w-3/5'>
            <div className='mb-10'>
              <h1 className='uppercase font-semibold text-2xl'>
                About this place
              </h1>
              <p className='text-gr'>
                {description ? (
                  description
                ) : (
                  <span className='block py-4 text-red-500'>
                    Nothing special written
                  </span>
                )}
              </p>
            </div>

            <div className='mb-10'>
              <h1 className='text-2xl uppercase font-semibold'>
                what this place offers
              </h1>

              <div className='flex flex-col gap-y-4 mt-4'>
                <div className='flex gap-x-4 items-center '>
                  <h1 className='uppercase'>FACILITIES</h1>
                  <div className='flex gap-x-6'>
                    {facilities.map((item, index) => (
                      <div
                        key={index}
                        className={`px-5 py-1 shadow-md rounded-md bg-gray-300 border-2 border-gray-400 `}
                      >
                        <p className='text-xs'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex gap-x-4 items-center '>
                  <h1 className='uppercase'>Safety Items</h1>
                  <div className='flex gap-x-6'>
                    {safetyItems.map((item, index) => (
                      <div
                        key={index}
                        className={`px-5 py-1 shadow-md rounded-md bg-gray-300 border-2 border-gray-400 `}
                      >
                        <p className='text-xs'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='flex gap-x-4 items-center '>
                  <h1 className='uppercase'>standout Amenities</h1>
                  <div className='flex gap-x-6'>
                    {standoutAmenities.map((item, index) => (
                      <div
                        key={index}
                        className={`px-5 py-1 shadow-md rounded-md bg-gray-300 border-2 border-gray-400 `}
                      >
                        <p className='text-xs'>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6'>
              <h1 className='text-2xl uppercase font-semibold'>
                See what customers says{' '}
              </h1>

              {reviews ? (
                <div>
                  <div className='flex items-center gap-x-2'>
                    <img src={rattingIcon} width={15} alt='' />
                    <h1 className='text-bl my-2'>
                      5.0 <span className='ms-2'>204 reviews</span>
                    </h1>
                  </div>

                  <div className='flex flex-col mt-6'>
                    <div className='mt-4'>
                      <div className='flex gap-3'>
                        <img
                          className='h-[60px] w-[60px] rounded-full border-b-4 border-r-4 '
                          src={profilePic}
                          alt=''
                        />
                        <div>
                          <h6 className='font-semibold'>Mohsin Reza Shohag</h6>
                          <p>01 January 2023</p>
                        </div>
                      </div>
                      <div>
                        <p className='text-gr'>
                          The property was as wonderful to live in as it appears
                          in the pictures.I thoroughly enjoyed my R&R here. It s
                          the perfect place to laze around and do nothing
                        </p>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <div className='flex gap-3'>
                        <img
                          className='h-[60px] w-[60px] rounded-full border-b-4 border-r-4 '
                          src={profilePic}
                          alt=''
                        />
                        <div>
                          <h6 className='font-semibold'>Mohsin Reza Shohag</h6>
                          <p>01 January 2023</p>
                        </div>
                      </div>
                      <div>
                        <p className='text-gr'>
                          The property was as wonderful to live in as it appears
                          in the pictures. I thoroughly enjoyed my R&R here. It
                          s the perfect place to laze around and do nothing
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className='primary-btn mt-6'>See All Reviews</button>
                </div>
              ) : (
                <div>
                  <p className='py-3 text-red-500'>No user review yet </p>
                </div>
              )}
            </div>
          </div>

          <div className='w-2/5'>
            <div className='px-10'>
              <div className='flex flex-col  justify-center bg-[#01257D] text-white py-6 rounded-md px-4'>
                <h1 className='text-3xl uppercase'>560 BDT / Night</h1>
                <p className='text-white text-left'>Property - {title}</p>
              </div>

              <div className='shadow-md px-2'>
                <div className='flex flex-col  gap-6 mt-10 '>
                  <div className='flex gap-x-6'>
                    <div className='w-50 me-2'>
                      <h1 className='capitalize  py-2 '>Arrival Date</h1>
                      <select
                        className='text-black w-[200px] py-2 rounded-md font-bold  text-center'
                        name=''
                        id=''
                      >
                        <option value='Dhaka' selected>
                          10/10/2023
                        </option>
                        <option value='Chittagong'>Chittagong</option>
                      </select>
                    </div>
                    <div className='w-50'>
                      <h1 className=' capitalize  py-2'>Departure Date</h1>
                      <select
                        className='text-black w-[200px] py-2 rounded-md font-bold text-center'
                        name=''
                        id=''
                      >
                        <option value='Dhaka' selected>
                          10/10/2023
                        </option>
                        <option value='Chittagong'>Chittagong</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <h1 className='capitalize  pt-2'>Pax</h1>
                    <select
                      className='text-black w-[200px] py-2 rounded-md font-bold '
                      name=''
                      id=''
                    >
                      <option value='Dhaka' selected>
                        0
                      </option>
                    </select>
                  </div>
                </div>

                <div className='py-4'>
                  <p className='uppercase font-semibold '>Pricing Breakdown</p>
                  <div className='flex justify-between my-2'>
                    <p>560 x 2 Nights</p>
                    <p>1120 BDT</p>
                  </div>
                  <div className='flex justify-between my-2'>
                    <p>Desh Stay service charge</p>
                    <p>300 BDT</p>
                  </div>
                  <div className='flex justify-between my-2 font-semibold'>
                    <p>Total</p>
                    <p>1420 BDT</p>
                  </div>
                  <p className='text-center uppercase font-semibold '>
                    Note : All taxes are included
                  </p>
                </div>

                <div className='bg-white p-3 rounded-full mt-6 cursor-pointer w-full'>
                  <Link to='/book-now'>
                    <button className='primary-btn w-full rounded-md'>
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* location part */}
        <div className='  mt-10'>
          <h1 className='text-2xl uppercase font-semibold mt-10'>
            Live location
          </h1>
          <iframe
            className='w-full h-96 mt-5 mb-40'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.120277646824!2d90.35348134445317!3d23.780872714598367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0be89363e87%3A0x3795036c15355c82!2sKallyanpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1688641577268!5m2!1sen!2sbd'
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </div>

        {/* profile part */}

        <div className='flex-between items-start'>
          <div className='w-1/2'>
            <div className='flex items-center gap-3'>
              <img
                className='h-[80px] w-[80px] rounded-full border-b-4 border-r-4 '
                src={profilePic}
                alt=''
              />
              <div>
                <h6 className='uppercase font-semibold text-2xl'>
                  Hosted by Reza
                </h6>
                <p className='text-gr uppercase font-semibold'>
                  Member Since January 2022
                </p>
              </div>
            </div>
            <div className='flex gap-x-3 mt-6'>
              <div className='flex gap-x-3'>
                <img src={rattingIcon} width={30} alt='' />
                <p className='text-gr'>103 ratting</p>
              </div>
              <div className='flex gap-x-3'>
                <img src={verifyIcon} width={30} alt='' />
                <p className='text-gr'>verified User</p>
              </div>
            </div>

            <div className='my-10'>
              <p>
                Hello, I am Ahmed. I live in Dhaka with my wife and two cousins,
                a cat and a dog.We all work together. We run a nature home stay,
                cafe and art space. We make dreadlocks and handmade macrame
                jewellery with amazing stones
              </p>
            </div>
          </div>

          <div className='text-left'>
            <h6 className='text-1xl font-semibold'>Response Rate : 100%</h6>
            <h6 className='text-1xl font-semibold'>Response Time : 1 hours</h6>

            <div className='flex gap-x-40 mt-32'>
              <button className='primary-btn'>Send a message</button>
              <h6 className='text-red-600 font-semibold'>Report profile</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <SecondHeader></SecondHeader>

      {content}

      <Footer></Footer>
    </div>
  )
}

export default ApartmentDetails
