export default function Signup() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-2 text-center">Create a new account</h1>
                    <h2 className="text-gray-600 text-center mb-6">It's free and always will be</h2>

                    <div className="flex flex-col gap-4">

                        {/* Email */}
                        <label className="input validator flex items-center gap-2 border px-3 py-2 rounded">
                            <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input className="flex-1 outline-none" type="email" placeholder="mail@site.com" required />
                        </label>

                        {/* Username */}
                        <label className="input validator flex items-center gap-2 border px-3 py-2 rounded">
                            <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </g>
                            </svg>
                            <input
                                className="flex-1 outline-none"
                                type="text"
                                required
                                placeholder="Username"
                                pattern="[A-Za-z][A-Za-z0-9\-]*"
                                minLength="3"
                                maxLength="30"
                                title="Only letters, numbers or dash"
                            />
                        </label>
                        {/* <p className="text-sm text-gray-500 -mt-2">
                            Must be 3 to 30 characters, only letters, numbers or dash
                        </p> */}

                        {/* Password */}
                        <label className="input validator flex items-center gap-2 border px-3 py-2 rounded">
                            <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                className="flex-1 outline-none"
                                type="password"
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must include number, lowercase, uppercase letter"
                            />
                        </label>
                        {/* <p className="text-sm text-gray-500 -mt-2">
                            Must be more than 8 characters, including number, lowercase & uppercase letter
                        </p> */}

                        {/* Confirm Password */}
                        <label className="input validator flex items-center gap-2 border px-3 py-2 rounded">
                            <svg className="h-5 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                    <path
                                        d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                    ></path>
                                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                </g>
                            </svg>
                            <input
                                className="flex-1 outline-none"
                                type="password"
                                required
                                placeholder="Confirm Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must include number, lowercase, uppercase letter"
                            />
                        </label>
                        {/* <p className="text-sm text-gray-500 -mt-2">
                            Repeat password with same requirements
                        </p> */}

                        <p>Have a Account</p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition duration-300"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
