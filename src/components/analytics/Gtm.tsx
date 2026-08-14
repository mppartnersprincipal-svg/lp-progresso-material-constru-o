import Script from "next/script";

// Container GTM-TXH6X493 (criado pelo usuário em 13/08/2026). O ID entra por
// env em BUILD (.env.local no dev; painel da Vercel no deploy). Sem o ID,
// nenhum script de terceiros carrega — eventos ficam no dataLayer.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Consent Mode v2 + GTM (PRD §10.2 / §8.5):
 * - consent default "denied" ANTES de qualquer tag (beforeInteractive);
 * - GTM só depois da interatividade (afterInteractive) — regra rígida de CWV.
 */
export function Gtm() {
  return (
    <>
      <Script id="consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`}
      </Script>
      {GTM_ID ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}
    </>
  );
}

/** <noscript> do GTM — logo após a abertura do <body>. */
export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
