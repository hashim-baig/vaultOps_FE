import React from 'react';
import DomainCardTemplate, { Domain } from './DomainCardTemplate';

const DomainCard: React.FC<Domain> = ({ name, url, password, previewImage }) => {
    // Add logic here
    return (
        <DomainCardTemplate name={name} url={url} password={password} previewImage={previewImage} />
    );
};

export default DomainCard;
