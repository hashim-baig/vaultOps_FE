'use client';

import React from 'react';
import DomainsTemplate, { Domain } from './DomainsTemplate';
import { DomainCardSkeleton } from '@/components/molecules/DomainCard/DomainCardSkeleton';
import { fetchDomains } from '@/lib/api/domain';
import { useQuery } from '@tanstack/react-query';

const Domains = () => {
    const {
        data: domainList,
        isLoading,
        isError,
        error,
    } = useQuery<Domain[], Error>({
        queryKey: ['domains'],
        queryFn: fetchDomains,
    });

    if (isLoading) return <DomainCardSkeleton />;
    if (isError) return <div>Error: {error.message}</div>;

    return <DomainsTemplate domainList={domainList ?? []} />;
};

export default Domains;
