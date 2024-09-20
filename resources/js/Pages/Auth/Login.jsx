import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import ladder from "../../../../public/ladder.svg";
import ladder_hat from "../../../../public/ladder-hat.svg";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <section className="bg-gray-50 w-full h-screen relative">
                <form
                    onSubmit={submit}
                    className="container h-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex lg:justify-center lg:items-center"
                >
                    <div className="hidden lg:!block">
                        <div>
                            <img src={ladder} alt="image-ladder" />
                        </div>
                        <div className="lg:absolute lg:top-[-30px] lg:right-0 xl:right-32">
                            <img
                                className="w-20 rotate-90"
                                src={ladder_hat}
                                alt="image-ladder-hat"
                            />
                        </div>
                    </div>
                    <div className="p-4 bg-orange-400 min-w-[190px] rounded-3xl mx-4 sm:min-w-0 sm:w-[450px] sm:mx-auto lg:px-8">
                        <div className="flex flex-col gap-3 mb-10">
                            <h1 className="text-2xl font-extrabold text-white text-center lg:text-3xl">
                                Get more things done with Loggin platform.
                            </h1>
                            <p className="text-base font-normal text-white text-wrap text-center">
                                Access to the most powerfull tool in the entire
                                design and web industry.
                            </p>
                        </div>

                        <div className="flex flex-col justify-center gap-1 mb-2">
                            <label
                                className="text-white text-sm"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                                className="rounded-lg py-3 border-none text-sm font-light"
                                placeholder="Enter your email here"
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-1 mb-2">
                            <label
                                className="text-white text-sm"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                                className="rounded-lg py-3 border-none text-sm font-light"
                                placeholder="Enter your password here"
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="ms-2 text-sm text-white">
                                    Remember me
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton
                                className="py-3 ml-3"
                                disabled={processing}
                            >
                                Log in
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </section>
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                
                </div>
            </form> */}
        </>
    );
}
