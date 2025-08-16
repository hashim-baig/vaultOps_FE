import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const DomainCardTemplate: React.FC<Domain> = ({ name, url, password, previewImage }) => {
    const imgSrc = previewImage
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${previewImage}`
        : '/google-preview.png';
    return (
        <Card className="w-full max-w-[250px] p-2">
            <CardContent className="flex justify-center items-center p-0" style={{ height: 150 }}>
                <Image
                    src={imgSrc}
                    alt={name}
                    width={250} // fixed width in px
                    height={230} // fixed height in px
                    className="object-contain rounded"
                />
            </CardContent>
            <CardFooter className="flex-col items-start w-full p-2">
                <CardTitle>{name}</CardTitle>
                <Link
                    href={url}
                    className="w-full text-blue-600 underline break-words whitespace-normal
                    overflow-hidden
                    text-ellipsis
                    line-clamp-2
                    -webkit-box
                    -webkit-line-clamp-2
                    -webkit-box-orient-vertical"
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
