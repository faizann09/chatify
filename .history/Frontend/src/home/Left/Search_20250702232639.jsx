import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export default function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();
  console.log(allUsers);
   const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };


  return (
    <div className="p-4 w-full max-w-md z-50 ">
     <form action="">
       <div className="relative w-[80%]">
        <input
          type="text"
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[80%] pr-10 pl-4 py-2 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent  text-black shadow"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-8 flex items-center text-white "
        >
          <MagnifyingGlassIcon className="h-7 w-7 hover:text-gray-600 rounded-full duration-300 " />
        </button>
      </div>
     </form>
    </div>
  );
}
