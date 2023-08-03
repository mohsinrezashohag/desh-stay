import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

//icons
import bdtIcon from '../../assets/bangladeshi-taka-sign-solid.svg'
import rattingIcon from '../../assets/ratting.svg'
import heartIconNotField from '../../assets/heart-regular.svg'
import heartIconField from '../../assets/heart-solid.svg'
import { toast } from 'react-hot-toast'
import { useAddToWishlistMutation, useGetMyWishlistQuery } from '../../rtk/features/wishlist/wishlistApi'

const ApartmentCard = ({ property }) => {
    const { title, thumbnail, _id: id } = property

    //data from redux state
    const user = useSelector((state) => state.user.userInfo)
    // rtk queries
    const [addToWishlist, { isLoading, isSuccess, isError }] = useAddToWishlistMutation()
    const { data: myWishlist } = useGetMyWishlistQuery(user?._id)

    //check it's on my wishlist or not
    const addedToWishlist = myWishlist?.data?.find(item => item.property === id)
    console.log('my', myWishlist);
    console.log('wish', addedToWishlist);

    const navigate = useNavigate()
    const handleWishlistButtonClick = (e) => {
        e.stopPropagation()
        addToWishlist({ user, property })
            .unwrap()
            .then(result => {
                console.log(`user :${user.firstName}\n property:${property}`);
                toast.success("Added to wishlist")
                navigate('/wishlist')

            })
    }

    return (
        <div className='property-card cursor-pointer '>
            <div className='flex flex-col gap-2 w-full'>
                <div className='aspect-square w-full relative overflow-hidden'>
                    <Link to={`/apartment-details/${id}`}>
                        <img
                            className='object-cover h-full w-full transition-transform transform rounded-xl scale-100 hover:scale-105 '
                            src={`http://localhost:8000/uploaded-images/${thumbnail}`}
                            alt='Listing'
                        />
                    </Link>

                    <div className='wishlist-button absolute top-3 right-3'>
                        <img
                            src={addedToWishlist ? heartIconField : heartIconNotField}
                            width={20}
                            alt=''
                            onClick={(e) => handleWishlistButtonClick(e)}
                        />
                    </div>
                </div>

                <Link to={`/apartment-details/${id}`}>
                    <div className='text-black text-sm'>
                        <div className='flex-between'>
                            <p className='font-semibold'>{title}</p>
                            <div className='flex gap-x-1'>
                                <img src={rattingIcon} width={15} alt='' />
                                <p className='text-gr'>5.0</p>
                            </div>
                        </div>
                        <p>Aug 2-7</p>
                        <div className='flex flex-row items-center gap-1'>
                            <div className='flex gap-x-2'>
                                <img src={bdtIcon} width={12} alt='' />
                                <p>
                                    <span className='font-semibold'>139923</span> Night
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ApartmentCard
