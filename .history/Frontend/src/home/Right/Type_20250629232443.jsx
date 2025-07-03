import { IoSend } from "react-icons/io5";


export default function Type() {
    return (
        <>
            <div className='flex space-x-3 h-[8vh] text-center'>
                <div className='w-[70%]'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full text-black w-[80%] pr-10 pl-4 py-2 border border-gray-100 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-slate-900 text-black shadow" />

                </div>

                <button className=" py-3 text-3xl flex items-center justify-center rounded-full ">
                    <IoSend  />
                </button>



            </div>
        </>
    )

}