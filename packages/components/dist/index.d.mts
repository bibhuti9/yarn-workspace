import React from 'react';
import { Photographers } from '@letshang/types';

interface PropsTypes {
    photographers: Photographers[] | undefined;
}

declare function Container({ photographers }: PropsTypes): React.JSX.Element;

export { Container };
