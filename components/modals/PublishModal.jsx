import Image from "next/image";
import { useState } from "react";

const PublishModal = ({handleClose}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div id="modalPublish" className=" fixed top-0 left-0 w-full h-screen bg-latar-modal flex items-center ">
            <div className=" bg-white w-lebar  mx-auto flex flex-col space-y-10 rounded-lg">
                <div className="flex  justify-between border-b  px-10 py-5">
                    <div className="">
                        <h2 className="font-semibold text-24px ">Publish Newsletter</h2>
                        <p className=" text-16px text-gray-400">Please select the recipient and determine the delivery schedule
                        </p>
                    </div>
                    <div className="close cursor-pointer w-8">
                        <Image src="/images/cross-icon.png" width={100} height={100} layout="responsive" alt="close" onClick={() => handleClose()}/>
                    </div>
                </div>
                <div className=" px-10 ">
                    <div className="flex justify-end py-2">
                        <p className="flex space-x-1 text-14px"> <span className="underline mr-2"> Select All</span>
                            <Image src="/images/list-icon.png" width={15} height={15} alt="select all" layout="fixed" />
                        </p>
                    </div>
                    <div className=" space-y-5">
                        <div className="flex items-center justify-between border-b py-2">
                            <div className="flex items-center space-x-2">
                                <Image src="/images/user-circle-icon.png" width={20} height={20} alt="user" />
                                <p className=" font-medium text-16px">Example User 01</p>
                            </div>
                            <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)} className=" cursor-pointer h-5 w-5" />
                        </div>
                        <div className="flex items-center justify-between border-b py-2">
                            <div className="flex items-center space-x-2">
                                <Image src="/images/user-circle-icon.png" width={20} height={20} alt="user" />
                                <p className=" font-medium text-16px">Example User 01</p>
                            </div>
                            <input type="checkbox" checked={checked} onClick={() => setChecked(!checked)}className=" cursor-pointer h-5 w-5" />
                        </div>
                    </div>
                </div>
                <div className=" px-10 py-5 border-t flex justify-between">
                    <div className="flex flex-col space-y-1 ">
                        <h2 className="font-bold text-12px">Atur Jadwal Publiksi</h2>
                        <div className="  flex justify-between  space-x-5">
                            <button type="button"
                                className=" px-4 py-1   font-normal  text-14px   rounded bg-latar-b w-32 flex items-center justify-between ">
                                {/* <img src="/public/img/fi-br-calendar.png" alt=""> */}
                                <p>20/02/2022</p>
                            </button>
                            <button type="button"
                                className=" px-4 py-1   font-normal  text-14px   rounded bg-latar-b w-32 flex items-center justify-between ">
                                {/* <img src="/public/img/fi-br-calendar.png" alt=""> */}
                                <p>20/02/2022</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-end space-x-5">
                        <button type="button"
                            className=" px-4 py-1 border border-warna-btn  font-semibold  text-14px   rounded flex items-center space-x-1">
                            <p>Save to Draft</p>
                            {/* <img src="/public/img/Icon.png" alt=""> */}
                        </button>
                        <button id="btnSave" type="button"
                            className=" px-4 py-1 border border-warna-btn text-white font-semibold  text-14px   rounded flex items-center space-x-1 bg-warna-btn">
                            <p>Publish Now</p>
                            {/* <img src="/public/img/01 align center.png" alt=""> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublishModal;