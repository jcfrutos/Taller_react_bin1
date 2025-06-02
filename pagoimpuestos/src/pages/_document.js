import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseLine } from "@nextui-org/react";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, 
            styles: [
                <React.Fragment key="styles">
                    {initialProps.styles}
                    <CssBaseLine />
                </React.Fragment>
            ]
        };
    }
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="/styles/globals.css" />
                    {CssBaseLine.flush}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;