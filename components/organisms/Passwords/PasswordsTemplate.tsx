import React from 'react';

type PasswordsProps = {
    pageName: string;
};

const PasswordsTemplate: React.FC<PasswordsProps> = ({ pageName }) => {
    return <div>This {pageName} Page</div>;
};
export default PasswordsTemplate;
