import React from 'react'
import Achievement from './Achievement'
import happyClients from './img/happy_clients.png'
import crazyMinds from './img/crazy_minds.png'
import runningProjects from './img/running_projects.png'
import projectsCompleted from './img/projects_completed.png'

import './Achievements.css'
function Achievements() {
    return (
        <section className='container py-4 my-5'>
            <div className="row">
                <div className="col-md-5 d-flex justify-content-center flex-column">
                    <h3 className="text-heading py-3">Our Acheievements</h3>

                    <p className='text-normal text-secondary'>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter.
                    </p>
                </div>
                <div className="col-md-7">
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
            </div>
        </section >
    )
}

export default Achievements
