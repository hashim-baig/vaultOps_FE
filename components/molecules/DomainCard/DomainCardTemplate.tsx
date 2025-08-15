import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const DomainCardTemplate: React.FC<Domain> = ({ name, url, password, previewImage }) => {
    const imgSrc = previewImage
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${previewImage}`
        : '/google-preview.png';
    return (
        <Card className="w-full max-w-[250px]">
            <CardContent>
                <Image src={imgSrc} alt={name} width={230} height={0} />
            </CardContent>
            <CardFooter className="flex-col items-start w-full">
                <CardTitle>{name}</CardTitle>
                <Link
                    href={url}
                    className="w-full break-words whitespace-normal text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {url}
                </Link>
                <p className="w-full break-words whitespace-normal">{password}</p>
            </CardFooter>
        </Card>
    );
};
export default DomainCardTemplate;

export type Domain = {
    name: string;
    url: string;
    password?: string;
    previewImage?: string;
};
