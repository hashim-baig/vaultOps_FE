import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import AddNewDomainTemplate from './AddNewDomainTemplate';

const AddNewDomain: React.FC = () => {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<DomainFormInputs>();

    const onSubmit: SubmitHandler<DomainFormInputs> = (data) => {
        console.log(data);
        reset();
        setOpen(false);
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
        />
    );
};

export type DomainFormInputs = {
    name: string;
    domain_url: string;
    url_password?: string;
};

export default AddNewDomain;
