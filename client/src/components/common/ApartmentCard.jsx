import { Link } from 'react-router-dom';
import img from '../../assets/hero-bg.jpg'

const ApartmentCard = () => {
    return (
        <Link to="/apartment-details">
            <div className="cursor-pointer rounded-md">
                <div className="flex flex-col gap-2 w-full">
                    <div
                        className=" aspect-square w-full relative overflow-hidden">
                        <img
                            className="object-cover h-full w-full  transition rounded-xl"
                            src={img}
                            alt="Listing"
                        />
                        <div className=" absolute top-3 right-3">
                            <p>❤️</p>
                        </div>
                    </div>
                    <div className="font-semibold text-lg">
                        {"Apartment at Uttara"}
                    </div>
                    <div className="font-light text-neutral-500">
                        10/12/2023
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <div className="font-semibold">
                            139923
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ApartmentCard;