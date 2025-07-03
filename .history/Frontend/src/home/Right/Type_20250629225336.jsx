import SendIcon from '@mui/icons-material/Send';

export default function Type() {
    return (
        <>
           <div className=''>
             <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black w-[80%] pr-10 pl-4 py-2 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-900 text-black shadow" />

            </div>
            <button>
                <SendIcon />
            </button>
           </div>
        </>
    )

}