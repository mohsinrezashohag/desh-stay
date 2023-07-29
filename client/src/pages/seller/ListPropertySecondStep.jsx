import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

// components
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer';

// icons
import plusIcon from '../../assets/circle-plus-solid.svg'
import minusIcon from '../../assets/circle-minus-solid.svg'
import { setPropertyToStore } from "../../rtk/features/property/propertySlice";


const ListPropertySecondStep = () => {

    // const prevPageProperty = JSON.parse(localStorage.getItem('property'))
    const prevPageProperty = useSelector(state => state.property.property)

    const [property, setProperty] = useState(prevPageProperty)


    // Guest Limit
    const inCreaseGuestLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, guestLimit: property?.basics?.guestLimit + 1 } })
    }
    const decreaseGuestLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, guestLimit: property?.basics?.guestLimit - 1 } })
    }

    // bedroom Limit
    const inCreaseBedroomLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, bedroom: property?.basics?.bedroom + 1 } })
    }
    const decreaseBedroomLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, bedroom: property?.basics?.bedroom - 1 } })
    }

    // bathroom Limit
    const inCreaseBathroomLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, bathroom: property?.basics?.bathroom + 1 } })
    }
    const decreaseBathroomLimit = () => {
        setProperty({ ...property, basics: { ...property?.basics, bathroom: property?.basics?.bathroom - 1 } })
    }


    // change facilities selection
    const handleFacilitiesSelectionChange = (value) => {
        const index = property?.facilities.indexOf(value)
        if (index === -1) {
            setProperty({ ...property, facilities: [...property.facilities, value] })
        }
        else {
            const filteredArray = property?.facilities?.filter(item => item !== value)
            console.log("filteredArray :", filteredArray);
            setProperty({ ...property, facilities: [...filteredArray] })
        }
    }

    // change standout amenities selection
    const handleStandoutAmenitiesChange = (value) => {
        const index = property?.standoutAmenities.indexOf(value)
        if (index === -1) {
            setProperty({ ...property, standoutAmenities: [...property.standoutAmenities, value] })
        }
        else {
            const filteredArray = property?.standoutAmenities?.filter(item => item !== value)
            setProperty({ ...property, standoutAmenities: [...filteredArray] })
        }
    }

    // change safety items selection
    const handleSafetyItemsChange = (value) => {
        const index = property?.safetyItems.indexOf(value)
        if (index === -1) {
            setProperty({ ...property, safetyItems: [...property.safetyItems, value] })
        }
        else {
            const filteredArray = property?.safetyItems?.filter(item => item !== value)
            setProperty({ ...property, safetyItems: [...filteredArray] })
        }
    }



    // handle next step
    const dispatch = useDispatch()
    const handleNextStep = () => {
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

                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Add more property info</Link>
                            </div>
                        </li>
                    </ol>
                </div>




                {/* basics */}
                <div>
                    <div>
                        <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Some basics about your place</h1>

                        <div className="w-[30%] flex flex-col gap-y-6 mt-6">
                            <div className="flex gap-x-2 justify-between">
                                <p className="text-gr uppercase">Maximum guest limit</p>
                                <div className="flex gap-x-8">

                                    {property?.basics?.guestLimit >= 1 && <img onClick={() => decreaseGuestLimit()} className="cursor-pointer" src={minusIcon} width={25} alt="" />}

                                    {property?.basics?.guestLimit}
                                    <img onClick={() => inCreaseGuestLimit()} className="cursor-pointer" src={plusIcon} width={25} alt="" />

                                </div>
                            </div>
                            <div className="flex gap-x-2 justify-between">
                                <p className="text-gr uppercase">Bedroom</p>
                                <div className="flex gap-x-8">

                                    {property?.basics?.bedroom >= 1 && <img onClick={() => decreaseBedroomLimit()} className="cursor-pointer" src={minusIcon} width={25} alt="" />}

                                    {property?.basics?.bedroom}
                                    <img onClick={() => inCreaseBedroomLimit()} className="cursor-pointer" src={plusIcon} width={25} alt="" />

                                </div>
                            </div>
                            <div className="flex gap-x-2 justify-between">
                                <p className="text-gr uppercase">Bathroom</p>
                                <div className="flex gap-x-8">

                                    {property?.basics?.bathroom >= 1 && <img onClick={() => decreaseBathroomLimit()} className="cursor-pointer" src={minusIcon} width={25} alt="" />}

                                    {property?.basics?.bathroom}
                                    <img onClick={() => inCreaseBathroomLimit()} className="cursor-pointer" src={plusIcon} width={25} alt="" />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* facilities */}
                <div>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 pb-5'> Facilities</h1>
                    <div className='flex gap-x-6'>
                        <div onClick={() => handleFacilitiesSelectionChange('Food')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property.facilities.includes('Food') && 'active-selection'}`}>
                            <p>Food</p>
                        </div>
                        <div onClick={() => handleFacilitiesSelectionChange('Wifi')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.facilities?.includes('Wifi') && 'active-selection'}`}>
                            <p>Wifi</p>
                        </div>
                        <div onClick={() => handleFacilitiesSelectionChange('Television')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.facilities?.includes('Television') && 'active-selection'}`}>
                            <p>Television</p>
                        </div>
                        <div onClick={() => handleFacilitiesSelectionChange('Parking')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.facilities?.includes('Parking') && 'active-selection'}`}>
                            <p>Parking</p>
                        </div>
                    </div>
                </div>



                {/* standout amenities */}
                <div>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 pb-5'> standout amenities
                    </h1>
                    <div className='flex gap-x-6'>
                        <div onClick={() => handleStandoutAmenitiesChange('Pool')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.standoutAmenities?.includes('Pool') && 'active-selection'}`}>
                            <p>Pool</p>
                        </div>
                        <div onClick={() => handleStandoutAmenitiesChange('Hot Tub')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400  ${property?.standoutAmenities?.includes('Hot Tub') && 'active-selection'}`}>
                            <p>Hot Tub</p>
                        </div>
                        <div onClick={() => handleStandoutAmenitiesChange('Gym Equipments')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.standoutAmenities?.includes('Gym Equipments') && 'active-selection'}`}>
                            <p>Gym Equipments</p>
                        </div>
                        <div onClick={() => handleStandoutAmenitiesChange('Piano')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.standoutAmenities?.includes('Piano') && 'active-selection'}`}>
                            <p>Piano</p>
                        </div>
                    </div>
                </div>


                {/* safety items */}
                <div>
                    <h1 className='text-1xl uppercase text-bl font-semibold pt-20 pb-5'>Safety Items</h1>
                    <div className='flex gap-x-6'>
                        <div onClick={() => handleSafetyItemsChange('Smoke Alarm')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.safetyItems?.includes('Smoke Alarm') && 'active-selection'}`}>
                            <p>Smoke Alerm</p>
                        </div>
                        <div onClick={() => handleSafetyItemsChange('First Aid Kit')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.safetyItems?.includes('First Aid Kit') && 'active-selection'}`}>
                            <p>First Aid Kit</p>
                        </div>
                        <div onClick={() => handleSafetyItemsChange('Fire Extinguisher')} className={`flex gap-x-3 items-center  px-10 py-3 shadow-md rounded-md cursor-pointer border-2 border-gray-400 ${property?.safetyItems?.includes('Fire Extinguisher') && 'active-selection'}`}>
                            <p>Fire Extinguisher</p>
                        </div>

                    </div>
                </div>




                <Link to='/list-property-third-step'><button onClick={() => handleNextStep()} className='primary-btn w-40 rounded-md my-20'>Next</button></Link>



            </div>


            <Footer></Footer>
        </>
    );
};

export default ListPropertySecondStep;