import { Photographers } from '@letshang/types';

declare const photographersState: () => {
    photographers: Photographers[] | undefined;
};

export { photographersState };
