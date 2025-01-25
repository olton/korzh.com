import '@astrojs/internal-helpers/path';
import { A as AstroError, b as InvalidImageService, c as ExpectedImageOptions, E as ExpectedImage, d as createAstro, e as createComponent, f as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderComponent, i as renderHead, j as renderSlot } from '../astro_D2KdCmZW.mjs';
import 'kleur/colors';
import 'clsx';
import { i as isESMImportedImage, a as isLocalService, b as isRemoteImage, D as DEFAULT_HASH_PROPS } from '../astro/assets-service_C6KKi2O1.mjs';
/* empty css                           */
/* empty css                          */
/* empty css                          */

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      '../astro/assets-service_C6KKi2O1.mjs'
    ).then(n => n.n).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: typeof options.src === "object" && "then" in options.src ? (await options.src).default ?? await options.src : options.src
  };
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash);
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== undefined ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$9 = createAstro("https://korzh.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === undefined || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "D:/Projects/sites/korzh.com/node_modules/astro/components/Image.astro", undefined);

const $$Astro$8 = createAstro("https://korzh.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === undefined || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "D:/Projects/sites/korzh.com/node_modules/astro/components/Picture.astro", undefined);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/noop","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///D:/Projects/sites/korzh.com/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const logo = new Proxy({"src":"/_astro/korzh_logo.BLrsibx3.png","width":270,"height":53,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$7 = createAstro("https://korzh.com");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Navigation;
  const { wide } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="appbar" class="container-fluid"> <nav${addAttribute({ container: !wide }, "class:list")} data-role="appbar" data-expand-point="xl"> <a href="/" class="brand no-hover">${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Logo" })}</a> <ul class="app-bar-menu ml-auto"> <li><a href="/">HOME</a></li> <li> <a href="#" class="dropdown-toggle">EASYQUERY</a> <ul class="d-menu place-right" data-role="dropdown"> <li><a href="/easyquery">EASYQUERY.NET</a></li> <li><a href="/easyquery/javascript">EASYQUERY.JS</a></li> <li><a href="/easy-report-starter-kit">EASYREPORT STARTER KIT</a></li> </ul> </li> <li><a href="/metroui">METRO UI</a></li> <li><a href="/localizer">LOCALIZER</a></li> <li><a href="/blog">BLOG</a></li> <li class="d-none"><a href="/news">NEWS</a></li> <li><a href="/support" slow-loading>SUPPORT</a></li> <li> <a href="#" class="dropdown-toggle">DOCS</a> <ul class="d-menu place-right" data-role="dropdown"> <li><a href="/easyquery/docs" slow-loading>EASYQUERY.NET</a></li> <li><a href="/easyquery/javascript/docs" slow-loading>EASYQUERY.JS</a></li> <li><a href="/easy-report-starter-kit/docs" slow-loading>EASY REPORT STARTER KIT</a></li> <li class="divider"></li> <li><a href="/localizer/docs" slow-loading>LOCALIZER</a></li> <li class="divider"></li> <li><a href="https://metroui.org.ua/intro.html">METRO UI</a></li> </ul> </li> <li><a href="/account" slow-loading><span class="mif-user mr-2"></span>ACCOUNT</a></li> </ul> </nav> </section>`;
}, "D:/Projects/sites/korzh.com/src/components/Navigation.astro", undefined);

const $$Astro$6 = createAstro("https://korzh.com");
const $$ShareThis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ShareThis;
  const { url = Astro2.request.url, label = "Share this:", title = "Korzh.com", className = "" } = Astro2.props;
  const encoded_url = encodeURIComponent(url);
  let facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  let linkedinURL = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  let twitterURL = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
  let redditURL = `https://www.reddit.com/submit?url=${encoded_url}&title=${title}`;
  let hackernewsURL = `https://news.ycombinator.com/submitlink?u=${url}&t=${title}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> <div class="text-bold reduce-2">${label}</div> <ul class="share-links"> <li><a${addAttribute(facebookURL, "href")} target="_blank" title="Share on Facebook"><span class="mif-facebook"></span></a></li> <li><a${addAttribute(linkedinURL, "href")} target="_blank" title="Share on LinkedIn"><span class="mif-linkedin"></span></a></li> <li><a${addAttribute(twitterURL, "href")} target="_blank" title="Share on Twitter"><span class="mif-twitter"></span></a></li> <li><a${addAttribute(redditURL, "href")} target="_blank" title="Share on Reddit"><span class="mif-reddit"></span></a></li> <li><a${addAttribute(hackernewsURL, "href")} target="_blank" title="Share on Hacker News"><span class="mif-cny"></span></a></li> </ul> </div>`;
}, "D:/Projects/sites/korzh.com/src/components/ShareThis.astro", undefined);

