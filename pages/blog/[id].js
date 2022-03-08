import React from 'react';
import {useRouter} from 'next/router';

const Blog = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Este es el single de blog, ID: {router.query.id}</h1>
        </div>
    );
};
export default Blog;