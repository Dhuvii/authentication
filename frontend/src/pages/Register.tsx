import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useRegister from "../api/auth/useRegister";
import { Button } from "../components/Button";
import Input from "../components/Input";
import Spinner from "../components/Spinner";
import { RegisterSchema, registerInput } from "../schema/Register.Schema";
import useAuthStore from "../store/authStore";

const Register = () => {
  const { getUser } = useAuthStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<registerInput>({
    mode: "onTouched",
    defaultValues: {},
    resolver: zodResolver(RegisterSchema),
  });

  const {
    mutateAsync: registerUser,
    isPending: isRegisterLoading,
    error: registerError,
  } = useRegister();

  useEffect(() => {
    const error = (registerError as AxiosError)?.response?.data as {
      message: string;
    };
    if (error) {
      if (error.message === "User not found") {
        setError("email", {
          message: error.message,
        });
      }

      if (error.message === "Invalid credentials") {
        setError("password", {
          message: error.message,
        });
      }
    }
  }, [registerError]);

  return (
    <main className="h-[100dvh] p-2 w-full bg-gradient-to-br from-gray-800 to-gray-950 flex flex-grow">
      <div className="bg-white min-h-full flex-1 rounded-2xl flex items-start justify-center overflow-y-auto">
        <div className="w-full flex h-full">
          <div className="relative hidden h-full w-[50%] lg:block">
            <div className="absolute inset-x-0 bottom-0 w-full">
              <img
                src="/cover.jpeg"
                alt="register image"
                className="h-[100dvh] w-full object-cover"
              />
            </div>
            <div className="h-full w-full bg-gray-200"></div>
          </div>

          <div className="relative flex h-full w-[50%] grow flex-col overflow-y-auto overflow-x-hidden">
            {true ? (
              <>
                <div className="flex w-full flex-1 flex-col items-center justify-center">
                  <div className="flex w-full flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-3">
                      <div className="aspect-square rounded-full bg-[#054D80] p-3">
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
                        </h3>
                        <p className="text-xs text-gray-600">By Group 02</p>
                      </div>
                    </div>

                    <h1 className="mt-10 text-2xl">Create an account</h1>
                    <p className="mt-1 text-sm text-gray-600">
                      Register your new secure account.
                    </p>

                    <div className="mt-10 w-full max-w-sm">
                      <form
                        onSubmit={handleSubmit(async (values) => {
                          const user = await registerUser(values);
                          if (user) {
                            await getUser();
                            navigate("/");
                          }
                        })}
                      >
                        <fieldset disabled={isRegisterLoading}>
                          <div className="w-full grid grid-cols-1 gap-8">
                            <Input
                              label="Name"
                              type="text"
                              className="w-full"
                              placeholder="Enter your name"
                              {...register("name")}
                              error={errors.name && errors.name.message}
                            />

                            <Input
                              label="Email"
                              type="email"
                              className="w-full"
                              placeholder="Enter your email"
                              {...register("email")}
                              error={errors.email && errors.email.message}
                            />
                          </div>
                          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                            <Input
                              label="Password"
                              type="password"
                              className="w-full"
                              placeholder="Enter your password"
                              {...register("password")}
                              error={errors.password && errors.password.message}
                            />
                            <Input
                              label="Confirm Password"
                              type="password"
                              className="w-full"
                              placeholder="Confirm password"
                              {...register("confirmPassword")}
                              error={
                                errors.confirmPassword &&
                                errors.confirmPassword.message
                              }
                            />
                          </div>
                        </fieldset>

                        <Button
                          type="submit"
                          wrapperClass="w-full mt-10"
                          isSpinning={isRegisterLoading}
                          className={"flex w-full items-center justify-center"}
                        >
                          Continue
                        </Button>
                      </form>
                    </div>

                    <p className="mt-2 text-xs text-gray-600">
                      Already have an account?{" "}
                      <Link
                        className="text-skin-primary hover:underline"
                        to={"/user/signin"}
                      >
                        Sign in
                      </Link>
                    </p>

                    <p className="mt-14 w-full max-w-xs text-center text-[0.65rem] text-gray-500">
                      By clicking Continue with Google you agree to secure
                      logins&apos;s <br />{" "}
                      <a
                        href="#"
                        target="_blank"
                        className="text-skin-primary hover:underline"
                      >
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        target="_blank"
                        className="text-skin-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="my-10 flex h-full items-center justify-center">
                <Spinner size={"sm"} className="text-gray-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
