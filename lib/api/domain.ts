import { DomainFormInputs } from '@/components/molecules/AddNewDomain/AddNewDomain';
import { Domain } from '@/components/organisms/Domains/DomainsTemplate';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`
    : 'http://localhost:5000/api';

export async function createDomain(data: DomainFormInputs): Promise<Domain> {
    const res = await fetch(`${API_BASE_URL}/domains/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include',
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create domain');
    }
    return res.json();
}

export async function fetchDomains(): Promise<Domain[]> {
    const res = await fetch(`${API_BASE_URL}/domains`, {
        method: 'GET',
        credentials: 'include', // <-- Ensures cookies are sent with the request
    });
    if (!res.ok) {
        throw new Error('Failed to fetch domains');
    }
    return res.json();
}
