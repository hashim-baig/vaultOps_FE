'use client';

import React from 'react';
import PasswordsTemplate from './PasswordsTemplate';
import { usePageName } from '@/hooks/usePageName';

const Passwords = () => {
    const pageName = usePageName();

    return <PasswordsTemplate pageName={pageName} />;
};

export default Passwords;
