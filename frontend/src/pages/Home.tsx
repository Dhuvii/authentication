import { useNavigate } from "react-router-dom";
import { BasicButton } from "../components/Button";
import useLocalStorage from "../hooks/useLocalStorage";
import useAuthStore from "../store/authStore";
import useGetLogs from "../api/auth/useGetLogs";

const Home = () => {
  const { user, setUser } = useAuthStore();
  const { removeStorage } = useLocalStorage();
  const navigate = useNavigate();

  const { data: logs, isPending: isLogsLoading } = useGetLogs();

  return (
    <main className="h-[100dvh] relative p-2 w-full bg-gradient-to-br from-gray-800 to-gray-950 flex flex-grow">
      <div className="bg-white min-h-full flex-1 rounded-2xl flex items-start justify-center overflow-y-auto">
        <div className="p-10 w-full h-full flex items-center justify-center flex-col">
          <div className="relative w-full z-10">
            {/* floating icons */}
            <div className="absolute inset-0">
              <div className="w-full h-[130%] z-20 -mt-[3%] relative max-w-lg mx-auto">
                <div className="absolute animate-spin-circle [--spin-radius:10px] top-0 left-0 rounded-full p-1 w-min bg-white">
                  <div className="absolute inset-0 bg-orange-500/50 blur-md rounded-full"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-10 h-10 text-orange-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute animate-spin-circle [--spin-radius:25px] top-10 right-10 rounded-full p-1 w-min bg-white">
                  <div className="absolute inset-0 bg-amber-500/50 blur-md rounded-full"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-7 h-7 text-amber-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute animate-spin-circle [--spin-radius:15px] top-52 right-0 rounded-full p-1 w-min bg-white">
                  <div className="absolute inset-0 bg-pink-500/50 blur-md rounded-full"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-10 h-10 text-pink-600"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1c.043.043.09.08.14.11c-.23.401-.36.865-.36 1.36c0 .495.13.959.36 1.36a.751.751 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a.751.751 0 0 0 .11-.14c.401.23.865.36 1.36.36c.495 0 .959-.13 1.36-.36c.03.05.067.097.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.751.751 0 0 0-.14-.11c.23-.401.36-.865.36-1.36c0-.495-.13-.959-.36-1.36a.751.751 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a.752.752 0 0 0-.11.14A2.737 2.737 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a.752.752 0 0 0-.11-.14z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <div className="absolute animate-spin-circle [--spin-radius:35px] [--spin-duration:3s] top-72 left-0 rounded-full p-1 w-min bg-white">
                  <div className="absolute inset-0 bg-indigo-500/50 blur-md rounded-full"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="relative w-10 h-10 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M20.994 8.25H3.006c.027-2.636.191-4.104 1.166-5.078C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.975.974 1.139 2.442 1.166 5.078M5.75 5.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m8.75 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M9.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
                    />
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M3 9.75h18V13c0 3.771 0 5.657-1.172 6.828a3.1 3.1 0 0 1-1.078.697V22a.75.75 0 0 1-1.5 0v-1.129C16.18 21 14.806 21 13 21h-2c-1.806 0-3.18 0-4.25-.129V22a.75.75 0 0 1-1.5 0v-1.475a3.1 3.1 0 0 1-1.078-.697C3 18.657 3 16.771 3 13zm9 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* end of floating icons */}

            {/* floating circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-72 rounded-full border-2 border-dashed"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-[27rem] rounded-full border-2 border-gray-100 border-dashed"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-[36rem] rounded-full border-2 border-gray-100 border-dashed"></div>
            </div>
            {/* end of floating circles */}

            <div className="w-full max-w-sm mx-auto relative z-20">
              <div className="mb-5 bg-white flex items-center p-3 gap-3 justify-start scale-95 shadow-md rounded-lg">
                <div className="size-12 flex-shrink-0 bg-gray-200/60 rounded-full"></div>
                <div className="w-full">
                  <div className="h-5 rounded-md bg-gray-200/50 w-full"></div>
                  <div className="mt-2 h-3 rounded-md bg-gray-200/40 w-[20%]"></div>
                </div>
              </div>

              <div className="p-[0.25rem] relative backdrop-blur-lg bg-gradient-to-tr rounded-xl from-[#09578F]/80 to to-[#6ebbf2]/80">
                <div className="absolute opacity-40 blur-md inset-0 rounded-xl bg-gradient-to-tr from-[#09578F] to to-[#6ebbf2]"></div>
                <div className="relative flex bg-white items-center p-3 gap-3 justify-start shadow-xl rounded-lg">
                  <div className="flex items-center justify-center gap-3">
                    <div className="aspect-square rounded-full bg-[#054d80] p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16"
                          opacity="0.5"
                        />
                        <path
                          fill="currentColor"
                          d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a23.57 23.57 0 0 1 1.5-.051z"
                        />
                      </svg>
                    </div>

                    <div className="">
                      <h3 className="text-2xl font-medium text-gray-800">
                        Secure Login
                        <span className="text-base ml-3">Group 04</span>
                      </h3>
                      <p className="text-xs text-gray-600">
                        Advanced Database Management System
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex bg-white items-center p-3 gap-3 justify-start scale-95 shadow-md rounded-lg">
                <div className="size-12 flex-shrink-0 bg-gray-200/60 rounded-full"></div>
                <div className="w-full">
                  <div className="h-5 rounded-md bg-gray-200/50 w-full"></div>
                  <div className="mt-2 h-3 rounded-md bg-gray-200/40 w-[20%]"></div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xs mx-auto mt-10 relative z-30">
              <h3 className="text-xl font-medium text-gray-800">Logs</h3>
              <p className="text-xs text-gray-600">
                Displays the timestamp of the logins
              </p>
              <div className="w-full mt-4 flex flex-col gap-3 max-h-40 overflow-y-auto">
                {!isLogsLoading &&
                  logs &&
                  logs.map((l: { loggedAt: string }) => (
                    <div className="w-full flex items-center justify-between gap-3">
                      <p className="text-xs w-min uppercase tracking-wider font-bold text-green-700 bg-green-100 rounded-md px-2 py-1">
                        successfull
                      </p>
                      <p className="text-sm font-medium text-gray-800 whitespace-nowrap">
                        {new Date(l.loggedAt).toISOString()}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 p-10">
            <div className="flex items-center justify-start gap-3">
              <div className="size-12 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="6" r="4" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
                    opacity="0.5"
                  />
                </svg>
              </div>
              <div className="">
                <h3 className="text-base font-medium text-gray-800">
                  {user?.name}
                </h3>
                <BasicButton
                  onClick={() => {
                    removeStorage("token");
                    setUser(null);
                    navigate("/");
                  }}
                  variant={"ghost"}
                  wrapperClass="-mt-2"
                  className={
                    "text-gray-600 text-xs pt-0 md:pt-0 hover:text-gray-800 hover:underline "
                  }
                >
                  Logout
                </BasicButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
