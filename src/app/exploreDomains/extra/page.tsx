'use client';
import { useState, useEffect } from "react";

// Define the type for chapter
type Chapter = {
  title: string;
  video: string;
};

// Define the type for course
type Course = {
  title: string;
  chapters: Chapter[];
};

export default function CoursePage() {
  const [sidepanel, setSidepanel] = useState(true);
  const [currentChapter, setCurrentChapter] = useState<string>('');
  const [progress, setProgress] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [video, setVideo] = useState<string>('');

  const array: Course[] = [{
    title: "Mihir COURSE 1",
    chapters: [
      {
        title: "Mihir A",
        video: "https://www.youtube.com/embed/ih3J0UbXjto?si=5THEYMDKiilRs4ie"
      },
      {
        title: "Mihir B",
        video: "https://www.youtube.com/embed/s6J2o3gyVzU?si=aOUN0CoDm2aFttjV"
      },
    ]
  }];

  const dataCalc = (array: Course[]): number => {
    return array.reduce((length, item) => length + item.chapters.length, 0);
  };

  useEffect(() => {
    const length = dataCalc(array);
    const savedChapter = localStorage.getItem('currentChapter') || array[0].chapters[0].video;
    setCurrentChapter(savedChapter);
    const savedProgress = JSON.parse(localStorage.getItem('progress') || '[]') as string[];
    setProgress(savedProgress);
    setTotal(length);
    setVideo(savedChapter);
  }, []);

  const handleChapterClick = (video: string) => {
    setVideo(video);
    setCurrentChapter(video);

    if (progress.includes(video)) return;

    const updatedProgress = [...progress, video];
    setProgress(updatedProgress);
    localStorage.setItem('currentChapter', video);
    localStorage.setItem('progress', JSON.stringify(updatedProgress));

    console.log(updatedProgress);
    console.log(localStorage.getItem('progress'));
  };

  const handlePrevClick = () => {
    if (currentChapter === array[0].chapters[0].video) return;
    const currentIndex = array[0].chapters.findIndex((chapter) => chapter.video === currentChapter);
    if (currentIndex > 0) {
      const prevVideo = array[0].chapters[currentIndex - 1].video;
      setVideo(prevVideo);
      setCurrentChapter(prevVideo);
    }
  };

  const handleNextClick = () => {
    if (currentChapter === array[0].chapters[array[0].chapters.length - 1].video) return;
    const currentIndex = array[0].chapters.findIndex((chapter) => chapter.video === currentChapter);
    if (currentIndex < array[0].chapters.length - 1) {
      const nextVideo = array[0].chapters[currentIndex + 1].video;
      setVideo(nextVideo);
      setCurrentChapter(nextVideo);
    }
  };

  return (
    <>
      <div className="h-screen flex flex-row">
        {/* sidepanel */}
        {sidepanel ? (
          <div className="bg-green-500 h-screen w-1/4 drop-shadow-xl">
            <div className="bg-[#14089C] h-1/5">
              <div className="flex p-3 h-8 w-full hover:cursor-pointer">
                <h1 className="text-sm italic w-3/4 text-white">Back to home page</h1>
                <h1 className="font-bold text-right w-1/4 text-white" onClick={() => setSidepanel(!sidepanel)}> &lt;&lt; </h1>
              </div>
              <div className="flex flex-col h-4/5 w-full p-5 gap-y-3">
                <div className="text-xl font-bold text-white"> SANEORA </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900 rounded-lg h-1 w-full text-white">
                    <div className="bg-green-400 h-1 rounded-md" style={{ width: `${(progress.length / total) * 100}%` }} />
                  </div>
                  <div className="text-white">
                    {Math.round((progress.length / total) * 100)}%
                  </div>
                </div>
              </div>
            </div>
            {/* chapter list */}
            <div className="scrollbar-thumb-rounded-full w-full h-4/5 bg-white overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar">
              {array.map((item) => (
                <details open className="border bg-white p-3 py-4 gap-y-3 text-gray-500 cursor-pointer" key={item.title}>
                  <summary className="font-medium">{item.title}</summary>
                  {item.chapters.map((chapter) => (
                    <div className="flex items-center gap-3 p-2 text-lg cursor-pointer" key={chapter.video}>
                      <div
                        className={`text-sm font-medium ${currentChapter === chapter.video ? 'text-gray-900' : ''} ${progress.includes(chapter.video) ? 'text-green-600' : ''}`}
                        onClick={() => handleChapterClick(chapter.video)}
                      >
                        {chapter.title}
                      </div>
                    </div>
                  ))}
                </details>
              ))}
            </div>
          </div>
        ) : (
          <div className="cursor-pointer font-bold text-lg items-center p-3 flex bg-[#37A6FE] h-screen w-8 drop-shadow-xl"
            onClick={() => setSidepanel(!sidepanel)}
          >
            &gt;
          </div>
        )}
        {/* video section */}
        <div className="bg-blue-300 h-screen w-full flex flex-col">
          <div className="bg-[#37A6FE] h-min flex px-10 font-bold items-center">
            <div className="w-full cursor-pointer" onClick={handlePrevClick}> &lt; prev </div>
            <div className="w-full text-right cursor-pointer" onClick={handleNextClick}> next &gt; </div>
          </div>
          <div className="flex-1 w-full">
            <iframe width="100%" height="100%" src={`${video}&rel=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
}