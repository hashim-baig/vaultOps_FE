import type React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

interface Props {
    register: UseFormRegister<LoginFormInputs>;
    errors: FieldErrors<LoginFormInputs>;
    isSubmitting: boolean;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    apiError?: string;
    className?: string;
}

const LoginFormTemplate = ({
    className,
    register,
    errors,
    isSubmitting,
    onSubmit,
    apiError,
    ...props
}: Props) => (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
        <Card>
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>Enter your email below to login to your account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: 'Enter a valid email',
                                    },
                                })}
                            />
                            <span className="min-h-[1rem] text-xs text-red-500">
                                {errors.email?.message}
                            </span>
                        </div>

                        <div className="grid gap-3">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                {...register('password', { required: 'Password is required' })}
                            />
                            <span className="min-h-[1rem] text-xs text-red-500">
                                {errors.password?.message}
                            </span>
                        </div>

                        {apiError && (
                            <div className="text-center text-sm text-red-500">{apiError}</div>
                        )}

                        <div className="flex flex-col gap-3">
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                Login
                            </Button>
                        </div>
                    </div>

                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link href="/signup" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
);

export default LoginFormTemplate;

export type LoginFormInputs = {
    email: string;
    password: string;
};
