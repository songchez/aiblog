import Script from "next/script";

export default function GoogleAnayltics() {
  return (
    <div className="container">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-04PW6T0VV7"
      ></Script>
      <Script id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-04PW6T0VV7');
      `}
      </Script>
    </div>
  );
}
