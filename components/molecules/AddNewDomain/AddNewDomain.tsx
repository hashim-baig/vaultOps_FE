import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import AddNewDomainTemplate from './AddNewDomainTemplate';
import { createDomain } from '@/lib/api/domain';

const AddNewDomain: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DomainFormInputs>();

    const onSubmit: SubmitHandler<DomainFormInputs> = async (data) => {
        setIsSubmitting(true);
        try {
            await createDomain(data);
            reset();
            setOpen(false);
            // Optionally show success toast/notification here
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Failed to create domain:', error.message);
            } else {
                console.error('Failed to create domain: Unknown error', error);
            }
        } finally {
            setIsSubmitting(false);
        }
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
            isSubmitting={isSubmitting}
        />
    );
};

export type DomainFormInputs = {
    name: string;
    url: string;
    url_password?: string;
};

export default AddNewDomain;
