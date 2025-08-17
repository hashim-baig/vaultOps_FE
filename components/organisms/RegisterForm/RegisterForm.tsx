'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import RegisterFormTemplate, { RegisterFormInputs } from './RegisterFormTemplate';
import { registerUser } from '@/lib/api/auth';
import { useRouter } from 'next/navigation';

const RegisterForm: React.FC = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        reset,
    } = useForm<RegisterFormInputs>();

    const mutation = useMutation({
        mutationFn: async (data: RegisterFormInputs) => {
            if (data.password !== data.confirmPassword) {
                throw new Error('Passwords do not match');
            }
            return registerUser({
                name: data.name,
                email: data.email.toLowerCase(),
                password: data.password,
            });
        },
        onSuccess: () => {
            // Store token as needed (localStorage, Zustand, etc.)

            reset();
            // Redirect to dashboard or login
            router.replace('/login');
        },
        onError: (error: any) => {
            setError('root', { type: 'manual', message: error.message });
        },
    });

    const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
        mutation.mutate(data);
    };

    return (
        <RegisterFormTemplate
            register={register}
            errors={errors}
            onSubmit={handleSubmit(onSubmit)}
            isSubmitting={mutation.isPending}
            apiError={errors.root?.message}
        />
    );
};

export default RegisterForm;
