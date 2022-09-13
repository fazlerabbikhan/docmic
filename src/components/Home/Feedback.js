import React from "react";
import { Link } from 'react-router-dom';

const Feedback = () => {
    return (
        <div className='mb-12 rounded-lg mt-20'>
            <div>
                <h1 className='text-xl text-secondary text-center font-semibold'>Feedback</h1>
                <h1 className='text-2xl text-center font-semibold mt-3'>Share Your Experience With Us</h1>
            </div>

            <div className='grid grid-cols-1 justify-items-center gap-5 mt-6'>
                <input
                    type='text'
                    placeholder='Your email address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button>
                    <Link className='btn btn-primary' to='/'>Submit</Link>
                </button>
            </div>
        </div>
    );
};

export default Feedback;