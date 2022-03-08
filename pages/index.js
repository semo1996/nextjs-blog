import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nutanbhogendrasharma/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBlogs(data.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Navbar />
                <div className="contentPosts">
                {blogs.map(item => (
                    <div className="itemPost">
                        <div>
                            <img src={item.thumbnail} width='150px' height='150px' />
                        </div>
                        <div>
                            <a href={item.link} target="_blank">{item.title}</a>
                        </div>
                    </div>
                ))}
                </div>
                <Footer />
            </div>
        );
    }
}
