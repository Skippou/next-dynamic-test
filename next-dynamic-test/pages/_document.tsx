/**
 * Generates a document boilerplate based on the given parameters.
 * @param {string} title - The title of the document.
 * @param {string} author - The author of the document.
 * @param {string} date - The date the document was created.
 * @returns {string} The generated document boilerplate.
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
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
