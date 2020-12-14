import React from "react";
import NextHead from "next/head";

const Head = React.memo(props => {
  const { info, baseUrl } = props;
  const meta_desc_full = info.description;
  const meta_desc_stripedHtml = meta_desc_full.replace(/<[^>]+>/g, "");
  let meta_desc = meta_desc_stripedHtml.substring(0, 140);
  meta_desc = meta_desc.substr(
    0,
    Math.min(meta_desc.length, meta_desc.lastIndexOf(" "))
  );
  const url = baseUrl;
  const title = CapitlizeString(info.title);
  function CapitlizeString(s) {
    return s.toLowerCase().replace(/\b./g, function(a) {
      return a.toUpperCase();
    });
  }
  return (
    <NextHead>
      <title>{title} - AirSwap</title>
      <link rel="shortcut icon" type="image/x-icon" href={`${baseUrl}/favicon.ico`}/>
      <meta name="description" content={meta_desc ? meta_desc : "AirSwap"}></meta>
      <meta property="og:url" content={url}></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:title" content={`${title} - AirSwap`}></meta>
      <meta property="og:description" content={meta_desc ? meta_desc : "AirSwap"}></meta>
      <meta property="og:site_name" content="AirSwap"></meta>
      <meta property="og:image" content={`${baseUrl}${info.image}`}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={`${title} - ConsenSys`}></meta>
      <meta name="twitter:description" content={meta_desc ? meta_desc : "AirSwap"}></meta>
      <meta name="twitter:image" content={`${baseUrl}${info.image}`}></meta>
      <meta name="twitter:url" content={url}></meta>
      <link rel="apple-touch-icon-precomposed" href={`${baseUrl}/icons/72x72.png`} sizes="72x72"/>
      <link rel="apple-touch-icon-precomposed" href={`${baseUrl}/icons/144x144.png`} sizes="144x144"/>
      <link rel="apple-touch-icon-precomposed" href={`${baseUrl}/icons/57x57.png`} sizes="57x57"/>
      <link rel="apple-touch-icon-precomposed" href={`${baseUrl}/icons/114x114.png`} sizes="114x114"/>
      <link rel="nokia-touch-icon" href={`${baseUrl}/icons/57x57.png`}/>
      <link rel="apple-touch-icon-precomposed" href={`${baseUrl}/icons/114x114.png`} sizes="1x1"/>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
      {/*<script async src="https://www.googletagmanager.com/gtag/js?id=UA-64552723-16"/>*/}
      {/*<script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-64552723-16');` }} />*/}
    </NextHead>
  );
});
export default Head;
