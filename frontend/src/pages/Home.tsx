import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Table from "../components/Table";
import useLocalStorage from "../hooks/useLocalStorage";
import useAuthStore from "../store/authStore";
import useGetLogs from "../api/auth/useGetLogs";
import { format } from "date-fns";

const Home = () => {
  const { user, setUser } = useAuthStore();
  const { removeStorage } = useLocalStorage();
  const navigate = useNavigate();

  const { data: logs, isPending: isLogsLoading } = useGetLogs();

  return (
    <main className="h-[100dvh] p-2 w-full bg-gradient-to-br from-gray-800 to-gray-950 flex flex-grow">
      <div className="bg-white min-h-full flex-1 rounded-2xl flex items-start justify-center overflow-y-auto">
        <div className="p-10 w-full h-full flex flex-col items-center justify-start">
          <h2 className="text-3xl font-medium">Welcome {user?.name}! </h2>
          <p className="text-xs text-gray-600">These are your logs</p>

          <div className="w-full max-w-3xl mx-auto mt-10">
            {!isLogsLoading && logs && (
              <Table
                className="rounded-xl max-h-[500px] overflow-y-auto"
                tableHeadClass="bg-gradient-to-br from-gray-800 to-gray-950 text-white"
                datas={logs.map((l: { loggedAt: string }) => {
                  let rows = [];

                  rows.push(
                    <div>
                      {format(
                        new Date(l.loggedAt).toUTCString(),
                        "do MMM, yyyy"
                      )}
                    </div>
                  );
                  rows.push(
                    <div>{l.loggedAt.split("T")[1].split(".")[0]}</div>
                  );

                  return rows;
                })}
                headings={["Date", "Time"]}
              />
            )}

            {isLogsLoading && (
              <div className="w-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse overflow-hidden p-2">
                <div className="h-12 w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full flex flex-col gap-6 mt-3">
                  <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-10">
            <Button
              onClick={async () => {
                removeStorage("token");
                setUser(null);
                navigate("/");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
