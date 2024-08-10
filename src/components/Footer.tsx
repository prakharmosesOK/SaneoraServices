import React from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="box-border py-4 px-14 w-full border-t border-gray-200 bg-black text-white">
            <div className="flex flex-wrap justify-between text-base font-medium tracking-wide mx-auto my-4 w-11/12">
                <div className="flex flex-col items-center justify-center mx-4 px-4">
                    <h3 className="mb-2 text-orange-500">Quick Links</h3>
                    <ul className="m-0 p-0">
                        <li className="list-none my-2 cursor-pointer hover:border-b hover:border-green-400">Privacy Policy</li>
                        <li className="list-none my-2 cursor-pointer hover:border-b hover:border-green-400">Terms and Conditions</li>
                        <li className="list-none my-2 cursor-pointer hover:border-b hover:border-green-400">Services</li>
                        <li className="list-none my-2 cursor-pointer hover:border-b hover:border-green-400">About Us</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center mx-4 px-4">
                    <h3 className="mb-2 text-orange-500">Contact</h3>
                    <ul className="m-0 p-0">
                        <li className="list-none my-2">Address: Hostel Des, Indian Institute of Technology Tirupati, India</li>
                        <li className="list-none my-2">
                            Phone:  
                            <div className="flex flex-col ml-2">
                                <p className="m-0">+91 8963066475</p>
                                <p className="m-0">+91 9123476196</p>
                                <p className="m-0">+91 9550877585</p>
                            </div>
                        </li>
                        <li className="list-none my-2">
                            Email:  
                            <div className="flex flex-col ml-2">
                                <Link href='mailto:prakharmoses@gmail.com' className="text-white no-underline hover:text-orange-300">prakharmoses@gmail.com</Link>
                                <Link href='mailto:mihirsinha20@gmail.com' className="text-white no-underline hover:text-orange-300">mihirsinha20@gmail.com</Link>
                                <Link href='mailto:vishnukoushikn@gmail.com' className="text-white no-underline hover:text-orange-300">vishnukoushikn@gmail.com</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center mx-4 px-4">
                    <h3 className="mb-2 text-orange-500">Mobile App</h3>
                    <div className="flex flex-col items-center">
                        <Image src="/Social_handles_and_apps/googleplayLogo.png" alt="Google Play" className="w-32 h-9 my-2 cursor-pointer bg-white rounded-md hover:border-2 hover:border-green-400" width={48} height={14} />
                        <Image src="/Social_handles_and_apps/appleLogo.png" alt="App Store" className="w-32 h-9 my-2 cursor-pointer bg-white rounded-md hover:border-2 hover:border-green-400" width={48} height={14} />
                        <Image src="/Social_handles_and_apps/microsoftLogo.png" alt="Microsoft Store" className="w-32 h-9 my-2 cursor-pointer bg-white rounded-md hover:border-2 hover:border-green-400" width={48} height={14} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between border-t-2 border-gray-600 text-base font-normal tracking-wide px-2 py-2 h-8 pt-6">
                <p>© 2024 SANEORA &nbsp; | &nbsp; All rights reserved</p>
                <div className="flex items-center bg-black h-8 p-0">
                    <Image src="/Social_handles_and_apps/facebookLogo.png" alt="Facebook" className="w-7 h-7 mx-2 cursor-pointer bg-gray-300 rounded-full hover:bg-white" width={14} height={14} />
                    <Image src="/Social_handles_and_apps/instagramLogo.png" alt="Instagram" className="w-7 h-7 mx-2 cursor-pointer bg-gray-300 rounded-full hover:bg-white" width={14} height={14} />
                    <Image src="/Social_handles_and_apps/linkedinLogo.png" alt="LinkedIn" className="w-7 h-7 mx-2 cursor-pointer bg-gray-300 rounded-full hover:bg-white" width={14} height={14} />
                    <Image src="/Social_handles_and_apps/twitterLogo.png" alt="Twitter" className="w-7 h-7 mx-2 cursor-pointer bg-gray-300 rounded-full hover:bg-white" width={14} height={14} />
                    <Image src="/Social_handles_and_apps/youtubeLogo.png" alt="Youtube" className="w-7 h-7 mx-2 cursor-pointer bg-gray-300 rounded-full hover:bg-white" width={14} height={14} />
                </div>
            </div>
        </footer>
    );
}