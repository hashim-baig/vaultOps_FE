import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const DomainCardTemplate: React.FC<Domain> = ({ name, url, password }) => {
    return (
        <Card className="w-full max-w-[250px]">
            <CardContent>
                <Image src={'/google-preview.png'} alt={'google'} width={230} height={0} />
            </CardContent>
            <CardFooter className="flex-col items-start w-full">
                <CardTitle>{name}</CardTitle>
                <p className="w-full break-words whitespace-normal">{url}</p>
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
};
