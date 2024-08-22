import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/config';
import { Container, Footer, PostCard } from '../components';
import ThemeToggle from '../components/themetoggle/ThemeToggle';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800">
                            No Blogs Yet
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                           login to set blogs.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="py-12 bg-gray-100">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.$id}
                            className="transform transition duration-500 hover:scale-105"
                        >
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
                
            </Container>
          
        </div>
    );
}

export default Home;
