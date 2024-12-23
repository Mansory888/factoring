"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Article } from '@/types/article';
import Data from '../../../public/data.json';
import NewsCard from '@/components/newsCard';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

const News = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const sortedNews: Article[] = [...Data]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const ITEMS_PER_PAGE = 6;

    const totalPages = Math.ceil(sortedNews.length / ITEMS_PER_PAGE);

    // Paginate the sorted data
    const paginatedNews = sortedNews.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-4">
                <section >
                    <div className="text-center py-8 md:py-16 lg:py-20">

                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            Niews & Blog
                        </motion.h1>

                        {/* Animate the subtitle */}
                        <motion.p
                            className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto text-secondary text-center"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        >
                            Hier vindt u al het laatste nieuws en blogposts van ons bedrijf.
                        </motion.p>

                    </div>
                </section>

            </div>

            <section className="max-w-7xl mx-auto px-4 py-4 overflow-x-hidden bg-secondary text-beje rounded-3xl">
                <div className="p-6">
                    <div className="max-w-6xl mx-auto">
                        <div key={currentPage} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            {paginatedNews.map((news, index) => (
                                <NewsCard key={index} news={news} delay={index * 0.2} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="mt-6 flex justify-center items-center space-x-4">
                            {/* Left Arrow */}
                            <button
                                className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === 1
                                    ? 'bg-beje text-secondary cursor-not-allowed'
                                    : 'bg-primary text-white hover:bg-primary-dark'
                                    }`}
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeftIcon className="w-6 h-6" />
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded ${page === currentPage
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-200 text-black hover:bg-gray-300'
                                        }`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            {/* Right Arrow */}
                            <button
                                className={`flex items-center justify-center w-10 h-10 rounded-full ${currentPage === totalPages
                                    ? 'bg-beje text-secondary cursor-not-allowed'
                                    : 'bg-primary text-primarty hover:bg-primary-dark'
                                    }`}
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default News;