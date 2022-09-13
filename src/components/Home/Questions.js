import React from 'react';
import pose4 from '../../images/pose4.png';
import ellipse1 from '../../images/ellipse1.png';

const Questions = () => {
    return (
        <div className='md:flex justify-between mb-12 px-20 lg:px-40'>
            <div className='sm:w-full md:w-3/5'>
                <h1 className='text-xl text-secondary font-semibold'>FAQ Questions</h1>
                <h2 className='text-4xl font-semibold mt-3'>Get Your General Answer</h2>

                <div className="collapse collapse-plus">
                    <input type="checkbox" />
                    <div className="collapse-title text-primary font-semibold flex justify-between md:w-4/5 lg:w-3/5">
                        <div>
                            <h1>Get Your General Answer</h1>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hellosimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="collapse collapse-plus">
                    <input type="checkbox" />
                    <div className="collapse-title text-primary font-semibold flex justify-between md:w-4/5 lg:w-3/5">
                        <div>
                            <h1>Will I always see my own doctor?</h1>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hellosimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="collapse collapse-plus">
                    <input type="checkbox" />
                    <div className="collapse-title text-primary font-semibold flex justify-between md:w-4/5 lg:w-3/5">
                        <div>
                            <h1>What is one Medical’s care?</h1>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hellosimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="collapse collapse-plus">
                    <input type="checkbox" />
                    <div className="collapse-title text-primary font-semibold flex justify-between md:w-4/5 lg:w-3/5">
                        <div>
                            <h1>What is evidence based medicine?</h1>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hellosimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>

                <div className="collapse collapse-plus">
                    <input type="checkbox" />
                    <div className="collapse-title text-primary font-semibold flex justify-between md:w-4/5 lg:w-3/5">
                        <div>
                            <h1>What is an academic medical center?</h1>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <p>hellosimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    </div>
                </div>
            </div>

            <div style={{
                background: `url(${ellipse1})`,
                backgroundSize: 'cover',
            }}>
                <img src={pose4} alt="pose4" />
            </div>
        </div>
    );
};

export default Questions;