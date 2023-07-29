import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState } from 'react';


// components
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer';
// icons
import homeIcon from '../../assets/house-solid.svg'
import apartmentIcon from '../../assets/building-solid.svg'
import ecoIcon from '../../assets/pagelines.svg'
import { setPropertyToStore } from '../../rtk/features/property/propertySlice';


const ListProperty = () => {

    const [property, setProperty] = useState({
        title: "",
        costPerNight: "",
        property_type: "",
        room_type: "",
        location: "",
        detailsAddress: {
            division: "",
            city: "",
            zipCode: "",
            roadNo: "",
            apartmentNo: "",
            streetAddress: ""
        },

        basics: {
            guestLimit: 5,
            bedroom: 5,
            bathroom: 5
        },
        facilities: ["food", "wifi", "parking"],
        standoutAmenities: ["pool", "gym equipment"],
        safetyItems: ["smock alarm", "first aid kid"],
        thumbnail: "",
        extraImages: {
            imageOne: "",
            imageTwo: "",
            imageThree: ""
        }

    })

    // property type selectionHandle
    const setPropertyType = (type) => {
        setProperty({ ...property, property_type: type })
    }
    // room type selectionHandle
    const setRoomType = (type) => {
        setProperty({ ...property, room_type: type })
    }


    // handle next steep 
    const dispatch = useDispatch()
    const handleNextStep = () => {
        console.log(property);
        localStorage.setItem('property', JSON.stringify(property))
        dispatch(setPropertyToStore(property))
    }



    return (
        <>
            <SecondHeader></SecondHeader>
            <div className='max-width'>


                {/* Breadcrumb */}
                <div className="flex mt-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">List property</Link>
                            </div>
                        </li>
                    </ol>
                </div>




                <div>
                    <h1 className='text-3xl uppercase text-bl font-semibold pt-20 pb-5'>List your property</h1>

                    <div>
                        <form action="#" className='w-[50%]'>

                            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div className="sm:col-span-2 mt-4">
                                    <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Set Apartment Title</h1>
                                    <input onChange={e => setProperty({ ...property, title: e.target.value })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                </div>
                            </div>

                            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
                                <div className="sm:col-span-2 mt-4">
                                    <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Set Apartment Price (Per Night)</h1>
                                    <input onChange={e => setProperty({ ...property, costPerNight: e.target.value })} type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                </div>
                            </div>

                        </form>
                    </div>

                    {/* property type */}
                    <div>
                        <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Select property type</h1>

                        <div className='flex gap-x-6'>
                            <div onClick={() => setPropertyType("House")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.property_type === "House" ? 'bg-[#01257D] text-white' : ""}`}>
                                <img src={homeIcon} width={20} alt="" />
                                <p>House</p>
                            </div>

                            <div onClick={() => setPropertyType("Apartment")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.property_type === "Apartment" ? 'bg-[#01257D] text-white' : ""}`}>
                                <img src={apartmentIcon} width={20} alt="" />
                                <p>Apartment</p>
                            </div>

                            <div onClick={() => setPropertyType("Eco")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.property_type === "Eco" ? 'bg-[#01257D] text-white' : ""}`}>
                                <img src={ecoIcon} width={20} alt="" />
                                <p>Eco</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* room type */}
                <div>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 pb-5'> Select room type</h1>
                    <div className='flex gap-x-6'>
                        <div onClick={() => setRoomType("Entire place")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.room_type === "Entire place" ? 'bg-[#01257D] text-white' : ""}`}>
                            <p>Entire Place</p>
                        </div>
                        <div onClick={() => setRoomType("Private Room")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.room_type === "Private Room" ? 'bg-[#01257D] text-white' : ""}`}>
                            <p>Private Room</p>
                        </div>
                        <div onClick={() => setRoomType("Shared Room")} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.room_type === "Shared Room" ? 'bg-[#01257D] text-white' : ""}`}>
                            <p>Shared Room</p>
                        </div>
                    </div>
                </div>


                {/* location selection */}
                {/* <div className='w-[60%]'>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 pb-5'>Location</h1>
                    <div className='w-50'>
                        <iframe
                            className="w-full h-[400px] mt-5"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.120277646824!2d90.35348134445317!3d23.780872714598367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0be89363e87%3A0x3795036c15355c82!2sKallyanpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1688641577268!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"  >
                        </iframe>
                    </div>
                </div> */}


                {/* detail address */}
                <div className='w-[60%] mb-20'>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 '>Details Address</h1>
                    <p className='text-gr'>Note: your detail address is only shared with guest only when the reservation is confirmed</p>
                    <div className='w-50'>


                        <form action="#">
                            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">


                                <div className='flex gap-x-3 mt-10'>
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division</label>
                                        <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, division: e.target.value } })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                        <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, city: e.target.value } })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Zip Code</label>
                                        <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, zipCode: e.target.value } })} type="number" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                </div>


                                <div className='flex gap-x-3  sm:col-span-2 mt-4'>
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Road No.</label>
                                        <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, roadNo: e.target.value } })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apartment No.</label>
                                        <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, apartmentNo: e.target.value } })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                    </div>

                                </div>


                                <div className="sm:col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street Address</label>
                                    <input onChange={e => setProperty({ ...property, detailsAddress: { ...property.detailsAddress, streetAddress: e.target.value } })} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="" />
                                </div>
                            </div>

                        </form>
                        <Link to='/list-property-second-step'><button onClick={handleNextStep} className='primary-btn w-40 rounded-md'>Next Step</button></Link>
                    </div>
                </div>





            </div >


            <Footer></Footer>
        </>
    );
};

export default ListProperty;