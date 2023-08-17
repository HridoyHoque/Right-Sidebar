import Image from 'next/image';
import React from 'react';
import dp from '/public/admin.jpg'
import { IoSettingsOutline } from 'react-icons/io5';
const ProfileSection = () => {
    return (
        <div className='max-w-6xl mx-5 p-10 xl:mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className="avatar justify-center">
                    <div className="rounded-full w-36 h-36">
                        <Image src={dp} alt='profile-pic' />
                    </div>
                </div>
                <div className='col-span-2'>
                    <span className="text-gray-700 text-2xl-mr-4">
                       Hridoy Hoque
                    </span>
                    <div className="cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4">Edit Profile</div>
                    <IoSettingsOutline className="cursor-pointer h-6 inline" />
                    <div className='mt-4 flex'>
                        <div><span className='font-semibold'>150</span> posts</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> followers</div>
                        <div className="ml-4"><span className='font-semibold'>180</span> Following</div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default ProfileSection;