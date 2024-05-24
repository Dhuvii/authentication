import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import QueryProvider from "../providers/QueryProvider";

const RootLayout = () => {
  return (
    <QueryProvider>
      <main className="">
        <Toaster
          position="bottom-right"
          cn={() => "w-full"}
          visibleToasts={5}
        />
        <Outlet />
      </main>
    </QueryProvider>
  );
};

export default RootLayout;
