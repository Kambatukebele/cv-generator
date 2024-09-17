import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import ladder from '../../../../public/ladder.svg';
import ladder_hat from '../../../../public/ladder-hat.svg';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />
            <section className='bg-gray-50 w-full h-screen relative'>
                <form onSubmit={submit} className='container h-fit mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:flex lg:justify-center lg:items-center'>
                    <div className='hidden lg:!block'>
                        <div>
                            <img src={ladder} alt="image-ladder" />
                        </div>
                        <div className='lg:absolute lg:top-[-30px] lg:right-0 xl:right-32'>
                            <img className='w-20 rotate-90' src={ladder_hat} alt="image-ladder-hat" />
                        </div>
                    </div>
                    <div className='p-4 bg-orange-400 min-w-[190px] rounded-3xl mx-4 sm:min-w-0 sm:w-[450px] sm:mx-auto lg:px-8'>
                        <div className='flex flex-col gap-3 mb-10'>
                            <h1 className='text-2xl font-extrabold text-white text-center lg:text-3xl'>Get more things done with Loggin platform.</h1>
                            <p className='text-base font-normal text-white text-wrap text-center'>
                                Access to the most powerfull tool in the entire design and web industry.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center gap-1 mb-2'>
                            <label className='text-white text-sm' htmlFor="name">Name</label>
                            <input 
                                type="text"
                                id="name" 
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required 
                                className='rounded-lg py-3 border-none text-sm font-thin' placeholder='Enter your name here' 
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 mb-2'>
                            <label className='text-white text-sm' htmlFor="email">Email</label>
                            <input 
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required 
                                className='rounded-lg py-3 border-none text-sm font-thin'
                                placeholder='Enter your email here'
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 mb-2'>
                            <label className='text-white text-sm' htmlFor="password">Password</label>
                            <input 
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required 
                                className='rounded-lg py-3 border-none text-sm font-thin' 
                                placeholder='Enter your password here'
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className='flex flex-col justify-center gap-1 mb-2'>
                            <label className='text-white text-sm' htmlFor="confirm password">Confirm password</label>
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required 
                                className='rounded-lg py-3 border-none text-sm font-thin'
                                placeholder='Enter your confirm password here'
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                        <div className='flex justify-end items-center gap-2 my-10'>
                            <div>
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-white"
                                >
                                    Already registered?
                                </Link>
                            </div>
                            <div>
                                <PrimaryButton className="ms-4 bg-white text-orange-400 py-3" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
