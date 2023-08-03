import ApartmentCard from '../../components/common/ApartmentCard';
import Header from '../../components/common/Header';

//third party package
import Slider from "react-slick";
// images
import dhaka from '../../assets/dhaka.jpg'
import rajshahi from '../../assets/rajshahi.jpg'
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';
import { useGetAllPropertyQuery } from '../../rtk/features/property/propertyApi';
import Loading from '../../components/common/Loading';


const Home = () => {

    // load property
    const { data, isLoading, isError } = useGetAllPropertyQuery()
    const properties = data?.data












    // handle search
    const navigate = useNavigate()
    const handleSearch = () => {
        navigate('/search-result')
    }


    return (
        <>
            <section className='hero h-full w-[100%]'>
                <Header></Header>

                <div className='max-width flex-between pt-16'>
                    <div className=''></div>

                    <div className='py-8'>
                        <h1 className='text-6xl font-bold uppercase text-white'>
                            Home is wherever
                            <br />
                            we take you
                        </h1>
                        <p className='heading-details pt-3 pb-20'>
                            Welcome to Desh Stay !! Discover our handpicked, authentic
                            home stays.
                            <br />
                            Experience the comforts of a real homein enchanting
                            destinations.
                            <br />
                            Personalized hosting for lasting memories.
                            <br />
                            Escape and
                            indulge today
                        </p>
                    </div>
                </div>

                <div className='text-center text-white py-10 pb-40'>
                    <h1 className='text-4xl uppercase font-bold'>
                        Find Your Next Stay
                    </h1>

                    <div className='flex-center gap-3 py-6 mt-10'>
                        <div className=''>
                            <h1 className='text-3px uppercase font-semibold py-2 '>
                                Select Destination
                            </h1>
                            <input
                                className='text-black w-[250px] py-3 rounded-full'
                                type='text'
                                placeholder='write your destination'
                            />

                            {/* <select className='text-black w-[250px] py-5 rounded-full font-bold  text-center' name="" id="">
                                <option value="Dhaka" selected>WHERE TO</option>
                                <option value="Chittagong" >Chittagong</option>
                            </select> */}
                        </div>

                        <div>
                            <h1 className='uppercase font-semibold py-2'>Arrival Date</h1>
                            <input
                                className='text-black w-[250px] py-3 rounded-full  text-center'
                                type='date'
                                name='arrival-date'
                                id='arrival-date'
                            />
                        </div>

                        <div>
                            <h1 className='uppercase font-semibold py-2'>Departure Date</h1>
                            <input
                                className='text-black w-[250px] py-3 rounded-full  text-center'
                                type='date'
                                name='arrival-date'
                                id='arrival-date'
                            />
                        </div>

                        <div>
                            <h1 className='text-3px uppercase font-semibold py-2'>
                                Total Guest
                            </h1>
                            <input
                                className='text-black w-[250px] py-3 rounded-full  text-center'
                                type='Number'
                                name='guest-number'
                                id='guest-number'
                                placeholder='0'
                            />
                        </div>

                        <div
                            onClick={handleSearch}
                            className='bg-white p-3 rounded-full mt-10 cursor-pointer'
                        >
                            <p className=' text-black'>Search Now 🔍</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* home listing section */}
            {isLoading ? (
                <Loading></Loading>
            ) : (
                <section className='max-width mt-10 '>
                    <h1 className='text-2xl font-semibold text-bl uppercase text-center'>Our Available Deals</h1>
                    <div className='grid grid-cols-5 gap-4 mt-16'>
                        {properties &&
                            properties?.map((property, index) => (
                                <ApartmentCard
                                    key={index}
                                    property={property}
                                ></ApartmentCard>
                            ))}
                    </div>

                    <div className='flex-center py-16'>
                        <button className='primary-btn mx-auto px-20'>
                            Show More Deals
                        </button>
                    </div>
                </section>
            )}

            {/* Desired district section */}
            {/* <section className='max-width py-10 '>


                <h1 className='text-6xl font-bold uppercase text-center pb-16'>Pick your desired district</h1>

                <div className='grid grid-cols-3 gap-24 mx-auto '>

                    <div>
                        <img className='h-[500px] w-[400px] absolute' src={dhaka} alt="dhaka_district" />
                        <div className='bg-black text-white px-5 py-3 inline-block rotate-90 relative z-50 mt-[397px]' >
                            <h1 className='uppercase text-3xl font-bold'>Dhaka</h1>
                        </div>
                    </div>


                    <div className='relative'>
                        <img className='h-[500px] w-[400px] rounded-xl' src={dhaka} alt="dhaka_district" />
                        <div className='absolute rotate-90  z-50 bottom-0 left-0 mb-[88px]' >
                            <h1 className='uppercase text-3xl font-bold bg-black text-white px-5  py-3 inline-block'>Chittagong</h1>
                        </div>
                    </div>


                    <div className='relative'>
                        <img className='h-[500px] w-[400px] rounded-xl' src={rajshahi} alt="dhaka_district" />
                        <div className='absolute rotate-90  z-50 bottom-0 left-0 mb-[51px]' >
                            <h1 className='uppercase text-3xl font-bold bg-black text-white px-5  py-3 inline-block'>Khulna</h1>
                        </div>
                    </div>
                </div>



                <div className='flex-evenly mt-3'>


                    <div className='relative rounded-xl'>
                        <img className='h-[300px] w-[600px] rounded-xl' src={rajshahi} alt="dhaka_district" />
                        <div className='absolute rotate-90  z-50 bottom-0 left-0 mb-[53px]' >
                            <h1 className='uppercase text-3xl font-bold bg-black text-white px-5  py-3 inline-block'>Khulna</h1>
                        </div>
                    </div>

                    <div className='relative rounded-xl'>
                        <img className='h-[300px] w-[600px] rounded-xl' src={rajshahi} alt="dhaka_district" />
                        <div className='absolute rotate-90  z-50 bottom-0 left-0 mb-[53px]' >
                            <h1 className='uppercase text-3xl font-bold bg-black text-white px-5  py-3 inline-block'>Khulna</h1>
                        </div>
                    </div>

                </div>

            </section > */}

            {/* occasion section */}
            {/* <section className='max-width'>
                <h1 className='text-5xl font-bold uppercase text-center pt-28 pb-10'>Explore ongoing occasion <br />with Desh Stay </h1>

                <div className='pt-10'>
                    <Slider {...settings}  >


                        <div className='festive-bg h-[300px] w-[300px]  rounded-xl cursor-pointer mx-4'>
                            <h1 className='bg-black text-center text-white py-6 top-0 font-bold uppercase rounded-t-xl '>Eid vacation 🔥</h1>
                        </div>


                        <div className='festive-bg h-[300px] w-[300px] text-center rounded-xl cursor-pointer mx-4'>
                            <h1 className='bg-black text-white py-6 top-0 font-bold uppercase rounded-t-xl '>Eid vacation 🔥</h1>
                        </div>



                        <div className='festive-bg h-[300px] w-[300px] text-center rounded-xl cursor-pointer mx-4'>
                            <h1 className='bg-black text-white py-6 top-0 font-bold uppercase rounded-t-xl '>Eid vacation 🔥</h1>
                        </div>

                        <div className='festive-bg h-[300px] w-[300px] text-center rounded-xl cursor-pointer mx-4'>
                            <h1 className='bg-black text-white py-6 top-0 font-bold uppercase rounded-t-xl '>Eid vacation 🔥</h1>
                        </div>



                        <div className='festive-bg h-[300px] w-[300px] text-center rounded-xl cursor-pointer mx-4'>
                            <h1 className='bg-black text-white py-6 top-0 font-bold uppercase rounded-t-xl '>Eid vacation 🔥</h1>
                        </div>
                    </Slider>
                </div >
            </section > */}

            {/* join our comunity section */}
            <section className='join-community flex  flex-col items-center mt-28 text-center text-white'>
                <h1 className='text-4xl font-bold uppercase pt-28 pb-16'>
                    become a part of our <br />
                    <span className='text-6xl font-bold uppercase'>COMMUNITY</span>
                </h1>
                <h2 className='text-2xl font-semibold uppercase'>
                    SUBSCRIBE TO OUR NEWSLETTER
                </h2>

                <form className='pt-16 pb-28'>
                    <input
                        className='py-6 w-96 rounded-full px-6 uppercase font-semibold'
                        placeholder='Your Email'
                        type='email'
                    />
                    <button className='primary-btn mx-10' type='submit'>
                        Subscribe
                    </button>
                </form>
            </section>





            <Footer></Footer>
        </>
    )
};

export default Home;