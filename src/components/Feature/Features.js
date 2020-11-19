import React from 'react'
import image from './feature_image.png'
import './feature.css';

function Features() {
    return (
        <section className='container'>
            <div className="row">
                <div className="col-md-6 order-2">
                    <img src={image} className='img-fluid w-100' alt="Feature" />
                </div>
                <div className="col-md-6 order-1 d-flex justify-content-center flex-column">
                    <div className=''>
                        <h2 className='text-heading'>Stay Running & Projects</h2>
                        <p className='text-secondary'>It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution
                    of letter.</p>
                        <button className="button-custom">Contact us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
