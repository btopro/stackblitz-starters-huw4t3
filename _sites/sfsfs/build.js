window.process={env:{NODE_ENV:"production"}};var cdn="./";window.WCGlobalCDNPath&&(cdn=window.WCGlobalCDNPath),window.__appCDN&&(cdn=window.__appCDN);var fname="wc-registry.json";window.WCGlobalRegistryFileName&&(fname=window.WCGlobalRegistryFileName),window.WCAutoloadRegistryFile=cdn+fname;var autoloaderScriptLocation="build/es6/node_modules/@haxtheweb/wc-autoload/wc-autoload.js";try{var def=document.getElementsByTagName("script")[0];new Function("import('');"),animationPolyfillTest();var build=document.createElement("script");build.src=cdn+autoloaderScriptLocation,build.type="module",build.onerror=e=>{!function fallbackChecks(e){var cdn=window.__appCDN;if(!window.__appCDNBlockFallback){var build=document.createElement("script");build.type="module",build.onerror=e=>{fallbackChecks(e)},"./"===cdn?(window.__appCDN="https://cdn.hax.cloud/cdn/",window.WCAutoloadRegistryFile=window.WCAutoloadRegistryFile.replace(cdn,window.__appCDN),build.src=window.__appCDN+autoloaderScriptLocation,def.parentNode.insertBefore(build,def),console.warn(cdn+" failed to respond, falling back to alternative: "+window.__appCDN)):"https://cdn.hax.cloud/cdn/"===cdn?(window.__appCDN="https://cdn.webcomponents.psu.edu/cdn/",window.WCAutoloadRegistryFile=window.WCAutoloadRegistryFile.replace(cdn,window.__appCDN),build.src=window.__appCDN+autoloaderScriptLocation,def.parentNode.insertBefore(build,def),console.warn(cdn+" failed to respond, falling back to alternative: "+window.__appCDN)):"https://cdn.webcomponents.psu.edu/cdn/"===cdn?(window.__appCDN="https://cdn.waxam.io/",window.WCAutoloadRegistryFile=window.WCAutoloadRegistryFile.replace(cdn,window.__appCDN),build.src=window.__appCDN+autoloaderScriptLocation,def.parentNode.insertBefore(build,def),console.warn(cdn+" failed to respond, falling back to alternative: "+window.__appCDN)):(window.__appCDN="./",window.WCAutoloadRegistryFile=window.WCAutoloadRegistryFile.replace(cdn,window.__appCDN),console.error("Local delivery failed and all alternative CDNs failed to load. You might be offline, in a secure environment or doing testing intentionally to generate this *shrug*")),animationPolyfillTest()}}()},def.parentNode.insertBefore(build,def)}catch(err){var buildLegacy=document.createElement("script");buildLegacy.src=cdn+"assets/build-legacy.js",def.parentNode.insertBefore(buildLegacy,def)}function animationPolyfillTest(){if(!Element.prototype.animate){var ani=document.createElement("script");ani.src=window.__appCDN+"build/es6/node_modules/web-animations-js/web-animations-next-lite.min.js",def.parentNode.insertBefore(ani,def)}}