import React from 'react'
import Achievement from './Achievement'
import happyClients from '../../images/happy_clients.png'
import crazyMinds from '../../images/crazy_minds.png'
import runningProjects from '../../images/running_projects.png'
import projectsCompleted from '../../images/projects_completed.png'

import './Achievements.css'

function Achievements() {
    return (
        // <section className='container py-4 my-5'>
        //     <div className="row">
        //         <div className="col-md-5 d-flex justify-content-center flex-column">
        //             <h3 className="text-heading py-3">Our Acheievements</h3>

        //             <p className='text-normal text-secondary'>
        //                 It is a long established fact that a reader will be distracted by
        //                 the readable content of a page when looking at its layout. The
        //                 point of using Lorem Ipsum is that it has a more-or-less normal
        //                 distribution of letter.
        //             </p>
        //         </div>
        //         <div className="col-md-7">
        //             <div className="row">
        //                 <div className="col-md-6">
        //                     <Achievement
        //                         title='Happy Clients'
        //                         count='700+'
        //                         img={happyClients}
        //                         achievementClass='happy-clients border-rt' />
        //                     <Achievement
        //                         title='Projects Completed'
        //                         count='140+'
        //                         img={projectsCompleted}
        //                         achievementClass='border-lb shadow-custom'

        //                     />
        //                 </div>
        //                 <div className="col-md-6">
        //                     <Achievement
        //                         title='Crazy Minds'
        //                         count='25+'
        //                         img={crazyMinds}
        //                         achievementClass='border-lb'
        //                     />
        //                     <Achievement
        //                         title='Runing Projects'
        //                         count='75+'
        //                         img={runningProjects}
        //                         achievementClass='border-rt'
        //                     />
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        // </section >

        <section style = {{height : '800px'}} className = 'row d-flex align-items-center mt-5 offset-md-1'>
            <div className="col-md-5 pr-5 col-sm-12">
                <h3 style = {{color: '#0D052E' , fontSize: '60px' , fontWeight: '800' , fontFamily: 'Merriweather serif'}} className="text-heading py-3">Our Acheievements</h3>
                <p className='text-normal text-secondary'>
                It is a long established fact that a reader will be distracted by
                <br/>the readable content of a page when looking at its layout. The<br/>
                point of using Lorem Ipsum is that it has a more-or-less normal<br/>
                distribution of letter.
                </p>
            </div>
            <div className="col-md-6 col-sm-12">
            <div className="row">
                <div className="col-md-6">
                        <Achievement
                            title='Happy Clients'
                            count='700+'
                            img={happyClients}
                            achievementClass='happy-clients border-rt' />
                        <Achievement
                            title='Projects Completed'
                            count='140+'
                            img={projectsCompleted}
                            achievementClass='border-lb shadow-custom'

                        />
                    </div>
                    <div className="col-md-6">
                        <Achievement
                            title='Crazy Minds'
                            count='25+'
                            img={crazyMinds}
                            achievementClass='border-lb'
                        />
                        <Achievement
                            title='Runing Projects'
                            count='75+'
                            img={runningProjects}
                            achievementClass='border-rt'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements
