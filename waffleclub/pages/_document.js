import Document, {Head, Html, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps, styles: (<>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (<Html>
      <Head>
        <link rel="preconnect" href="https://www.googletagmanager.com"/>

        {/*<!-- Google Tag Manager -->*/}
        <script
          key="ga2"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        />
        {/*<!-- End Google Tag Manager -->*/}
        <script id="hotjar" dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2819233,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-%27,%27.js?sv=%27);
          `
        }}/>
      </Head>
      <body>
      {/*<!-- Google Tag Manager (noscript) -->*/}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe title="ga" src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
                  height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
      }}/>
      {/*<!-- End Google Tag Manager (noscript) -->*/}
      </body>
      <Main/>
      <NextScript/>
    </Html>)
  }
}
