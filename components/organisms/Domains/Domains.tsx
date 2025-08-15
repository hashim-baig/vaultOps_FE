'use client';

import React, { useState, useEffect } from 'react';
import DomainsTemplate, { Domain } from './DomainsTemplate';
import { DomainCardSkeleton } from '@/components/molecules/DomainCard/DomainCardSkeleton';
import { fetchDomains } from '@/lib/api/domain';

const Domains = () => {
    const [domainList, setDomainList] = useState<Domain[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadDomains() {
            try {
                const domains = await fetchDomains();
                console.log(domains);
                setDomainList(domains);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        }
        loadDomains();
    }, []);

    if (loading) return <DomainCardSkeleton />;
    if (error) return <div>Error: {error}</div>;

    return <DomainsTemplate domainList={domainList} />;
};

export default Domains;
