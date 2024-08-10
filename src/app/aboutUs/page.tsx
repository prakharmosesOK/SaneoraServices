"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export default function AboutUs() {
    const [section, setSection] = useState("firm");
    const [info, setInfo] = useState([
        {
            name: "Saneora",
            description: "Saneora is a firm that accelerates your career."
        },
        {
            name: "Services",
            description: "It provides proper pathways in your journey for a particular career."
        },
        {
            name: "Established",
            description: "Saneora was established in 2024 by a group of 3 IITians."
        }
    ]);

    // Uncomment the below useEffect to handle scroll
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollPosition = window.scrollY;
    //     if (scrollPosition < 500) {
    //       setSection("saneora");
    //     }
    //   };

    //   window.addEventListener("scroll", handleScroll);
    //   return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // Uncomment the below useEffect to handle info fetch
    // useEffect(() => {
    //   const handleInfoFetch = async () => {
    //     try {
    //       const response = await fetch("http://<custom-api>");
    //       const data = await response.json();
    //       setInfo(data);
    //     } catch (error: any) {
    //       console.error(error.message);
    //     }
    //   };

    //   handleInfoFetch();
    // }, [section]);

    return (
        <main className="pt-8 bg-black text-white min-h-screen">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: -40 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <div>SANEORA</div>
                    <div>Accelerate your career</div>
                </motion.h1>
            </LampContainer>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeInOut"
                }}
                className="relative top-[-15em]"
            >
                <div className="my-8 flex justify-center gap-4">
                    <button
                        onClick={() => setSection('firm')}
                        className={`px-4 py-2 rounded ${section === 'firm' ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'}`}
                    >
                        Firm
                    </button>
                    <button
                        onClick={() => setSection('directors')}
                        className={`px-4 py-2 rounded ${section === 'directors' ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'}`}
                    >
                        Directors
                    </button>
                    <button
                        onClick={() => setSection('foundingTeam')}
                        className={`px-4 py-2 rounded ${section === 'foundingTeam' ? 'bg-slate-600 text-white' : 'bg-slate-300 text-black'}`}
                    >
                        Founding Team
                    </button>
                </div>

                <div className="px-4 md:px-16 lg:px-32">
                    {info.map((item, index) => (
                        <div key={index} className="mb-8 border-b border-gray-600 pb-4">
                            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </main>
    );
}