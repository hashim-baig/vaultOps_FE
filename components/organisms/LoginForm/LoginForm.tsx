// components/organisms/LoginForm.tsx
'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import LoginFormTemplate, { LoginFormInputs } from './LoginFormTemplate';
import { loginUser } from '@/lib/api/auth';
import { useAuthStore } from '@/stores/authStore'; // if using Zustand
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<LoginFormInputs>();
    const setUser = useAuthStore((state) => state.setUser); // Zustand
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: loginUser,
        onSuccess: (user) => {
            setUser(user); // Sync Zustand with returned user
            router.replace('/domains'); // Or wherever you want
            reset();
        },
        onError: (error: any) => {
            setError('root', { type: 'manual', message: error.message });
        },
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
        mutation.mutate({ email: data.email.toLowerCase(), password: data.password });
    };

    return (
        <LoginFormTemplate
            register={register}
            errors={errors}
            isSubmitting={mutation.isPending}
            onSubmit={handleSubmit(onSubmit)}
            apiError={errors.root?.message}
        />
    );
};

export default LoginForm;
