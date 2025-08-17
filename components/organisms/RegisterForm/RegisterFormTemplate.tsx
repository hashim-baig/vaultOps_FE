// components/organisms/RegisterFormTemplate.tsx
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface RegisterFormTemplateProps {
    register: UseFormRegister<RegisterFormInputs>;
    errors: FieldErrors<RegisterFormInputs>;
    isSubmitting: boolean;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    apiError?: string;
    className?: string; // If you want to allow custom className
}

const RegisterFormTemplate = ({
    className,
    register,
    errors,
    isSubmitting,
    onSubmit,
    apiError,
    ...props
}: RegisterFormTemplateProps) => {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Create a new account</CardTitle>
                    <CardDescription>
                        Enter your details below to create a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    {...register('name', { required: 'Name is required' })}
                                    placeholder="Your full name"
                                />
                                <span className="min-h-[1rem] text-xs text-red-500">
                                    {errors.name?.message}
                                </span>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            message: 'Enter a valid email',
                                        },
                                    })}
                                    placeholder="m@example.com"
                                />
                                <span className="min-h-[1rem] text-xs text-red-500">
                                    {errors.email?.message}
                                </span>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: { value: 6, message: 'Min 6 characters' },
                                    })}
                                />
                                <span className="min-h-[1rem] text-xs text-red-500">
                                    {errors.password?.message}
                                </span>
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    {...register('confirmPassword', {
                                        required: 'Confirm your password',
                                    })}
                                />
                                <span className="min-h-[1rem] text-xs text-red-500">
                                    {errors.confirmPassword?.message}
                                </span>
                            </div>

                            <div>
                                {apiError && (
                                    <div className="text-center text-sm text-red-500">
                                        {apiError}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col gap-3">
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    Register
                                </Button>
                            </div>
                        </div>

                        <div className="mt-4 text-center text-sm">
                            Already have an account?{' '}
                            <Link href="/login" className="underline underline-offset-4">
                                Login
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
export default RegisterFormTemplate;

export type RegisterFormInputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};
