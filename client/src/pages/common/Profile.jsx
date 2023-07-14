import SecondHeader from "../../components/common/SecondHeader";
import ProfileImage from '../../assets/reza.jpg';
import verifiedIcon from '../../assets/verified.png';
import Footer from "../../components/common/Footer";

const Profile = () => {
    return (
        <div className="">
            <SecondHeader></SecondHeader>
            <div className="max-width my-32 px-10 md:px-0">

                <div className="breadcrumb flex flex-col md:flex-row gap-16 md:gap-72 my-16 ">
                    <div>
                        <h1 className="text-bl text-3xl font-bold "> back</h1>
                    </div>

                    <div className="">
                        <h1 className="text-bl text-3xl font-bold "> Mohsin Reza's Profile</h1>
                    </div>
                </div>

                <div className=" md:flex-between mt-10 md:mt-28">

                    <div>
                        <img className="rounded-md" src={ProfileImage} alt="" width="200px" />
                        <div className="flex gap-3 items-center mt-6">
                            <h1 className="text-2xl font-bold uppercase text-bl">Mohsin Reza Shohag</h1>
                            <div>
                                <img src={verifiedIcon} alt="" width='30' height='30' />
                            </div>                        </div>
                    </div>

                    <div className="">

                        <div className="grid grid-col-2 md:grid-cols-5 gap-10 mt-10">
                            <div className="shadow-xl rounded-lg px-6 py-5 inline-block text-gray-500 font-bold">
                                <h1>Your Trips</h1>
                            </div>
                            <div className="shadow-xl rounded-lg px-12 py-5 inline-block text-gray-500 font-bold">
                                <h1>Your Trips</h1>
                            </div>
                            <div className="shadow-xl rounded-lg px-12 py-5 inline-block text-gray-500 font-bold">
                                <h1>Your Trips</h1>
                            </div>
                            <div className="shadow-xl rounded-lg px-12 py-5 inline-block text-gray-500 font-bold">
                                <h1>Your Trips</h1>
                            </div>
                            <div className="col-span-2 shadow-xl rounded-lg px-12 py-5 inline-block text-gray-500 font-bold">
                                <h1>Payment Method</h1>
                            </div>

                            <div className="col-span-2 shadow-xl rounded-lg px-12 py-5 inline-block text-gray-500 font-bold">
                                <h1>Deactivate Account</h1>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Profile;