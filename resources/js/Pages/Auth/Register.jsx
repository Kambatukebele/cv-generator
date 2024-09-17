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
            <form className='bg-orange-500 w-full h-screen px-8 flex justify-center items-center'>
                <div className='hidden'>
                    <div>
                        <img src={ladder} alt="image-ladder" />
                    </div>
                    <div className=''>
                        <img src={ladder_hat} alt="image-ladder-hat" />
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-2xl font-semibold text-white text-center'>Get more things done with Loggin platform.</h1>
                        <p className='text-base font-normal text-white text-wrap text-center'>
                            Access to the most powerfull tool in the entire design and web industry.
                        </p>
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='' placeholder='Enter your name here' />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='' placeholder='Enter your name here' />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='' placeholder='Enter your email here' />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='' placeholder='Enter your password here' />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <label htmlFor="confirm password">Confirm password</label>
                        <input type="password" name='' placeholder='Enter your confirm password here' />
                    </div>
                    <div className='flex flex-col justify-center gap-1'>
                        <div>
                            <a href="#">Already registered</a>
                        </div>
                        <div>
                            <button type='submit'>Register</button>
                        </div>
                    </div>
                </div>
            </form>
            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
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
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}
        </>
    );
}
