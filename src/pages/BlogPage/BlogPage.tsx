import React from 'react';
import c from './BlogPage.module.scss'
import BlogSection from "../../components/BlogSection/BlogSection";

function BlogPage() {
    return (
        <div className={c.blokc}>
            <BlogSection />
        </div>
    );
}

export default BlogPage;