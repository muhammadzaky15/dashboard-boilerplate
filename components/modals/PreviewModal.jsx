import Image from "next/image";

const PreviewModal = ({ handleClose }) => {
    return (
        <div id="modalPreview" className="z-10 fixed top-0 left-0  w-full h-screen bg-latar-modal flex items-center ">
            <div className=" bg-white w-lebar  mx-auto flex flex-col space-y-10  rounded-lg my-32">
                <div className="flex  justify-between border-b  px-10 py-5">
                    <div className="">
                        <h2 className="font-semibold text-24px ">Preview Newsletter</h2>
                        <p className=" text-16px text-gray-400">Silahkan periksa kembali</p>
                    </div>
                    <div className="close cursor-pointer w-6" onClick={() => handleClose()}>
                        <Image src="/images/cross-icon.png" alt="" layout="responsive" width={100} height={100} />
                    </div>
                </div>
                <div className="mx-auto w-80">
                    <Image src="/images/content.png" alt="" width={100} height={100} layout="responsive" />
                </div>
                <div className=" px-10 py-5 border-t flex justify-between">
                    <div className="flex flex-col  w-3/6">
                        <h2 className="font-bold text-12px">Test Send</h2>
                        <div className="bg-latar-b  flex justify-between flex-col">
                            <input type="text" placeholder="Input email" className="bg-latar-b py-2 px-5 rounded" />
                            <div className="w-full flex justify-end">
                                <button type="button"
                                    className="px-4 py-1  text-white font-semibold  text-16px  hover:bg-black hover:bg-opacity-5 rounded  bg-gray-400 w-32">Send
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <p className="flex space-x-1"> <span className="underline align-middle"> Tambah Gambar Lainnya</span>
                            <div className="w-4">
                                <Image src="/images/download-icon.png" width={100} height={100} alt="download" layout="responsive" />
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreviewModal;