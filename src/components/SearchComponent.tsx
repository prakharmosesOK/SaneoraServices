import React from 'react';

export default function SearchComponent({
    search,
    setSearch,
    handleSearchSubmit
}: {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    handleSearchSubmit: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
    return (
        <form
            className="bg-white dark:bg-gray-800 mx-auto items-center justify-between w-[70vw] h-[3rem] flex rounded-full shadow-[0_0px_100px_-10px_blue] p-2 mb-16 sticky"
            onSubmit={handleSearchSubmit}
        >
            <div>
                <div
                    className="p-2 mr-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                    onClick={() => setSearch('')}
                >
                    <svg className="h-4 w-4 text-gray-500 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <input
                className="font-bold rounded-full w-full h-full py-4 pl-4 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-900 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div
                className="bg-gray-600 dark:bg-gray-700 p-2 hover:bg-blue-400 dark:hover:bg-blue-500 cursor-pointer mx-1 rounded-full"
                onClick={handleSearchSubmit}
            >
                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
            </div>
        </form>
    );
};