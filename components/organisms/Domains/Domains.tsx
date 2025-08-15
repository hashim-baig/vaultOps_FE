'use client';

import React, { useState, useEffect } from 'react';
import DomainsTemplate, { Domain } from './DomainsTemplate';

const domainL: Domain[] = [
    {
        name: 'google',
        url: 'https://www.google.com',
        password: 'password',
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com',
        password: 'password',
    },
    {
        name: 'instagram',
        url: 'https://www.instagram.com',
        password: 'password',
    },
    {
        name: 'netflix',
        url: 'https://www.netflix.com',
        password: 'password',
    },
    {
        name: 'amazon',
        url: 'https://www.amazon.com',
        password: 'password',
    },
    {
        name: 'flipkart',
        url: 'https://www.flipkart.com',
        password: 'password',
    },
    {
        name: 'amazon',
        url: 'https://www.amazon.com',
        password: 'password',
    },
    {
        name: 'flipkart',
        url: 'https://www.flipkart.com',
        password: 'password',
    },
    {
        name: 'amazon',
        url: 'https://www.amazon.com',
        password: 'password',
    },
    {
        name: 'flipkart',
        url: 'https://www.flipkart.com',
        password: 'password',
    },
];

const Domains = () => {
    const [domainList, setDomainList] = useState<Domain[]>([]);

    useEffect(() => {
        setDomainList(domainL);
    }, []);

    return <DomainsTemplate domainList={domainList} />;
};

export default Domains;
