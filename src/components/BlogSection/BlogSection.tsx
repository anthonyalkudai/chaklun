import React, {useState} from 'react';
import c from './BlogSection.module.scss'
import Pagination from "UI/Pagination/Pagination";
import Container from "../Container/Container";
import Blogs from "../Blogs/Blogs";
import {blogs} from "../../data/data";

function BlogSection() {
    const [selectedPage, setSelectedPage] = useState<number>(1);

    return (
        <div className={c.block}>
            <Container>
                <div className={c['inner-block']}>

                    <div className={c.content}>
                        <Blogs blogs={blogs} />
                    </div>

                    <Pagination
                        maxPerPage={6}
                        setSelectedPage={setSelectedPage}
                        selectedPage={selectedPage}
                        pagesCount={19}
                    />
                </div>
            </Container>
        </div>
    );
}

export default BlogSection;