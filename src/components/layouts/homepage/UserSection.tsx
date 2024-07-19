import React from 'react'
import { Descript, Grammarly, Intercom, Notion, UnSplash } from './svgs'



const UserSection = () => {
    return (
        <div className="user-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1>
                    More than 200 <span>Users</span> make use of our Boilerplate
                </h1>

                <div className="section-box">
                        <div className="image-section">
                            <UnSplash />
                            <Notion/>
                            <Intercom/>
                            <Descript/>
                            <Grammarly/>
                        </div>
                </div>

            </div>
        </div>

    )
}

export default UserSection
