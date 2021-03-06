import { useState } from "react";
import Image from "next/image";
import HighlightForm from "../components/form/HighlightForm";
import PreviewModal from "../components/modals/PreviewModal";
import PublishModal from "../components/modals/PublishModal";

export default function Index() {
  const highlightDefaultData = {
    title: null,
    body: null,
    ilbLink: null,
    regulationLink: []
  }
  const [highlight, setHighlight] = useState([
    highlightDefaultData
  ]);
  const [mlr, setMlr] = useState({
    subjectEmail: null,
    title: null,
    subtitle: null,
    catalog: null,
    image: null
  })
  const [preview, setPreview] = useState(false);
  const [publishModal, setPublishModal] = useState(false);

  const addHighlight = () => {
    setHighlight([
      ...highlight,
      highlightDefaultData
    ])
  }

  const handleChangeHighlight = (indexHightlight, e) => {
    const currentHighlight = highlight;
    currentHighlight[indexHightlight].title = e.target.value;
    setHighlight([
      ...currentHighlight
    ])
  }

  const handleClosePreview = () => {
    setPreview(!preview);
  }

  const handleClosePublishModal = () => {
    setPublishModal(!publishModal)
  }

  return (
    <div className=" flex space-x-2 w-full bg-latar-b">
      <div className="w-16 h-auto bg-white flex flex-col justify-between ">
        <div className="flex flex-col items-center space-y-7 py-10 ">
          <div className="">
            <Image
              src="/images/vector.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="">
            <Image
              src="/images/search-icon.png"
              alt=""
              width={20}
              height={20}
            />
          </div>

          <div className="bg-latar-b py-1 px-2 rounded">
            <Image
              src="/images/fi-ss-document.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="">
            <Image
              src="/images/fi-rs-calculator.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="">
            <Image
              src="/images/fi-rs-document-signed.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="">
            <Image
              src="/images/fi-rs-trophy.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="">
            <Image
              src="/images/fi-rs-credit-card.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>

        <div className="flex items-center justify-center border-t py-2">
          <Image
            src="/images/angle.png"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="w-full pb-4">
        <header className="px-10 h-tinggi bg-white flex flex-col justify-center">
          <div className="h-3/5 flex flex-col justify-between">
            <nav className="bg-grey-light rounded-lg w-full ">
              <ol className="list-reset flex font-inter text-14px text-gray-400 font-medium">
                <li>Dashboard</li>
                <li>
                  <span className="mx-2"> {`>`} </span>
                </li>
                <li>Newsletter</li>
                <li>
                  <span className="mx-2"> {`>`} </span>
                </li>
                <li className="text-gray-500 font-bold">Data</li>
              </ol>
            </nav>

            <p className="font-inter font-semibold text-12px text-gray-700">
              <span> {`<`} </span>Go Back{" "}
            </p>

            <div className="flex justify-between items-center">
              <h3 className="font-montserrat font-bold text-32px">
                create Newsletter
              </h3>
              <div>
                <button
                  id="btnPreview"
                  type="button"
                  className=" px-4 py-1 border border-gray-300 text-gray-600 font-semibold  text-16px  hover:bg-black hover:bg-opacity-5 rounded "
                  onClick={(e) => setPreview(!preview)}
                >
                  Preview File
                </button>
                <button
                  id="btnPublish"
                  type="button"
                  className=" px-4 py-1 border border-gray-300 text-white font-semibold  text-16px  hover:bg-black hover:bg-opacity-5 rounded  bg-gray-400 "
                  onClick={(e) => setPublishModal(!publishModal)}
                >
                  Pulish now
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="w-lebar mx-auto bg-white py-10 px-10 space-y-8 mt-14 font-NunitoSans rounded-lg">
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Subject Email</label>
            <input
              name="subjectEmail"
              type="text"
              placeholder="Input subject email"
              className="bg-latar-b py-2 px-5 rounded"
            />
          </div>

          <div className="flex justify-between space-x-5">
            <div className="w-3/6 space-y-5">
              <div className="flex flex-col  space-y-3">
                <label htmlFor="">Title Cover</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Input subject email"
                  className="bg-latar-b py-2 px-5 rounded"
                />
              </div>
            </div>

            <div className="w-3/6 space-y-1 space-y-5">
              <div className="flex flex-col  space-y-3">
                <label htmlFor="">Subtitle Cover</label>
                <input
                  type="text"
                  name="subtitle"
                  placeholder="Input subject email"
                  className="bg-latar-b py-2 px-5 rounded "
                />
              </div>
            </div>
          </div>
          <div className="w-full space-y-1 border-b space-y-5">
            <div className="flex justify-between items-center py-1 ">
              <p>Gambar Cover</p>
              <input type="file" className="hidden" id="cover-image" />
              <label htmlFor="cover-image" className=" text-blue-400 font-semibold text-14px py-2 px-8 rounded-full border border-blue-400">
                Upload
              </label>
            </div>
          </div>

          {/* <p className="flex space-x-1">
            {" "}
            <span className="underline mr-2"> Tambah Gambar Lainnya</span>
            <Image src="/images/plus-icon.png" alt="" width={20} height={15} />
          </p> */}

          <div className="flex flex-col  w-full space-y-3 ">
            <label htmlFor="">Catalog</label>

            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Input subject email"
                className="bg-latar-b py-2 px-5 rounded-tl rounded-bl w-full"
              />
              <div className="bg-latar-b py-2 w-8 px-1 rounded-tr rounded-br">
                <Image
                  src="/images/search-icon.png"
                  alt=""
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </div>

        {highlight.map((data, index) => {
          return <HighlightForm key={index} highlightIndex={index} handleChange={handleChangeHighlight} />
        })}

        <div className="w-lebar mx-auto   font-NunitoSans ">
          <p className="flex space-x-1 cursor-pointer" onClick={addHighlight}>
            {" "}
            <span className="underline mr-2"> Add New Highlight</span>
            <Image src="/images/plus-icon.png" alt="" width={20} height={15} />
          </p>
        </div>
      </div>
      {preview && <PreviewModal handleClose={handleClosePreview} />}
      {publishModal && <PublishModal handleClose={handleClosePublishModal} />}
    </div>
  );
}
