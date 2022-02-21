import Image from "next/image";

export default function Index() {
  return (
    <div className=" flex space-x-2 w-full bg-latar-b">
      <div className="w-16 h-auto bg-white">
        Menu
      </div>
      <div className="w-full">
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
                >
                  Preview File
                </button>
                <button
                  id="btnPublish"
                  type="button"
                  className=" px-4 py-1 border border-gray-300 text-white font-semibold  text-16px  hover:bg-black hover:bg-opacity-5 rounded  bg-gray-400 "
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
                  placeholder="Input subject email"
                  className="bg-latar-b py-2 px-5 rounded "
                />
              </div>
            </div>

          </div>
            <div className="w-full space-y-1 border-b space-y-5">
              <div className="flex justify-between items-center py-1 ">
                <p>Gambar Cover</p>
                <button className=" text-blue-400 font-semibold text-14px py-2 px-8 rounded-full border border-blue-400">
                  Upload
                </button>
              </div>
            </div>

          {/* <p className="flex space-x-1">
            {" "}
            <span className="underline mr-2"> Tambah Gambar Lainnya</span>
            <Image src="/images/plus-icon.png" alt="" width={20} height={15} />
          </p> */}

          <div className="flex flex-col  w-full space-y-3 ">
            <label htmlFor="">Subject Email</label>

            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="Input subject email"
                className="bg-latar-b py-2 px-5 rounded-tl rounded-bl w-full"
              />
              <Image
                src="/public/img/search.png"
                alt=""
                className="bg-latar-b py-2 w-8 px-1 rounded-tr rounded-br"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div className="w-lebar mx-auto py-10 font-NunitoSans">
          <h1 className="font-Poppins font-semibold  text-20px">
            Top Higlight
          </h1>
          <div className="w-lebar mx-auto bg-white py-10 px-10 space-y-8 mt-5 font-NunitoSans rounded-lg">
            <div className="flex flex-col space-y-3">
              <label htmlFor="">Subject Email</label>
              <input
                type="text"
                placeholder="Input subject email"
                className="bg-latar-b py-2 px-5 rounded"
              />
            </div>

            <div className="border rounded">
              <div className="py-1 px-5 border-b">
                {/* <Image src="/public/img/image 4.png" alt="" width={100} height={100} /> */}
              </div>
              <textarea
                name="komentar"
                rows="10"
                placeholder="Komentar"
                className=" w-full"
              ></textarea>
            </div>

            <div className="flex justify-between space-x-5">
              <div className="flex flex-col w-3/6  space-y-3">
                <label htmlFor="">Subject Email</label>
                <input
                  type="text"
                  placeholder="Input subject email"
                  className="bg-latar-b py-2 px-5 rounded"
                />
              </div>

              <div className="flex flex-col w-3/6 space-y-3">
                <label htmlFor="">Subject Email</label>
                <input
                  type="text"
                  placeholder="Input subject email"
                  className="bg-latar-b py-2 px-5 rounded"
                />
              </div>
            </div>
            <p className="flex space-x-1">
              {" "}
              <span className="underline mr-2"> Tambah Gambar Lainnya</span>
              <Image
                src="/images/plus-icon.png"
                alt=""
                width={20}
                height={15}
              />
            </p>
          </div>
        </div>

        <div className="w-lebar mx-auto   font-NunitoSans ">
          <p className="flex space-x-1">
            {" "}
            <span className="underline mr-2"> Add New Highlight</span>
            <Image src="/images/plus-icon.png" alt="" width={20} height={15} />
          </p>
        </div>
      </div>
    </div>
  );
}
