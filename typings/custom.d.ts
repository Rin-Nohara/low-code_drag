// custom.d.ts
import * as React from 'react';
// eslint-disable-next-line react/no-typos
import 'react';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: any;
        global?: boolean;
    }
}