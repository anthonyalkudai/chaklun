import React, {TextareaHTMLAttributes} from 'react';
import c from './ContactsTextarea.module.scss'

interface IContactsTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

function ContactsTextarea({ className, ...props }: IContactsTextareaProps) {
    return (
        <textarea
            {...props}
            className={`${c.textarea} ${className}`}
        />
    );
}

export default ContactsTextarea;