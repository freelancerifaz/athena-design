import React from 'react'
import image from '../../images/feature_image.png'
import './feature.css';

function Features() {
    return (
        <section style = {{height : '800px'}} className = 'row d-flex align-items-center mt-5 offset-md-1'>
            <div className="col-md-6">
                <img src={image} className='img-fluid w-100' alt="Feature" />
            </div>
            <div className="col-md-5 ml-5">
                <h1 style = {{color: '#0D052E' , fontSize: '60px' , fontWeight: '800' , fontFamily: 'Merriweather serif'}}>Stay Running & Projects</h1>
                <p className = 'text-secondary'>It is a long established fact that a reader will be distracted by the
                <br/>readable content of a page when looking at its layout. The point of <br/>using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                <button style ={{backgroundColor: '#1BD5BE' , color: "white" , border: 'none' , borderRadius: '30px 0px 30px 0px' , padding: '20px 30px 20px 30px' , fontWeight: 800}} className = 'btn btn-primary'>See Pricing</button>
            </div>
        </section>
    )
}

export default Features
