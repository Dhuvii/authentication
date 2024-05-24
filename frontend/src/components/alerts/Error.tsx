import { toast } from "sonner";

interface IAlertToast {
  t: string | number;
  title: string;
  description: string;
}
const Error = ({ t, title, description }: IAlertToast) => {
  return (
    <div className="w-full h-full min-w-full overflow-hidden rounded-xl shadow bg-white border">
      <div className="rounded-lg overflow-hidden flex items-start justify-between">
        <div className="flex items-center justify-start gap-3 border-l-4 border-red-600 p-3 py-4">
          <div className="h-full flex-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m0 8.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="">
            <h3 className="text-base font-medium text-red-600">{title}</h3>
            <p className="text-xs text-gray-600 mt-1">{description}</p>
          </div>
        </div>
        <button
          className="text-sm text-gray-500 m-3"
          onClick={() => toast.dismiss(t)}
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default Error;
