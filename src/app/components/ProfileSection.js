import Image from 'next/image';
import React from 'react';
import dp from '/public/admin.jpg'
const ProfileSection = () => {
    return (
        <div className='max-w-6xl mx-5 p-10 xl:mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className="avatar">
                    <div className="rounded-full w-36 h-36">
                      <Image src={dp} alt='profile-pic'/>
                    </div>
                </div>
            </div>
            <div className='col-span-2'>

            </div>
        </div>
    );
};

export default ProfileSection;