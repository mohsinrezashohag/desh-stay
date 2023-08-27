import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { useDispatch } from 'react-redux'
import { setSearchInfoToStore } from '../../rtk/features/search/searchSlice'

import plusIcon from '../../assets/circle-plus-solid.svg'
import minusIcon from '../../assets/circle-minus-solid.svg'

const HeaderSearch = () => {
  // handle date
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openDate, setOpenDate] = useState(false)

  // handle search
  const [searchInfo, setSearchInfo] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    guestLimit: 1,
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchInfo)
    dispatch(setSearchInfoToStore(searchInfo))
    navigate('/search-result')
  }

  return (
    <>
      <form
        onSubmit={handleSearch}
        className='flex flex-col md:flex-row justify-center md:items-end gap-x-6 w-full max-width py-7 md:mt-10 px-10 md:px-0'
      >
        <div className='rounded-sm w-80 md:w-auto'>
          <h1 className='text-left text-lg uppercase font-semibold py-2'>
            Select Destination
          </h1>
          <input
            required
            className='text-black w-80 md:w-[250px] py-3 rounded-sm'
            type='text'
            placeholder='Write your destination'
            onChange={(e) =>
              setSearchInfo({ ...searchInfo, destination: e.target.value })
            }
          />
        </div>

        <div className='relative w-80 md:w-[400px] rounded-sm'>
          <h1 className='text-left text-lg uppercase font-semibold py-2'>
            Set your desired date
          </h1>
          <div
            className='text-left uppercase text-gr px-3 text-black w-auto py-3 rounded-sm bg-white cursor-pointer'
            onClick={() => setOpenDate(!openDate)}
          >
            <p>
              {format(date[0].startDate, 'MM-dd-yyyy')}
              <span className='mx-2'> - </span>
              {format(date[0].endDate, 'MM-dd-yyyy')}
            </p>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => {
                setDate([item.selection])
                setSearchInfo({
                  ...searchInfo,
                  startDate: format(item.selection.startDate, 'MM-dd-yyyy'),
                  endDate: format(item.selection.endDate, 'MM-dd-yyyy'),
                })
              }}
              ranges={date}
              className='date mt-12 bg-gray-300 absolute left-0'
              minDate={new Date()}
            />
          )}
        </div>

        <div className='rounded-sm w-80 md:w-auto'>
          <h1 className='text-lg uppercase font-semibold py-2'>
            Set Guest Number
          </h1>
          <div className='flex gap-x-4 bg-white text-black px-4 py-3 b-0'>
            <img
              onClick={() =>
                setSearchInfo({
                  ...searchInfo,
                  guestLimit: searchInfo.guestLimit - 1,
                })
              }
              className='cursor-pointer'
              src={minusIcon}
              width={20}
              alt=''
            />

            <p className='text-gr px-4'>{searchInfo.guestLimit}</p>

            <img
              onClick={() =>
                setSearchInfo({
                  ...searchInfo,
                  guestLimit: searchInfo.guestLimit + 1,
                })
              }
              className='cursor-pointer'
              src={plusIcon}
              width={20}
              alt=''
            />
          </div>
        </div>

        <div className='bg-white py-3 rounded-sm cursor-pointer px-3 mt-8 md:mt-0 w-40 md:w-auto'>
          <button type='submit' className='text-gr'>
            Search Now <span className='emoji'>🔍</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default HeaderSearch
