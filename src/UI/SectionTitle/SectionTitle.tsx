import React, {HTMLAttributes} from 'react';
import c from './SectionTitle.module.scss'

interface ISectionTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    text: string
}

function SectionTitle({ text, className, ...props }: ISectionTitleProps) {
    return (
        <h1 className={`${c.title} ${className}`} {...props}>{text}</h1>
    );
}

export default SectionTitle;