const $$Astro$5 = createAstro("https://korzh.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="container-fluid mt-auto"> <div class="container"> <ul class="footer__menu"> <li><a href="/">HOME</a></li> <li><a href="/easyquery">EASYQUERY.NET</a></li> <li><a href="/metroui">METRO UI</a></li> <li><a href="/localizer">LOCALIZER</a></li> <li><a href="/blog">BLOG</a></li> <li><a href="/support">SUPPORT</a></li> <li><a href="/resellers">RESELLERS FAQ</a></li> <li><a href="/account">YOUR ACCOUNT</a></li> <li><a href="/privacy">PRIVACY</a></li> <li><a href="/terms-of-use">TERMS OF USE</a></li> </ul> <hr class="mt-4 mb-4 thin bg-lightSteel"> <div class="row"> <div class="cell-md-6"> ${renderComponent($$result, "ShareThis", $$ShareThis, { "title": title })} </div> <div class="cell-md-6 border-left bd-lightSteel"> <div class="d-flex flex-column flex-align-start pl-4"> <div>1998-2023 &copy; Korzh.com. Made in Ukraine. All Rights Reserved.</div> <div class="mute-text">All product names, logos, and brands are the property of their respective owners.</div> <div>
Site built with <a class="fg-yellow no-decor" href="/metroui">Metro UI</a>. Powered by <a class="fg-yellow no-decor" href="https://astro.build">Astro</a>.
</div> </div> </div> </div> </div> </footer> `;
}, "D:/Projects/sites/korzh.com/src/components/Footer.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://korzh.com");
const $$GTag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$GTag;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-TTN7QK6N6X"><\/script> '])));
}, "D:/Projects/sites/korzh.com/src/components/GTag.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://korzh.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title = "Korzh.com", description = "", permalink = "", image = "", base } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico"><meta charset="UTF-8"><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"><title>', '</title><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="title"', '><meta name="description"', '><!-- Open Graph Tags (Facebook) --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:url"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"', '><meta property="twitter:url"', '><meta property="twitter:description"', '><meta property="twitter:image"', ">", '<script src="/js/metro.js"><\/script>'])), base && renderTemplate`<base${addAttribute(base, "href")}>`, title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(permalink, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(permalink, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderComponent($$result, "GTag", $$GTag, {}));
}, "D:/Projects/sites/korzh.com/src/components/BaseHead.astro", undefined);

const $$Astro$2 = createAstro("https://korzh.com");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title })}${renderHead()}</head> <body class="m4-cloak"${addAttribute({ paddingTop: "52px" }, "style")}> ${renderComponent($$result, "Navigation", $$Navigation, { "wide": false })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "title": title })}  </body> </html>`;
}, "D:/Projects/sites/korzh.com/src/layouts/PageLayout.astro", undefined);

const $$Astro$1 = createAstro("https://korzh.com");
const $$MoreQuestions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MoreQuestions;
  const { bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["mt-auto", "container-fluid", bg || "bg-white"], "class:list")} style="padding: 40px 0;" data-astro-cid-wanphrxm> <div class="container" data-astro-cid-wanphrxm> <h3 class="text-bold text-center" data-astro-cid-wanphrxm>HAVE MORE QUESTIONS?</h3> <p class="text-leader text-center" data-astro-cid-wanphrxm>
Don't hesitate to contact us; we are eager to assist with any inquiries.
</p> <div class="text-center mt-10" data-astro-cid-wanphrxm> <a href="/support" class="button large info outline" data-astro-cid-wanphrxm>CONTACT US</a> </div> </div> </section> `;
}, "D:/Projects/sites/korzh.com/src/components/MoreQuestions.astro", undefined);

const img404 = new Proxy({"src":"/_astro/404.D21ek-mi.png","width":1969,"height":960,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://korzh.com");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "PAGE NOT FOUND :: Korzh.com - Tools from Developers for Developers" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<br> <br> <br> <section class="container-fluid"> <div class="container"> <div class="d-flex flex-align-center flex-justify-center flex-column pt-20"> ${renderComponent($$result2, "Image", $$Image, { "src": img404, "alt": "Not found", "style": "width: 500px; max-width: 90%" })} <div class="h2">Page not found</div> <div>The page you are looking doesn't exist or another error occurred.</div> <div>Go back, or head over to <a href="/">Korzh.com</a> to choose a new direction</div> </div> </div> </section> <br> <br> <br> ${renderComponent($$result2, "MoreQuestions", $$MoreQuestions, {})} ` })}`;
}, "D:/Projects/sites/korzh.com/src/pages/404.astro", undefined);

const $$file = "D:/Projects/sites/korzh.com/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$PageLayout as a, $$MoreQuestions as b, $$BaseHead as c, getConfiguredImageService as g, imageConfig as i };
