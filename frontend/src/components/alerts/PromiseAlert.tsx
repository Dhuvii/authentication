import { useState } from "react";
import { Button } from "../Button";
import { toast } from "sonner";

interface IAlertToast {
  t: string | number;
}

const PromiseAlert = ({ t }: IAlertToast) => {
  const [promiseLoading, setPromiseLoading] = useState(false);

  return (
    <div className="relative w-full h-full min-w-full overflow-hidden rounded-xl shadow bg-white border">
      <div className="rounded-lg overflow-hidden flex items-start justify-between">
        <div className="flex items-start justify-start gap-3 p-3 py-4">
          <div className="h-full flex-1 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-800"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 .999c-6.074 0-11 5.05-11 11.278c0 4.983 3.152 9.21 7.523 10.702c.55.104.727-.246.727-.543v-2.1c-3.06.683-3.697-1.33-3.697-1.33c-.5-1.304-1.222-1.65-1.222-1.65c-.998-.7.076-.686.076-.686c1.105.08 1.686 1.163 1.686 1.163c.98 1.724 2.573 1.226 3.201.937c.098-.728.383-1.226.698-1.508c-2.442-.286-5.01-1.253-5.01-5.574c0-1.232.429-2.237 1.132-3.027c-.114-.285-.49-1.432.107-2.985c0 0 .924-.303 3.026 1.156c.877-.25 1.818-.375 2.753-.38c.935.005 1.876.13 2.755.38c2.1-1.459 3.023-1.156 3.023-1.156c.598 1.554.222 2.701.108 2.985c.706.79 1.132 1.796 1.132 3.027c0 4.332-2.573 5.286-5.022 5.565c.394.35.754 1.036.754 2.088v3.095c0 .3.176.652.734.542C19.852 21.484 23 17.258 23 12.277C23 6.048 18.075.999 12 .999"
              />
            </svg>
          </div>

          <div className="">
            <h3 className="text-base text-gray-800 font-medium">
              Lets get connected!
            </h3>
            <p className="text-xs text-gray-600 mt-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates, saepe?
            </p>

            <div className="mt-5 w-full flex items-center justify-end gap-5">
              <Button
                onClick={() => toast.dismiss(t)}
                variant={"secondary"}
                wrapperClass="w-max"
              >
                Cancel
              </Button>

              <Button
                isSpinning={promiseLoading}
                onClick={async () => {
                  setPromiseLoading(true);
                  await new Promise((res) => {
                    setTimeout(() => {
                      res("");
                    }, 2000);
                  });
                  setPromiseLoading(false);
                  await new Promise((res) => {
                    setTimeout(() => {
                      res("");
                    }, 400);
                  });
                  toast.dismiss(t);
                }}
                wrapperClass="w-max"
              >
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <Button
          variant={"ghost"}
          className=" text-sm text-gray-500"
          onClick={() => toast.dismiss(t)}
        >
          &#10005;
        </Button>
      </div>
    </div>
  );
};

export default PromiseAlert;
