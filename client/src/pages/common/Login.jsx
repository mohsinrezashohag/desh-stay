import logo from '../../assets/logo_black.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import tripsIllusion from '../../assets/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLoginMutation } from '../../rtk/features/user/userApi'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../rtk/features/user/userSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [loginNow, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation()

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  // handle normal login
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    loginNow(loginInfo)
      .unwrap()
      .then((res) => {
        const { userInfo, token } = res
        const result = { userInfo, token }
        localStorage.setItem('userInfo', JSON.stringify(result))
        dispatch(setUserInfo(result))
        navigate('/')
      })
      .catch((error) => {})
  }

  // handle google login

  const GoogleSignIn = () => {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      auth
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user
          console.log(`Logged in as ${user.displayName}`)
        })
        .catch((error) => {
          console.error(error)
        })
    }

    return (
      <section className='max-width flex-evenly items-center'>
        <div>
          <Link to='/'>
            <img className='h-[100px] mt-16' src={logo} alt='' />
          </Link>
          <div>
            <div>
              <h1 className='text-4xl font-bold uppercase mt-10'>Welcome</h1>

              <form onSubmit={handleLogin} className='flex flex-col' action=''>
                <input
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, email: e.target.value })
                  }
                  type='text'
                  placeholder='Username/Email'
                  className='input-border py-4  my-5   w-[500px]  px-3'
                />
                <input
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, password: e.target.value })
                  }
                  type='text'
                  placeholder='Password'
                  className='py-4  my-5 input-border w-[500px]  px-3'
                />
                <div className='flex gap-4 py-4'>
                  <button type='submit' className='rounded-btn'>
                    Login
                  </button>
                  <button className='text-bl uppercase font-semibold'>
                    Forgot Password
                  </button>
                </div>
              </form>

              <div>
                <h1 className='pt-10 pb-4 font-bold'>OR</h1>
                <div className='flex'>
                  <img
                    className='h-[30px] me-8 rounded-full'
                    src={facebook}
                    alt=''
                  />
                  <img
                    className='h-[30px] me-8 rounded-full'
                    src={google}
                    alt=''
                  />
                </div>
                <p className='py-3'>
                  New User?{' '}
                  <Link to='/register'>
                    <span className='text-bl cursor-pointer'>
                      Create an account
                    </span>
                  </Link>
                </p>

                <Link to='/register'>
                  {' '}
                  <button className='rounded-btn my-3'>Register</button>
                </Link>

                <div className='py-1'>
                  <p className='underline uppercase text-gray-400'>
                    Privacy Policy
                  </p>
                  <p className='underline uppercase text-gray-400'>
                    Terms & condition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img className='w-[600px]' src={tripsIllusion} alt='' />
        </div>
      </section>
    )
  }
}

export default Login
