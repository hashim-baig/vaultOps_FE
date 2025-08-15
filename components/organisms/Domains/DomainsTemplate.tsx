import React from 'react';
import DomainCard from '@/components/molecules/DomainCard';

const DomainsTemplate: React.FC<DomainsProps> = ({ domainList }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {domainList.map((domain: Domain) => (
                <DomainCard
                    key={domain.url}
                    name={domain.name}
                    url={domain.url}
                    password={domain.password}
                />
            ))}
        </div>
    );
};
export default DomainsTemplate;

export type Domain = {
    name: string;
    url: string;
    password: string;
};

type DomainsProps = {
    domainList: Domain[];
};
