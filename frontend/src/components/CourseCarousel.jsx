import React, { useState, useEffect, useRef } from 'react';

const courses = [
    // ... (same courses array as before)
    {
        id: 1,
        title: "Full Stack Web Development",
        mentor: "Alex Johnson",
        mentorPhoto: "https://randomuser.me/api/portraits/men/32.jpg",
        description: "Master MERN stack and build real-world web apps.",
        rating: 4.9,
        students: 320,
    },
    {
        id: 2,
        title: "Product Management Essentials",
        mentor: "Maria Lee",
        mentorPhoto: "https://randomuser.me/api/portraits/women/44.jpg",
        description: "Learn to launch products from ideation to market.",
        rating: 4.8,
        students: 210,
    },
    {
        id: 3,
        title: "UI/UX Design Bootcamp",
        mentor: "Samuel Green",
        mentorPhoto: "https://randomuser.me/api/portraits/men/65.jpg",
        description: "Design stunning interfaces and user experiences.",
        rating: 5.0,
        students: 180,
    },
    {
        id: 4,
        title: "Data Science with Python",
        mentor: "Priya Sharma",
        mentorPhoto: "https://randomuser.me/api/portraits/women/68.jpg",
        description: "Analyze data and build ML models with Python.",
        rating: 4.7,
        students: 250,
    },
    {
        id: 5,
        title: "Digital Marketing Mastery",
        mentor: "Chris Evans",
        mentorPhoto: "https://randomuser.me/api/portraits/men/75.jpg",
        description: "Grow brands using SEO, SEM, and social media.",
        rating: 4.6,
        students: 195,
    },
];

const getVisibleCards = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
};

const CARD_GAP = 32; // px, adjust as needed

const CourseCarousel = () => {
    const [visibleCards, setVisibleCards] = useState(getVisibleCards());
    const [offset, setOffset] = useState(0);
    const trackRef = useRef();
    const animationRef = useRef();
    const cardWidth = 288; // px, matches w-72

    // Duplicate courses for infinite effect
    const extendedCourses = [...courses, ...courses];

    useEffect(() => {
        const handleResize = () => setVisibleCards(getVisibleCards());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let lastTime = performance.now();
        const speed = 0.05; // px per ms, adjust for faster/slower

        function animate(now) {
            const delta = now - lastTime;
            lastTime = now;
            setOffset(prev => {
                let next = prev + speed * delta;
                const totalWidth = (cardWidth + CARD_GAP) * courses.length;
                if (next >= totalWidth) {
                    next -= totalWidth;
                }
                return next;
            });
            animationRef.current = requestAnimationFrame(animate);
        }
        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
        // eslint-disable-next-line
    }, [visibleCards]);

    // Manual navigation
    const handlePrev = () => {
        setOffset(prev => {
            const totalWidth = (cardWidth + CARD_GAP) * courses.length;
            let next = prev - (cardWidth + CARD_GAP);
            if (next < 0) next += totalWidth;
            return next;
        });
    };

    const handleNext = () => {
        setOffset(prev => {
            const totalWidth = (cardWidth + CARD_GAP) * courses.length;
            let next = prev + (cardWidth + CARD_GAP);
            if (next >= totalWidth) next -= totalWidth;
            return next;
        });
    };

    // Calculate current index for dots
    const currentIndex = Math.round(offset / (cardWidth + CARD_GAP)) % courses.length;

    return (
        <div className="relative w-full flex flex-col items-center py-12 overflow-hidden">
         
            {/* Gradient overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24  z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" />
            <div className="flex items-center w-full justify-center gap-2 sm:gap-4 relative z-20">
                <button
                    onClick={handlePrev}
                    className="bg-white/80 text-[#8B1C2B] rounded-full w-12 h-12 flex items-center justify-center text-3xl shadow-lg hover:bg-[#f3e6e8] transition border border-[#f3e6e8]"
                    aria-label="Previous"
                >
                    &#8592;
                </button>
                <div
                    className="overflow-hidden w-full max-w-6xl px-2 sm:px-4"
                    style={{ height: 340 }}
                >
                    <div
                        ref={trackRef}
                        className="flex transition-none"
                        style={{
                            gap: `${CARD_GAP}px`,
                            transform: `translateX(-${offset}px)`,
                            willChange: 'transform',
                        }}
                    >
                        {extendedCourses.map((course, idx) => (
                            <div
                                key={idx + '-' + course.id}
                                className="bg-white rounded-3xl shadow-2xl p-6 flex flex-col items-center w-64 sm:w-72 transition-transform duration-300 hover:scale-105 border border-[#f3e6e8] relative"
                                style={{
                                    minWidth: `${cardWidth}px`,
                                    maxWidth: '90vw',
                                }}
                            >
                                <div className="flex items-center mb-2 w-full justify-between">
                                    <span className="text-xs text-[#8B1C2B] font-bold bg-[#f3e6e8] px-3 py-1 rounded-full">
                                        {course.students} enrolled
                                    </span>
                                    <span className="flex items-center text-yellow-500 text-sm font-semibold">
                                        ★ {course.rating}
                                    </span>
                                </div>
                                <img
                                    src={course.mentorPhoto}
                                    alt={course.mentor}
                                    className="w-20 h-20 rounded-full object-cover mb-3 border-4 border-[#f3e6e8] shadow"
                                />
                                <h3 className="text-xl font-semibold text-[#8B1C2B] mb-1 text-center">{course.title}</h3>
                                <p className="text-gray-700 text-base mb-2 text-center">{course.description}</p>
                                <div className="text-gray-500 text-xs mb-1">Mentor:</div>
                                <div className="text-gray-800 font-medium">{course.mentor}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="bg-white/80 text-[#8B1C2B] rounded-full w-12 h-12 flex items-center justify-center text-3xl shadow-lg hover:bg-[#f3e6e8] transition border border-[#f3e6e8]"
                    aria-label="Next"
                >
                    &#8594;
                </button>
            </div>
            <div className="flex gap-2 mt-8 z-30">
                {courses.map((_, idx) => (
                    <span
                        key={idx}
                        className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#f3e6e8] ${
                            idx === currentIndex ? 'bg-[#8B1C2B] scale-125 shadow-lg' : 'bg-[#f3e6e8]'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseCarousel;