import { DomainFormInputs } from '@/components/molecules/AddNewDomain/AddNewDomain';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000';

export async function createDomain(data: DomainFormInputs): Promise<void> {
    const res = await fetch(`${API_BASE_URL}/api/domains/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create domain');
    }
}
