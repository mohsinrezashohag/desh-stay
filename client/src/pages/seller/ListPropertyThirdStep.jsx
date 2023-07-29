import { Link } from "react-router-dom";
// components
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer';
// icons
import uploadIcon from '../../assets/cloud-arrow-up-solid.svg'
// hooks
import { useRef, useState } from "react";
import { useSelector } from "react-redux";


const ListPropertyThirdStep = () => {


    // const prevPageProperty = JSON.parse(localStorage.getItem('property'))
    const prevPageProperty = useSelector(state => state.property.property)

    const [property, setProperty] = useState(prevPageProperty)

    // handle thumbnail upload
    const inputRef = useRef()
    const handleBoxClick = () => {
        inputRef.current.click();
    }
    const [image, setImage] = useState(null)


    // handle three images
    const uploadLimit = 3;
    const SecondInputRef = useRef()
    const [images, setImages] = useState([])
    const handleImagesChange = (e) => {
        const files = e.target.files;
        if (files.length + images.length <= uploadLimit) {
            // const imagesArray = Array.from(files).map((file) => URL.createObjectURL(file));
            const imagesArray = Array.from(files)

            setImages((previousImages) => previousImages.concat(imagesArray));

        } else {
            alert(`You can upload up to ${uploadLimit} images.`);
        }
    }


    // handle property posting

    const handleImageUpload = async () => {
        const formData = new FormData()
        formData.append('thumbnail', image)
        for (const image of images) {
            formData.append('extraImages', image);
        }
        formData.append('fullObject', JSON.stringify(property))

        const result = await fetch('http://localhost:8000/api/v1/property/list', {

            method: "POST",
            body: formData,
        })
        console.log(result);
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

                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link to="/search-result" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Add Images or Videos</Link>
                            </div>
                        </li>
                    </ol>
                </div>




                {/* thumbnail image type */}
                <div>

                    <div>
                        <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Add Photos of youre place</h1>
                        <div onClick={handleBoxClick} style={{ border: '2px dashed ' }} className="cursor-pointer w-[30%] h-[300px] p-5 flex flex-col justify-center items-left">

                            {image ? <img className="mb-10 " width="200px" src={URL.createObjectURL(image)} alt="" /> : <img className="mb-10 " width="100px" src={uploadIcon} alt="" />
                            }
                            <input onChange={(e) => setImage(e.target.files[0])} ref={inputRef} id="image-input-field" name="thumbnail" type="file" />
                        </div>
                    </div>

                    <div>
                        <h1 className='text-1xl uppercase text-bl font-semibold pt-10 pb-5'> Add 3 More Photos of youre place</h1>
                        <input onChange={handleImagesChange} multiple ref={SecondInputRef} id="image-input-field" name="image-input-field" type="file" />
                        <div className="flex gap-x-3 mt-10">
                            {images && images.map((item, index) => <img key={index} src={URL.createObjectURL(item)} className="w-[100px]"></img>)}
                        </div>
                    </div>

                </div>


                <button onClick={handleImageUpload} className='primary-btn w-40 rounded-md my-20'>Confirm Listing</button>



            </div >


            <Footer></Footer>
        </>
    );
};

export default ListPropertyThirdStep;