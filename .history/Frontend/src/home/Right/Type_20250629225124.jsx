import SendIcon from '@mui/icons-material/Send';

export default function Type() {
    return (
        <>
           <div>
             <div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-black" />

            </div>
            <button>
                <SendIcon />
            </button>
           </div>
        </>
    )

}