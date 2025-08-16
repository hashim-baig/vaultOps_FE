'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import AddNewDomainTemplate from './AddNewDomainTemplate';
import { createDomain } from '@/lib/api/domain';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Domain } from '@/components/organisms/Domains/DomainsTemplate';

export type DomainFormInputs = {
    name: string;
    url: string;
    url_password?: string;
};

const AddNewDomain: React.FC = () => {
    const [open, setOpen] = useState(false);
    const queryClient = useQueryClient();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DomainFormInputs>();

    const mutation = useMutation({
        mutationFn: (data: DomainFormInputs) => createDomain(data),
        onSuccess: async (data) => {
            reset();
            setOpen(false);

            await queryClient.cancelQueries(['domains']);

            queryClient.setQueryData<Domain[]>(['domains'], (prev: Domain[]) => {
                if (prev) {
                    return [data, ...prev];
                } else {
                    return [data];
                }
            });

            toast.success('Domain created successfully.');
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error('Failed to create domain:', error.message);
            } else {
                console.error('Failed to create domain: Unknown error', error);
            }
        },
    });

    const onSubmit: SubmitHandler<DomainFormInputs> = (data) => {
        mutation.mutate(data);
    };

    const handleOpenChange = (value: boolean) => {
        if (!value) {
            reset();
        }
        setOpen(value);
    };

    return (
        <AddNewDomainTemplate
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isSubmitting={mutation.isPending}
        />
    );
};

export default AddNewDomain;
