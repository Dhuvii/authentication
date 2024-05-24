import { toast } from "sonner";

interface IAlertToast {
  t: string | number;
  title: string;
  description: string;
}
const Success = ({ t, title, description }: IAlertToast) => {
  return (
    <div className="w-full h-full min-w-full overflow-hidden rounded-xl shadow bg-white border">
      <div className="rounded-lg overflow-hidden flex items-start justify-between">
        <div className="flex items-center justify-start gap-3 border-l-4 border-green-600 p-3 py-4">
          <div className="h-full flex-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <div className="">
            <h3 className="text-base font-medium text-green-600">{title}</h3>
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

export default Success;
