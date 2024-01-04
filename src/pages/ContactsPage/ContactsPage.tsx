import React from 'react';
import c from './ContactsPage.module.scss'
import ContactsSection from "../../components/ContactsSection/ContactsSection";

function ContactsPage() {
    return (
        <div className={c.blokc}>
            <ContactsSection />
        </div>
    );
}

export default ContactsPage;