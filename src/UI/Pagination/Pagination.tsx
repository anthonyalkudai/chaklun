import React, {Dispatch, SetStateAction} from 'react';
import c from './Pagination.module.scss'

interface IPaginationProps {
    pagesCount: number
    maxPerPage: number
    selectedPage: number
    setSelectedPage: Dispatch<SetStateAction<number>>
}

function Pagination({ pagesCount, maxPerPage, setSelectedPage, selectedPage }: IPaginationProps) {
    const pagesCountArr = Array.from({ length: Math.ceil(pagesCount / maxPerPage) }, (_, idx) => idx + 1)

    const onPageClick = (page: number) => {
        setSelectedPage(page);
    }

    const onNextClick = () => {
        if (selectedPage === pagesCountArr.length) {
            return;
        }

        setSelectedPage(prev => prev + 1)
    }

    const onPrevClick = () => {
        if (selectedPage === 1) {
            return;
        }

        setSelectedPage(prev => prev - 1)
    }

    const onDoublePrevClick = () => {
        if (selectedPage === 1) {
            return;
        }

        setSelectedPage(1)
    }

    const onDoubleNextClick = () => {
        if (selectedPage === pagesCountArr.length) {
            return;
        }

        setSelectedPage(pagesCountArr.length)
    }

    return (
        <div className={c.block}>
            <div className={c['pagination-block']}>
                <div className={c.pagination}>
                    <div className={`${c['double-prev']} ${c.item}`} onClick={onDoublePrevClick}></div>
                    <div className={`${c.prev} ${c.item}`} onClick={onPrevClick}></div>
                    <div className={c.pages}>
                        {pagesCountArr.map((pageNum) => (
                            <div
                                className={selectedPage === pageNum ? `${c.page} ${c['page-selected']}` : `${c.page}`}
                                onClick={() => onPageClick(pageNum)}
                            >
                                {pageNum}
                            </div>
                        ))}
                    </div>
                    <div className={`${c.next} ${c.item}`} onClick={onNextClick}></div>
                    <div className={`${c['double-next']} ${c.item}`} onClick={onDoubleNextClick}></div>
                </div>
            </div>
            <p className={c.info}>Сторінка {selectedPage} із {pagesCountArr.length}</p>
        </div>
    );
}

export default Pagination;