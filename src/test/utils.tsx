import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

const renderWithIntl = (ui: ReactNode, { locale = 'en', messages = {} } = {}) => {
    return render(
        <NextIntlClientProvider locale={locale} messages={messages}>
            {ui}
        </NextIntlClientProvider>
    );
};

export * from "@testing-library/react";
export { renderWithIntl }