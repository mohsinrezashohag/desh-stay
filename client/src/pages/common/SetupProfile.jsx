import { Link } from 'react-router-dom'
import logo from '../../assets/logo_black.png'
import userIcon from '../../assets/user-solid.svg'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const SetupProfile = () => {
  const user = useSelector((state) => state.user.userInfo)

  // handling the form
  const [userInfo, setUserInfo] = useState({
    bio: user?.bio || '',
    profession: user?.profession || '',
    presentAddress: user?.presentAddress || '',
    permanentAddress: user?.permanentAddress || '',
    phnNumber: user?.phnNumber || '',
    dateOfBirth: user?.dateOfBirth || '',
  })

  const handleImageUpload = () => {}
  return (
    <section className='max-width'>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-16'>
        <div className='w-1/5'>
          <Link to='/'>
            <img className='h-[100px] mb-10 mb:mb-0 ' src={logo} alt='' />
          </Link>

          <div className='flex flex-col items-center mt-32'>
            <label
              htmlFor='imageUpload'
              className='bg-gray-200 p-20 rounded-md cursor-pointer'
            >
              <img className='mx-auto' src={userIcon} width={60} alt='' />
              <span className='block mb-2 text-center pt-4'>
                Click to choose image
              </span>

              <input
                type='file'
                id='imageUpload'
                className='hidden'
                onChange={(e) => handleImageUpload(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        <div className='w-[70%]'>
          <div className='text-left'>
            <h1 className='text-5xl font-bold text-bl uppercase  '>
              Setup Your Profile
            </h1>
          </div>

          <form className='flex flex-col mt-20'>
            <input
              value={userInfo?.bio}
              onChange={(e) =>
                setUserInfo({ ...userInfo, bio: e.target.value })
              }
              className='input-border px-3 py-4 w-[70%]'
              type='text'
              placeholder='Your Bio'
            />
            <input
              value={userInfo?.profession}
              onChange={(e) =>
                setUserInfo({ ...userInfo, profession: e.target.value })
              }
              className='input-border px-3 py-4 w-[70%]'
              type='text'
              placeholder='Profession'
            />
            <input
              value={userInfo?.presentAddress}
              onChange={(e) =>
                setUserInfo({ ...userInfo, presentAddress: e.target.value })
              }
              className=' input-border px-3 py-4 w-[70%]'
              type='text'
              placeholder='Present Address'
            />
            <input
              value={userInfo?.permanentAddress}
              onChange={(e) =>
                setUserInfo({ ...userInfo, permanentAddress: e.target.value })
              }
              className=' input-border px-3 py-4 w-[70%]'
              type='text'
              placeholder='Permanent Address'
            />
            <input
              value={userInfo?.phnNumber}
              onChange={(e) =>
                setUserInfo({ ...userInfo, phnNumber: e.target.value })
              }
              className=' input-border px-3 py-4 w-[70%]'
              type='number'
              placeholder='+880 (update mobile number)'
            />
            <input
              value={userInfo?.dateOfBirth}
              onChange={(e) =>
                setUserInfo({ ...userInfo, dateOfBirth: e.target.value })
              }
              className=' input-border px-3 py-4 w-[70%]'
              type='date'
              placeholder='Date of birth'
            />

            <div className='w-full md:w-[70%] py-6'>
              <p className=''>
                By selecting update and continue, I agree to bangla bell’s Terms
                of Service, Payments Terms of Service, and Nondiscrimination
                Policy and acknowledge the Privacy Policy
              </p>
            </div>
          </form>
          <button type='submit' className='rounded-btn uppercase'>
            Update and Continue
          </button>
        </div>
      </div>
    </section>
  )
}

export default SetupProfile
