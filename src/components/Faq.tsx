import { useEffect, useState } from 'react';
import Link from "next/link";

export default function FAQ() {
    const [search, setSearch] = useState('');
    const [open, setOpen] = useState<number | null>(null);
    const [faqItems, setFaqItems] = useState([
        { quest: "How does Saneora work?", ans: "Saneora is a platform that provides online courses to students. We have a team of professionals who are experts in their fields. We provide courses in various fields like Web Development, App Development, Digital Marketing, etc. We help students to achieve their goals." },
        { quest: "What is the package at the end?", ans: "We provide a certificate to the students at the end of the course. We also provide job assistance to the students. We have a team of professionals who help students to get a job in the industry. We also provide internships to students." },
        { quest: "What are the fees for the courses?", ans: "The fees of the courses are different for different courses. The fees of the courses are mentioned on the website. You can check the fees of the courses on the website." },
        { quest: "How long are the courses?", ans: "The duration of the courses is different for different courses. The duration of the courses is mentioned on the website. You can check the duration of the courses on the website." },
        { quest: "Is down-payment available?", ans: "Yes, down-payment is available for the courses. You can pay the fees of the courses in installments. You can pay the fees of the courses in down-payment and then pay the remaining fees in installments." },
        { quest: "How many people are currently connected to the organization?", ans: "There are more than 1000 students who are currently connected to the organization. We have a team of professionals who are experts in their fields. We help students to achieve their goals." },
        { quest: "How can I enroll in the courses?", ans: "You can enroll in the courses by visiting the website. You can select the course you want to enroll in and then click on the enroll button. You can pay the fees of the course online and then start the course." },
        { quest: "How can I pay the fees?", ans: "You can pay the fees of the courses online. You can pay the fees of the courses by using your debit card, credit card, net banking, etc. You can pay the fees of the courses online and then start the course." },
        { quest: "Does Saneora provide a job guarantee?", ans: "We do not provide a job guarantee to the students. We provide job assistance to the students. We have a team of professionals who help students to get a job in the industry. We also provide internships to the students." }
    ]);
    const [totalFaqItems, setTotalFaqItems] = useState(faqItems);

    // useEffect(() => {
    //     const fetchFaqItems = async () => {
    //         try {
    //             const response = await fetch('http://<custom_api>');
    //             const data = await response.json();
    //             setTotalFaqItems(data);
    //             setFaqItems(data);
    //         } catch (error: any) {
    //             console.error("Error: ", error.message)
    //         }
    //     }

    //     () => fetchFaqItems();
    // }, [])

    const handleFaqSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        if (e.target.value === '') {
            setFaqItems(totalFaqItems);
        } else {
            const filteredFaqItems = totalFaqItems.filter((item) => item.quest.toLowerCase().includes(e.target.value.toLowerCase()));
            setFaqItems(filteredFaqItems);
        }
    }

    const handleFaqSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://<custom_api>');
            const data = await response.json();
            setTotalFaqItems(data);
            setFaqItems(data);
        } catch (error: any) {
            console.error("Error: ", error.message)
        }
    }

    return (
        <div className="mx-auto max-w-6xl">
            <div className="p-2 rounded">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 p-4 text-sm">
                        <div className="sticky inset-x-0 top-0 left-0 py-12">
                            <div className="text-3xl text-orange-500 dark:text-green-500 mb-8">Frequently asked questions.</div>
                            <div className="mb-2 text-neutral-700 dark:text-white">Any Question?</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">See our FAQ for more details or write us mail</div>
                            <div className="relative text-gray-600 dark:text-gray-400 mt-8 lg:mr-16">
                                <form onSubmit={handleFaqSearch}>
                                    <input
                                        type="search"
                                        name="search"
                                        placeholder="Search"
                                        value={search}
                                        onChange={handleFaqSearchChange}
                                        className="bg-neutral-100 dark:bg-gray-700 w-full h-10 px-5 rounded-full text-sm focus:outline-none"
                                    />
                                    <button type="submit" className="focus:outline-none absolute right-0 top-0 mt-3 mr-4">
                                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 py-12">
                        <div className="p-4 h-[20rem] overflow-y-scroll no-scrollbar">
                            {faqItems.map((item, index) => (
                                <div className="item px-6 py-6" key={index}>
                                    <Link href="#" className="flex items-center justify-between" onClick={(e) => { e.preventDefault(); setOpen(open === index ? null : index); }}>
                                        <h4 className={`${open === index ? 'text-orange-500 dark:text-green-500 font-bold' : 'text-black dark:text-white'}`}>{item.quest}</h4>
                                        <svg className={`w-5 h-5 text-gray-500 dark:text-gray-400 ${open === index ? 'transform rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </Link>
                                    {open === index && (
                                        <div className="mt-3 text-gray-500 dark:text-gray-400">
                                            <p>{item.ans}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};