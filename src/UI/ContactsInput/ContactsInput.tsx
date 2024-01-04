import React, {InputHTMLAttributes} from 'react';
import c from './ContactsInput.module.scss'

interface IContactsInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

function ContactsInput({ className, ...props }: IContactsInputProps) {
    return (
        <input
            type={'text'}
            {...props}
            className={`${c.input} ${className}`}
        />
    );
}

export default ContactsInput;