import React from 'react';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
    DialogDescription,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconWorldPlus } from '@tabler/icons-react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { DomainFormInputs } from './AddNewDomain';
import { Loader2Icon } from 'lucide-react';

interface AddNewDomainTemplateProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    register: UseFormRegister<DomainFormInputs>;
    errors: FieldErrors<DomainFormInputs>;
    isSubmitting: boolean;
}

const AddNewDomainTemplate: React.FC<AddNewDomainTemplateProps> = ({
    open,
    onOpenChange,
    onSubmit,
    register,
    errors,
    isSubmitting,
}) => (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>
            <Button variant="outline">
                <IconWorldPlus />
                Add Domain
            </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Add New Domain</DialogTitle>
                <DialogDescription>
                    Please fill in the details below to add a new domain.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="grid gap-3" noValidate>
                <div className="grid gap-2">
                    <Label htmlFor="domain-name">Name</Label>
                    <Input
                        id="domain-name"
                        {...register('name', { required: 'Domain name is required' })}
                        placeholder="Domain Name"
                    />
                    <span className="min-h-[1rem] text-xs text-red-500">
                        {errors.name ? errors.name.message : '\u00A0'}
                    </span>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="domain-url">Url</Label>
                    <Input
                        id="domain-url"
                        {...register('url', {
                            required: 'Domain URL is required',
                            pattern: {
                                value: /^(https?:\/\/)[^\s$.?#].\S*$/i,
                                message: 'Enter a valid URL',
                            },
                        })}
                        placeholder="https://example.com"
                        defaultValue="https://"
                    />
                    <span className="min-h-[1rem] text-xs text-red-500">
                        {errors.url ? errors.url.message : '\u00A0'}
                    </span>
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="url-password">URL Password (optional)</Label>
                    <Input
                        type="password"
                        id="url-password"
                        {...register('url_password')}
                        placeholder="Enter password (optional)"
                    />
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>

                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting && <Loader2Icon className="animate-spin" />}
                        {isSubmitting ? 'Adding...' : 'Add Domain'}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
);

export default AddNewDomainTemplate;
