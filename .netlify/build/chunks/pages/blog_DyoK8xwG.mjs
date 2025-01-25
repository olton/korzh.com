import rss from '@astrojs/rss';
import { A as AstroError, k as UnknownContentCollectionError, e as createComponent, l as renderUniqueStylesheet, n as renderScriptElement, o as createHeadAndContent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_D2KdCmZW.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'clsx';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection **${collection}** does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return;
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://korzh.com", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function")
      return undefined;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return undefined;
  };
}
function createGetEntries(getEntry) {
  return async function getEntries(entries) {
    return Promise.all(entries.map((e) => getEntry(e)));
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx": () => import('../2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data_0YjeHrXR.mjs'),"/src/content/blog/2018-02-10-aspnet-identity-weakening-password-policies.mdx": () => import('../2018-02-10-aspnet-identity-weakening-password-policies_BTEzK5FH.mjs'),"/src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx": () => import('../2018-02-22-aspnet-identity-migrate-membership-passwords_uzUp2W0F.mjs'),"/src/content/blog/2018-04-08-aspnet-identity-master-password.mdx": () => import('../2018-04-08-aspnet-identity-master-password_6qAKx6sY.mjs'),"/src/content/blog/2018-05-30-embedded-resources-testing-projects.mdx": () => import('../2018-05-30-embedded-resources-testing-projects_BrODKWhI.mjs'),"/src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx": () => import('../2019-05-07-add-extra-user-claims-aspnet-core-webapp_DFhV9vXe.mjs'),"/src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx": () => import('../2020-01-08-dependency-injection-explanation-in-simple-words_gGOwSPrq.mjs'),"/src/content/blog/2020-05-01-dotnet-vs-java-what-development-platform-better.mdx": () => import('../2020-05-01-dotnet-vs-java-what-development-platform-better_DMbpwObz.mjs'),"/src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx": () => import('../2020-05-23-asp-net-core-project-structure-explained-part1_A9Ao9_n9.mjs'),"/src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx": () => import('../2020-08-10-asp-net-core-project-structure-explained-part2_BfkyV2q6.mjs'),"/src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx": () => import('../2021-03-31-crud-asp-net-core-with-easydata_ycKxllSV.mjs'),"/src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx": () => import('../2021-04-15-single-file-web-service-aspnetcore_Dyk_TjQV.mjs'),"/src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx": () => import('../2022-04-19-using-ts-wp-aspnet-core-proj_CVTAx4Ua.mjs'),"/src/content/blog/welcome.md": () => import('../welcome_MYkQGBTb.mjs'),"/src/content/js-docs/api-reference/easydata-core/functions.mdx": () => import('../functions_CSgzNidI.mjs'),"/src/content/js-docs/changelog.mdx": () => import('../changelog_BbrKTtmO.mjs'),"/src/content/js-docs/intro.mdx": () => import('../intro_BhZB5K_i.mjs'),"/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx": () => import('../how-to-add-token-to-easyquery-http-requests_D_pysFML.mjs'),"/src/content/js-docs/tutorial/index.mdx": () => import('../index_C5qYHRz8.mjs'),"/src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx": () => import('../replaceing-datepicker-widget_DQL4fObb.mjs'),"/src/content/js-docs/web-service-api.mdx": () => import('../web-service-api_CKRHaB-Q.mjs'),"/src/content/news/new-site.md": () => import('../new-site_JiECfl2_.mjs'),"/src/content/news/switch-to-rollup.md": () => import('../switch-to-rollup_VLTdGj4_.mjs'),"/src/content/news/welcome.md": () => import('../welcome_B6kcKUn8.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/authors/oleksandr-melnychenko.json": () => import('../oleksandr-melnychenko_7gqIJYAQ.mjs'),"/src/content/authors/serhii-korzh.json": () => import('../serhii-korzh_zvQBpyJ9.mjs'),"/src/content/authors/serhii-pimenov.json": () => import('../serhii-pimenov_uosXGOFh.mjs')});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"authors":{"type":"data","entries":{"oleksandr-melnychenko":"/src/content/authors/oleksandr-melnychenko.json","serhii-korzh":"/src/content/authors/serhii-korzh.json","serhii-pimenov":"/src/content/authors/serhii-pimenov.json"}},"blog":{"type":"content","entries":{"aspnet-identity-migrate-membership-passwords":"/src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx","aspnet-identity-weakening-password-policies":"/src/content/blog/2018-02-10-aspnet-identity-weakening-password-policies.mdx","aspnet-identity-store-user-data-in-claims":"/src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx","embedded-resources-testing-projects":"/src/content/blog/2018-05-30-embedded-resources-testing-projects.mdx","aspnet-identity-master-password":"/src/content/blog/2018-04-08-aspnet-identity-master-password.mdx","add-extra-user-claims-aspnet-core-webapp":"/src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx","dependency-injection-explanation-in-simple-words":"/src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx","dotnet-vs-java-what-development-platform-better":"/src/content/blog/2020-05-01-dotnet-vs-java-what-development-platform-better.mdx","asp-net-core-default-project-structure-explained-part-1":"/src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx","asp-net-core-project-structure-explained-part2":"/src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx","crud-asp-net-core-with-easydata":"/src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx","typescript-webpack-aspnetcore":"/src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx","single-file-web-service-aspnetcore":"/src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx","welcome":"/src/content/blog/welcome.md"}},"js-docs":{"type":"content","entries":{"changelog":"/src/content/js-docs/changelog.mdx","intro":"/src/content/js-docs/intro.mdx","web-service-api":"/src/content/js-docs/web-service-api.mdx","tutorial/index":"/src/content/js-docs/tutorial/index.mdx","tutorial/how-to-add-token-to-easyquery-http-requests":"/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx","tutorial/replacing-datepicker-widget":"/src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx","api-reference/easydata-core/functions":"/src/content/js-docs/api-reference/easydata-core/functions.mdx"}},"news":{"type":"content","entries":{"new-site":"/src/content/news/new-site.md","switch-to-rollup":"/src/content/news/switch-to-rollup.md","welcome":"/src/content/news/welcome.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data.mdx": () => import('../2018-01-22-ASP-NET-Identity-Use-claims-to-store-additional-users-data_D0fpxPSY.mjs'),"/src/content/blog/2018-02-10-aspnet-identity-weakening-password-policies.mdx": () => import('../2018-02-10-aspnet-identity-weakening-password-policies_SuIvULjl.mjs'),"/src/content/blog/2018-02-22-aspnet-identity-migrate-membership-passwords.mdx": () => import('../2018-02-22-aspnet-identity-migrate-membership-passwords_D23Vk_wv.mjs'),"/src/content/blog/2018-04-08-aspnet-identity-master-password.mdx": () => import('../2018-04-08-aspnet-identity-master-password_MXYev2AJ.mjs'),"/src/content/blog/2018-05-30-embedded-resources-testing-projects.mdx": () => import('../2018-05-30-embedded-resources-testing-projects_Befh5PWY.mjs'),"/src/content/blog/2019-05-07-add-extra-user-claims-aspnet-core-webapp.mdx": () => import('../2019-05-07-add-extra-user-claims-aspnet-core-webapp_DJqbOmQg.mjs'),"/src/content/blog/2020-01-08-dependency-injection-explanation-in-simple-words.mdx": () => import('../2020-01-08-dependency-injection-explanation-in-simple-words_Cj2DbHET.mjs'),"/src/content/blog/2020-05-01-dotnet-vs-java-what-development-platform-better.mdx": () => import('../2020-05-01-dotnet-vs-java-what-development-platform-better_Bn-TMMy5.mjs'),"/src/content/blog/2020-05-23-asp-net-core-project-structure-explained-part1.mdx": () => import('../2020-05-23-asp-net-core-project-structure-explained-part1_S9E7x3Aa.mjs'),"/src/content/blog/2020-08-10-asp-net-core-project-structure-explained-part2.mdx": () => import('../2020-08-10-asp-net-core-project-structure-explained-part2_BMAti80A.mjs'),"/src/content/blog/2021-03-31-crud-asp-net-core-with-easydata.mdx": () => import('../2021-03-31-crud-asp-net-core-with-easydata_CqgGFFWV.mjs'),"/src/content/blog/2021-04-15-single-file-web-service-aspnetcore.mdx": () => import('../2021-04-15-single-file-web-service-aspnetcore_DKBDm2LR.mjs'),"/src/content/blog/2022-04-19-using-ts-wp-aspnet-core-proj.mdx": () => import('../2022-04-19-using-ts-wp-aspnet-core-proj_DCEIaKRU.mjs'),"/src/content/blog/welcome.md": () => import('../welcome_BNHNoRPS.mjs'),"/src/content/js-docs/api-reference/easydata-core/functions.mdx": () => import('../functions_CRE7KWQY.mjs'),"/src/content/js-docs/changelog.mdx": () => import('../changelog_Bq3rYZ3Z.mjs'),"/src/content/js-docs/intro.mdx": () => import('../intro_DwgUvE0G.mjs'),"/src/content/js-docs/tutorial/how-to-add-token-to-easyquery-http-requests.mdx": () => import('../how-to-add-token-to-easyquery-http-requests_DA86ndBC.mjs'),"/src/content/js-docs/tutorial/index.mdx": () => import('../index_fq8nla4r.mjs'),"/src/content/js-docs/tutorial/replaceing-datepicker-widget.mdx": () => import('../replaceing-datepicker-widget__fqJCc9L.mjs'),"/src/content/js-docs/web-service-api.mdx": () => import('../web-service-api_DiSo5mFD.mjs'),"/src/content/news/new-site.md": () => import('../new-site_tfLWbybh.mjs'),"/src/content/news/switch-to-rollup.md": () => import('../switch-to-rollup_Bplcpf11.mjs'),"/src/content/news/welcome.md": () => import('../welcome_Dg34s5fX.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const getEntries = createGetEntries(getEntry);

async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Korzh’s Blog',
        description: 'Korzh.com - Tools from Developers for Developers',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
        })),
    });
}

const blog_xml = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { getEntries as a, blog_xml as b, getCollection as g };
