import React from 'react';
import c from './Blogs.module.scss'
import {IBlog} from "types/types";
import Blog from "components/Blog/Blog";

interface IBlogsProps {
    blogs: IBlog[]
}

function Blogs({ blogs }: IBlogsProps) {
    return (
        <ul className={c.list}>
            {blogs.map((blog, idx) => (
                <li key={idx} className={c.item}>
                    <Blog blog={blog} />
                </li>
            ))}
        </ul>
    );
}

export default Blogs;