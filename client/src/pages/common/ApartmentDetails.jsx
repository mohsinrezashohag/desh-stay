import { useState } from "react";
import SecondHeader from "../../components/common/SecondHeader";
import Footer from '../../components/common/Footer'
import LocationIcon from "../../assets/location-dot-solid.svg";
import heartIcon from "../../assets/heart-solid.svg";
import apartment1 from '../../assets/apartment_1.jpg'
import apartment2 from '../../assets/apartment_2.jpg'
import apartment3 from '../../assets/apartment_3.jpg'
import apartment4 from '../../assets/apartment_4.jpg'
import rattingIcon from '../../assets/ratting.svg'
import bedIcon from '../../assets/bed-solid.svg'
// import userIcon from '../../assets/user-solid.svg'
import verifyIcon from '../../assets/verified.png'
import profilePic from '../../assets/reza.jpg'
import { Link } from "react-router-dom";


const ApartmentDetails = () => {

    const images = {
        img1: apartment1,
        img2: apartment2,
        img3: apartment3,
        img4: apartment4
    }
    const [activeImg, setActiveImage] = useState(images.img1)





    return (
        <div>
            <SecondHeader></SecondHeader>
            <div className="max-width">


                <div className="mt-10">
                    <h1 className="text-4xl font-bold text-bl capitalize">Apartment at banani</h1>
                    <div className="flex justify-between">
                        <div className="flex items-center gap-x-4 mt-6">
                            <img src={LocationIcon} width={20} alt="" />
                            <p>Near Banani Club, Chairman Bari, Banani</p>
                        </div>
                        <div className="flex items-center gap-x-4 mt-6">
                            <img src={heartIcon} width={20} alt="" />
                            <p>Add to wishlist</p>
                        </div>
                    </div>
                </div>




                <div className="mt-10">
                    <img src={activeImg} className="h-[500px] w-full " alt="" />
                    <div className="flex justify-between gap-4 mt-5">
                        <img onClick={() => setActiveImage(images.img1)} src={images.img1} className="h-[150px] w-[300px]  cursor-pointer " alt="" />
                        <img onClick={() => setActiveImage(images.img2)} src={images.img2} className="h-[150px] w-[300px]  cursor-pointer " alt="" />
                        <img onClick={() => setActiveImage(images.img3)} src={images.img3} className="h-[150px] w-[300px]  cursor-pointer " alt="" />
                        <img onClick={() => setActiveImage(images.img4)} src={images.img4} className="h-[150px] w-[300px]  cursor-pointer " alt="" />

                    </div>
                </div>


                <div className="flex justify-between mt-10">
                    <div>
                        <h1 className="text-2xl uppercase font-semibold">Private apartment in agargaon hosted by <span className="text-bl cursor-pointer">Mohsin reza</span>
                        </h1>

                        <div className="flex gap-x-16 my-6">

                            <div className="flex gap-x-4 items-center ">
                                <img src={bedIcon} width={40} alt="" />
                                <p>03 bedroom</p>
                            </div>

                            <div className="flex gap-x-4 items-center ">
                                <img src={bedIcon} width={40} alt="" />
                                <p>03 bedroom</p>
                            </div>

                            <div className="flex gap-x-4 items-center ">
                                <img src={bedIcon} width={40} alt="" />
                                <p>03 bedroom</p>
                            </div>



                        </div>


                    </div>

                    <div className="flex-between gap-3">
                        <img className="h-[80px] w-[80px] rounded-full border-b-4 border-r-4 " src={profilePic} alt="" />
                        <div>
                            <p className="text-bl uppercase">View Profile</p>
                            <p className="text-bl uppercase">Send Message</p>
                        </div>
                    </div>
                </div>

                <hr className="pb-10" />



                <div className="flex-between items-start">
                    <div className="w-3/5">
                        <div className="mb-10">
                            <h1 className="uppercase font-semibold text-2xl">About this place</h1>
                            <p className="text-gr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, placeat vero. Quisquam ea odio repellat commodi dolores consequatur inventore! Qui hic cumque at iste doloremque, vel architecto voluptatem exercitationem consectetur laudantium rerum molestiae quisquam perferendis ex fugiat repellat odio debitis quaerat dolore totam atque sequi dolor nihil maiores. Commodi nemo debitis doloribus eligendi modi fugit ab minima asp=eriores libero iusto non totam, illum accusantium, sequi quos voluptate! Corrupti commodi animi, dolor ea debitis voluptatem expedita aspernatur repellat alias quam exercitationem quia officia ipsa dolore minima quo quos quis non nisi ratione nulla a temporibus. Adipisci error id quos suscipit alias.</p>
                        </div>


                        <div className="mb-10">
                            <h1 className="text-2xl uppercase font-semibold">what this place offers</h1>

                            <div className="flex flex-col gap-y-4 mt-4">

                                <div className="flex gap-x-4 items-center ">
                                    <img src={bedIcon} width={40} alt="" />
                                    <p>pets are allowed</p>
                                </div>
                                <div className="flex gap-x-4 items-center ">
                                    <img src={bedIcon} width={40} alt="" />
                                    <p>Car Parking Available</p>
                                </div>
                                <div className="flex gap-x-4 items-center ">
                                    <img src={bedIcon} width={40} alt="" />
                                    <p>Smoking is allowed</p>
                                </div>
                                <div className="flex gap-x-4 items-center ">
                                    <img src={bedIcon} width={40} alt="" />
                                    <p>Air conditioner system is available </p>
                                </div>

                            </div>
                        </div>


                        <div className="mt-6">

                            <h1 className="text-2xl uppercase font-semibold">See what customers says </h1>

                            <div className="flex items-center gap-x-2">
                                <img src={rattingIcon} width={15} alt="" />
                                <h1 className="text-bl">5.0  <span>204 reviews</span></h1>
                            </div>

                            <div className="flex flex-col mt-6">

                                <div className="mt-4">
                                    <div className="flex gap-3">
                                        <img className="h-[60px] w-[60px] rounded-full border-b-4 border-r-4 " src={profilePic} alt="" />
                                        <div>
                                            <h6 className="font-semibold">Mohsin Reza Shohag</h6>
                                            <p>01 January 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gr">
                                            The property was as wonderful to live in as it appears in the pictures.I thoroughly enjoyed my
                                            R&R here. It s the perfect place to laze around and do nothing
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="flex gap-3">
                                        <img className="h-[60px] w-[60px] rounded-full border-b-4 border-r-4 " src={profilePic} alt="" />
                                        <div>
                                            <h6 className="font-semibold">Mohsin Reza Shohag</h6>
                                            <p>01 January 2023</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gr">
                                            The property was as wonderful to live in as it appears in the pictures. I thoroughly enjoyed my
                                            R&R here. It s the perfect place to laze around and do nothing
                                        </p>
                                    </div>
                                </div>





                            </div>
                            <button className="primary-btn mt-6">See All Reviews</button>

                        </div>

                    </div>


                    <div className="w-2/5">

                        <div className='px-10'>

                            <div className="flex flex-col items-center justify-center bg-[#01257D] text-white py-6 rounded-md">
                                <h1 className="text-3xl">560 BDT/Night</h1>
                                <div className="flex gap-x-3">
                                    <img src={rattingIcon} width={15} alt="" />
                                    <p>5.0  <span>204 reviews</span></p>
                                </div>
                            </div>


                            <div className="shadow-md px-2">
                                <div className='flex flex-col  gap-3 mt-10 px-10 '>

                                    <div className="flex ">
                                        <div className="w-50 me-2">
                                            <h1 className='capitalize  py-2 '>Arrival Date</h1>
                                            <select className='text-black w-[200px] py-2 rounded-full font-bold  text-center' name="" id="">
                                                <option value="Dhaka" selected>10/10/2023</option>
                                                <option value="Chittagong" >Chittagong</option>
                                            </select>
                                        </div>
                                        <div className="w-50">
                                            <h1 className=' capitalize  py-2'>Departure Date</h1>
                                            <select className='text-black w-[200px] py-2 rounded-full font-bold text-center' name="" id="">
                                                <option value="Dhaka" selected>10/10/2023</option>
                                                <option value="Chittagong" >Chittagong</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <h1 className='capitalize  pt-2'>Pax</h1>
                                        <select className='text-black w-[200px] py-2 rounded-full font-bold ' name="" id="">
                                            <option value="Dhaka" selected>0</option>
                                        </select>
                                    </div>

                                    <div className='bg-white p-3 rounded-full mt-6 cursor-pointer'>
                                        <Link to="/book-now"><button className="primary-btn">Book Now</button></Link>
                                    </div>
                                </div>


                                <div className="px-4">
                                    <p className="text-center uppercase font-semibold ">Pricing Breakdown</p>
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
                                    <p className="text-center uppercase font-semibold ">Note : All taxes are included</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>



                {/* location part */}
                <div className="  mt-10">
                    <h1 className="text-2xl uppercase font-semibold mt-10">Live location</h1>
                    <iframe
                        className="w-full h-96 mt-5 mb-40"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7302.120277646824!2d90.35348134445317!3d23.780872714598367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0be89363e87%3A0x3795036c15355c82!2sKallyanpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1688641577268!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"  >
                    </iframe>
                </div>


                {/* profile part */}

                <div className="flex-between items-start">
                    <div className="w-1/2">
                        <div className="flex items-center gap-3">
                            <img className="h-[80px] w-[80px] rounded-full border-b-4 border-r-4 " src={profilePic} alt="" />
                            <div>
                                <h6 className="uppercase font-semibold text-2xl">Hosted by Reza</h6>
                                <p className="text-gr uppercase font-semibold">Member Since January 2022</p>
                            </div>
                        </div>
                        <div className="flex gap-x-3 mt-6">
                            <div className="flex gap-x-3">
                                <img src={rattingIcon} width={30} alt="" />
                                <p className="text-gr">103 ratting</p>
                            </div>
                            <div className="flex gap-x-3">
                                <img src={verifyIcon} width={30} alt="" />
                                <p className="text-gr">verified User</p>
                            </div>
                        </div>

                        <div className="my-10">
                            <p>Hello, I am Ahmed. I live in Dhaka with my wife and two cousins, a cat
                                and a dog.We all work together. We run a nature home stay, cafe and
                                art space. We make dreadlocks and handmade macrame jewellery with
                                amazing stones</p>
                        </div>

                    </div>

                    <div className="text-left">
                        <h6 className="text-1xl font-semibold">Response Rate : 100%</h6>
                        <h6 className="text-1xl font-semibold">Response Time : 1 hours</h6>

                        <div className="flex gap-x-40 mt-32">
                            <button className="primary-btn">Send a message</button>
                            <h6 className="text-red-600 font-semibold">Report profile</h6>
                        </div>
                    </div>
                </div>


            </div>



            <Footer></Footer>


        </div >
    );
};

export default ApartmentDetails;