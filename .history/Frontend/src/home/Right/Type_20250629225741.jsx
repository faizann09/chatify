import SendIcon from '@mui/icons-material/Send';

export default function Type() {
    return (
        <>
            <div className='flex'>
                <div className='w-[70%]'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full text-black w-[80%] pr-10 pl-4 py-2 border border-gray-100 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 bg-slate-900 text-black shadow" />

                </div>
                <button className='text-3xl'>
                    <SendIcon  />
                </button>
            </div>
        </>
    )

}