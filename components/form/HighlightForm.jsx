import Image from "next/image";

const HighlightForm = ({ key, highlightIndex, handleChange }) => {
    const highlightNumber = highlightIndex + 1;
    return (
      <div className="w-lebar mx-auto py-10 font-NunitoSans">
        <h1 className="font-Poppins font-semibold  text-20px">Top Higlight {highlightNumber}</h1>
        <div className="w-lebar mx-auto bg-white py-10 px-10 space-y-8 mt-5 font-NunitoSans rounded-lg">
          <div className="flex flex-col space-y-3">
            <label htmlFor="">Title Highlight</label>
            <input
              type="text"
              placeholder="Input subject email"
              className="bg-latar-b py-2 px-5 rounded"
              name="title"
              onChange={(e) => handleChange(highlightIndex, e)}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <label htmlFor="">Highlight Body</label>
            <div className="border rounded">
              <div className="py-1 px-5 border-b">
                {/* <Image src="/public/img/image 4.png" alt="" width={100} height={100} /> */}
              </div>
              <textarea
                name="body"
                rows="10"
                placeholder="Highlight Body"
                className=" w-full"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-between space-x-5">
            <div className="flex flex-col w-3/6  space-y-3">
              <label htmlFor="">ILB Review Link</label>
              <input
                name="ilbLink"
                type="text"
                placeholder="Input subject email"
                className="bg-latar-b py-2 px-5 rounded"
              />
            </div>

            <div className="flex flex-col w-3/6 space-y-3">
              <label htmlFor="">Regulation Link</label>
              <input
                name="regulationLink"
                type="text"
                placeholder="Input subject email"
                className="bg-latar-b py-2 px-5 rounded"
              />
            </div>
          </div>
          <p className="flex space-x-1">
            {" "}
            <span className="underline mr-2">Tambah Link Lainnya</span>
            <Image src="/images/plus-icon.png" alt="" width={20} height={15} />
          </p>
        </div>
      </div>
    );
  };

  export default HighlightForm;