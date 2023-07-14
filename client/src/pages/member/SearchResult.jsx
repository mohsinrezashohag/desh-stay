import { Link } from "react-router-dom";
import SecondHeader from "../../components/common/SecondHeader";
import apartment from '../../assets/apartment.jpg'
import rattingIcon from '../../assets/ratting.svg'
import bedIcon from '../../assets/bed-solid.svg'
import userIcon from '../../assets/user-solid.svg'

const SearchResult = () => {
    return (
        <div className="">
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
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">search-result</Link>
                            </div>
                        </li>

                    </ol>
                </div>



                <div className="flex mt-10">

                    <div className="flex-initial w-96 ">


                        <div className='flex flex-col gap-3 mt-10 text-white bg-[#01257D] px-10 py-6 rounded-xl' style={{ height: "500px" }}>
                            <div className=''>
                                <h1 className='capitalize py-2 '>Select Destination</h1>
                                <select className='text-black w-[250px] py-2 rounded-full font-bold  text-center' name="" id="">
                                    <option value="Dhaka" selected>WHERE TO</option>
                                    <option value="Chittagong" >Chittagong</option>
                                </select>
                            </div>
                            <div>
                                <h1 className='capitalize  py-2 '>Arrival Date</h1>
                                <select className='text-black w-[250px] py-2 rounded-full font-bold  text-center' name="" id="">
                                    <option value="Dhaka" selected>10/10/2023</option>
                                    <option value="Chittagong" >Chittagong</option>
                                </select>
                            </div>
                            <div>
                                <h1 className=' capitalize  py-2'>Departure Date</h1>
                                <select className='text-black w-[250px] py-2 rounded-full font-bold text-center' name="" id="">
                                    <option value="Dhaka" selected>10/10/2023</option>
                                    <option value="Chittagong" >Chittagong</option>
                                </select>
                            </div>

                            <div>
                                <h1 className='capitalize  py-2'>Pax</h1>
                                <select className='text-black w-[250px] py-2 rounded-full font-bold text-center' name="" id="">
                                    <option value="Dhaka" selected>0</option>
                                </select>
                            </div>

                            <div className='bg-white p-3 rounded-full mt-10 cursor-pointer'>
                                <p className='text-center text-black'>Search</p>
                            </div>
                        </div>


                        <div className="shadow-md px-10 py-6 h-[420px] my-6">
                            <h1 className="text-bl mt-6">Filter by</h1>

                            <div className="flex flex-col justify-center items-center gap-y-3 mt-6">

                                <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Budget per night</label>
                                <input id="default-range" type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />

                                <button className="primary-btn rounded-full" style={{ padding: '10px 50px' }}>450 BDT</button>
                            </div>



                            <div className="special-occasions mt-6">

                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Special Occasions</h3>
                                <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Eid</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Puja</label>
                                        </div>
                                    </li>
                                    <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                        <div className="flex items-center pl-3">
                                            <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Year</label>
                                        </div>
                                    </li>

                                </ul>

                            </div>


                        </div>
                    </div>









                    <div className="flex-initial w-full ps-10">
                        <div className="flex-between">
                            <h1 className="capitalize text-3xl font-bold">Dhaka - 230 properties found</h1>

                            <select className="px-10 py-2 border-spacing-2" style={{ border: '2px solid black' }} name="short-by" id="short-by">
                                <option value="price" selected>Price</option>
                            </select>
                        </div>

                        <div className="mt-8">

                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>


                            <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                                <div>
                                    <img className="rounded-md" src={apartment} width={250} alt="" />
                                </div>
                                <div className="flex justify-between" >
                                    <div>
                                        <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <p>5.0</p>
                                            <div className="flex gap-0.5 ">
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                                <img src={rattingIcon} width={15} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex gap-2 underline text-bl mt-3">
                                            <p>Dhaka</p>
                                            <p>Show On map</p>
                                        </div>

                                        <div className="flex gap-6 mt-3">
                                            <div className="flex gap-2 items-center">
                                                <img src={userIcon} width={20} alt="" />
                                                <p>3 <span>Persons</span></p>
                                            </div>
                                            <div className="flex gap-2 items-center ">
                                                <img src={bedIcon} width={25} alt="" />
                                                <p>3 <span>Bedrooms</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-80">
                                        <h1 className="text-4xl font-semibold">$ 500</h1>
                                        <button className="primary-btn mt-10">Show Details</button>
                                    </div>
                                </div>
                            </div>






                        </div>

                    </div>


                </div>



            </div>
        </div >
    );
};

export default SearchResult;