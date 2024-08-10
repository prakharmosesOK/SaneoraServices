"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Importing context
import { useTheme } from '@/context/ThemeContext';

// Importing components
import { BackgroundGradient } from '@/components/ui/background-gradient';

export default function CourseOverviewPage({
    params
}: { params: { courseId: string } }) {
    const router = useRouter();
    const courseId = params.courseId;
    const { theme } = useTheme();
    const [course, setCourse] = useState({
        title: 'Web Development',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione? Hic iure odit quidem minima expedita consequatur nostrum, facilis modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio inventore non sit, laborum nobis dolores assumenda unde distinctio in? Numquam minima blanditiis omnis tempora provident mollitia ducimus autem libero laborum. Dolorem omnis quaerat eum numquam dolores, enim, cupiditate voluptate accusantium voluptatum laborum iure unde ea, quia praesentium accusamus! Accusantium quas eligendi pariatur aperiam maiores suscipit libero nemo non, cum qui illo commodi, dolorum provident enim iure vel molestias perspiciatis exercitationem doloribus a! Iste odio a cum quam veritatis, iure dolorum minus rerum recusandae perferendis, impedit illum dolores perspiciatis consequatur aliquam. Deleniti nesciunt blanditiis ipsum modi magni, optio totam illo.',
        duration: '2 months',
        price: 'Free',
        level: 'Beginner',
        included: {
            videos: 10,
            quizzes: 5,
            assignments: 3,
            projects: 1
        },
        requirements: ['Basic knowledge of HTML, CSS, and JavaScript'],
        outcomes: ['Build a website from scratch', 'Understand the basics of web development'],
        pathway: [
            {
                title: 'Introduction to Web Development',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione? Hic iure odit quidem minima expedita consequatur nostrum, facilis modi.'
            },
            {
                title: 'HTML and CSS Basics',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione? Hic iure odit quidem minima expedita consequatur nostrum, facilis modi.'
            },
            {
                title: 'JavaScript Fundamentals',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ratione? Hic iure odit quidem minima expedita consequatur nostrum, facilis modi.'
            }
        ]
    });

    // useEffect(() => {
    //     const fetchCourseDetails = async () => {
    //         try {
    //             const response = await fetch('http://<custom-api>');
    //             const data = await response.json();
    //             setCourse(data);
    //         } catch (error) {
    //             console.error(error);
    //             router.push('/exploreDomains');
    //         }
    //     };

    //     fetchCourseDetails();
    // }, [courseId, router]);

    const handleCourseEnroll = async () => {
        console.log('Enrolled in the course!');
        router.push('/exploreDomains/extra');
    };

    return (
        <div className="pt-28 pb-8 bg-white dark:bg-gray-900 text-black dark:text-white px-6 md:px-12 lg:px-24">
            <BackgroundGradient className="rounded-[22px] sm:p-10 bg-white dark:bg-zinc-900 p-8 shadow-lg flex flex-row items-center justify-between ">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-blue-500">{course.title}</h1>
                    <section className="mb-4">
                        <h3 className="text-2xl font-semibold mb-2 text-orange-400">Requirements</h3>
                        <p className="text-lg w-[50em]">{course.requirements.join(', ')}</p>
                    </section>
                    <section className="mb-4">
                        <h3 className="text-2xl font-semibold mb-2 text-orange-400">Outcome</h3>
                        <p className="text-lg w-[50em]">{course.outcomes.join(', ')}</p>
                    </section>
                    <button
                        onClick={handleCourseEnroll}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Enroll Now
                    </button>
                </div>
                <div className="mt-6">
                    <Image
                        src={theme === 'light' ? '/utils/badgeLight.png' : '/utils/badgeDark.png'}
                        alt='Badge'
                        width={60}
                        height={60}
                        className='rotate-[-30deg] relative top-[2.6em] left-[-1.5em] inline'
                    />
                    <div className="flex flex-col space-y-2 text-lg font-medium w-[13em] py-4 pt-8 px-8 shadow-[0px_0px_30px_0px_grey]">
                        <p><span className="font-bold text-[#4ee4ad]">Level:</span> {course.level}</p>
                        <p><span className="font-bold text-[#4ee4ad]">Duration:</span> {course.duration}</p>
                        <p><span className="font-bold text-[#4ee4ad]">Price:</span> {course.price}</p>
                    </div>
                </div>
            </BackgroundGradient>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">What&apos;s included</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {course.included.videos && (
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/utils/videoIcon.png"
                                alt="Video"
                                width={48}
                                height={48}
                            />
                            <p>{course.included.videos} Videos</p>
                        </div>
                    )}
                    {course.included.quizzes && (
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/utils/quizIcon.png"
                                alt="Quiz"
                                width={48}
                                height={48}
                            />
                            <p>{course.included.quizzes} Quizzes</p>
                        </div>
                    )}
                    {course.included.assignments && (
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/utils/assignmentIcon.png"
                                alt="Assignment"
                                width={48}
                                height={48}
                            />
                            <p>{course.included.assignments} Assignments</p>
                        </div>
                    )}
                    {course.included.projects && (
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/utils/projectIcon.png"
                                alt="Project"
                                width={48}
                                height={48}
                            />
                            <p>{course.included.projects} Projects</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Course Description</h2>
                <p className="text-lg">{course.description}</p>
            </div>
        </div>
    );
}