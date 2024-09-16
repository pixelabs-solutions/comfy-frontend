'use client';
import store from '../../store/store'; // Ensure correct path
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/components/layouts/loading'; // Ensure correct path
import { Provider } from 'react-redux';
import App from '../../app';

interface IProps {
    children?: ReactNode;
}

const ProviderComponent: React.FC<IProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <Suspense fallback={<Loading />}>
                <App>{children}</App>
            </Suspense>
        </Provider>
    );
};

export default ProviderComponent;
