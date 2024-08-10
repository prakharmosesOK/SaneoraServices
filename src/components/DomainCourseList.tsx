"use client";
import React, { useState, useEffect } from "react";

// Importing components
import SearchComponent from "@/components/SearchComponent";
import { PinContainer } from "./ui/3d-pin";

// Defining interfaces
interface DomainCourseListProps {
    stream: string;
}

export default function DomainCourseList({
    stream
}: DomainCourseListProps) {
    const [search, setSearch] = useState('');
    const [courses, setCourses] = useState([
        {
            title: "Course 1",
            description: "Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quibusdam ducimus illo voluptate dolor, vel nobis ab aliquam exercitationem voluptatem omnis quia repudiandae numquam voluptates dolores, iste officia quam esse porro delectus alias! Culpa, non, corporis ab fuga, dicta debitis modi ullam nisi nesciunt natus maiores. Consectetur dolores in tempora?",
            fees: "Fees 1",
            duration: "Duration 1",
            link: "/exploreDomains/1"
        },
        {
            title: "Course 2",
            description: "Description 2",
            fees: "Fees 2",
            duration: "Duration 2",
            link: "Link 2"
        },
        {
            title: "Course 3",
            description: "Description 3",
            fees: "Fees 3",
            duration: "Duration 3",
            link: "Link 3"
        },
        {
            title: "Course 4",
            description: "Description 4",
            fees: "Fees 4",
            duration: "Duration 4",
            link: "Link 4"
        },
        {
            title: "Couse 5",
            description: "Description 5",
            fees: "Fees 5",
            duration: "Duration 5",
            link: "Link 5"
        }
    ]);

    // useEffect(() => {
    //   const fetchCourses = async () => {
    //     if (stream) {
    //       try {
    //         const response = await fetch(`<custom-api>`);
    //         const data = await response.json();
    //         setCourses(data);
    //       } catch (error: any) {
    //         console.error("Error: ", error.message)
    //       }
    //     }
    //   }

    //   () => fetchCourses();
    // }, [stream])

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        console.log(search);
    }
    return (
        <div className="h-full pt-10 bg-black pb-[12rem]">
            <SearchComponent
                search={search}
                setSearch={setSearch}
                handleSearchSubmit={handleSearchSubmit}
            />
            <div className="h-[40rem] w-full flex flex-wrap gap-y-20 items-center justify-evenly">
                {courses.filter((course) => ((course.title.toLowerCase()).includes(search.toLowerCase()) || (course.description.toLowerCase().includes(search.toLowerCase())))).map((course: any) => (
                    <PinContainer
                        title={course.fees}
                        href={course.link}
                    >
                        <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                {course.title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    {course.duration}
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#4b6cb7] via-purple-500 to-[#182848]">
                                <p className="p-4 text-white h-[13.1em] overflow-hidden">{course.description}</p>
                            </div>
                        </div>
                    </PinContainer>
                ))}
            </div>
        </div>
    );
}