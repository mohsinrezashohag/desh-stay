import { Link } from "react-router-dom";
import SecondHeader from "../../components/common/SecondHeader";
//images 
import apartmentImg from '../../assets/apartment.jpg'
import sslCommerceImg from '../../assets/sslcommerz-banner.webp'

// icons
import editIcon from '../../assets/pen-to-square-solid.svg'
import rattingIcon from '../../assets/ratting.svg'
import Footer from "../../components/common/Footer";



const BookingConfirmation = () => {
    return (

        <>
            <SecondHeader></SecondHeader>

            <div className="max-width">


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
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Show details</Link>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Booking</Link>
                            </div>
                        </li>

                    </ol>
                </div>



                <div className="flex-between items-start py-16">

                    <div className="w-1/2 ">
                        <h1 className="text-3xl uppercase font-semibold text-bl">Booking Confirmation</h1>
                        <div>
                            <div className="flex-between py-6">
                                <div>
                                    <h6 className="font-semibold uppercase text-bl">Date</h6>
                                    <p className="text-gr font-semibold">06/03/2023</p>
                                </div>
                                <div className="flex gap-x-2 text-bl">
                                    <img src={editIcon} width={20} alt="" />
                                    <p>Edit</p>
                                </div>
                            </div>

                            <div className="flex-between py-6">
                                <div>
                                    <h6 className="font-semibold uppercase text-bl">Check in time</h6>
                                    <p className="text-gr font-semibold">10.00 Am</p>
                                </div>
                                <div className="flex gap-x-2 text-bl">
                                    <img src={editIcon} width={20} alt="" />
                                    <p>Edit</p>
                                </div>
                            </div>

                            <div className="flex-between py-6">
                                <div>
                                    <h6 className="font-semibold uppercase text-bl">Number of guest</h6>
                                    <p className="text-gr font-semibold">5</p>
                                </div>
                                <div className="flex gap-x-2 text-bl">
                                    <img src={editIcon} width={20} alt="" />
                                    <p>Edit</p>
                                </div>
                            </div>


                        </div>
                    </div>


                    <div className="w-1/2 px-20">

                        <div className="bg-[#01257D] text-white px-10 py-6">
                            <h1 className="text-3xl uppercase  ">Checkout</h1>
                        </div>

                        <div className="flex gap-x-4 items-start py-6">
                            <img className="rounded-md" src={apartmentImg} width={120} alt="" />
                            <div>
                                <h6>Apartment at banani</h6>
                                <p className="text-gr">Near Banani Club, Chairman Bari, Banani </p>
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h6 className="uppercase font-semibold py-2">Billing Details</h6>
                            <div className="flex flex-col gap-y-3 mt-3">
                                <div className="flex justify-between my-2">
                                    <p>560 x 2 Nights</p>
                                    <p>1120 BDT</p>
                                </div>
                                <div className="flex justify-between my-2">
                                    <p>Desh Stay service charge</p>
                                    <p>300 BDT</p>
                                </div>
                                <div className="flex justify-between my-2 font-semibold">
                                    <p>Total</p>
                                    <p>1420 BDT</p>
                                </div>
                            </div>
                            <button className="primary-btn w-full mt-10">Confirm</button>
                        </div>
                    </div>
                </div>


                <div className="pt-10 pb-20">
                    <img src={sslCommerceImg} alt="" />
                </div>


            </div>


            <Footer></Footer>
        </>
    );
};

export default BookingConfirmation;