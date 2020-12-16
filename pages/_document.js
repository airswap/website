import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { SiteConfig } from '../constants/siteConfig'


/**
 * Custom Next `App`
 *
 * https://nextjs.org/docs/#custom-document
 */
export default class MyDocument extends Document {
  /**
   * Handles styled components on the server
   *
   * @param {Object} ctx - nextjs ctx object
   */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    const baseUrl = `${ SiteConfig.protocol }://${ SiteConfig.domain }`
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()],
      baseUrl,
    };
  }

  /**
   * Sets up base html document
   *
   * @returns {React.Element} Element to render
   */
  render() {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#ffffff" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Sans+Pro:400,600"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
