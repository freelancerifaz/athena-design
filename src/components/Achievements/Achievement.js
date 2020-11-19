import React from 'react'

function Achievement({ title, count, img, achievementClass }) {
    return (
        <div className={`${achievementClass} shadow-custom my-2 d-flex justify-content-center align-items-center p-1`}>
            <div >
                <img src={img} className='img-fluid w-100' alt={title} />
            </div>
            <div className='p-2 d-flex justify-content-center align-items-center flex-column'>
                <h3 className="text-secondary font-weight-bold text-center">{count}</h3>
                <p className='text-secondary'>{title}</p>
            </div>
        </div>
    )
}

export default Achievement
