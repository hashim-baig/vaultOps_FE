export type RegisterPayload = {
    name: string;
    email: string;
    password: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`
    : 'http://localhost:5000/api';

export async function registerUser(payload: RegisterPayload): Promise<{ token: string }> {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include',
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Registration failed');
    return data;
}

export async function loginUser({ email, password }: { email: string; password: string }) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // send cookie
        body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Login failed');
    return data.user; // { id, name, email }
}

// services/auth.ts
export async function fetchCurrentUser() {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include', // <-- send cookie
    });
    if (!res.ok) return null;
    return res.json(); // { id, name, email }
}
