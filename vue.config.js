module.exports = {
  pwa: {
    themeColor: "#141B26",
    msTileColor: "#f5f5f5",
    appleMobileWebAppCache: "yes",
    icons: [
      {
        src: "icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    iconPaths: {
      favicon32: "icons/favicon-32x32.png",
      favicon16: "icons/favicon-16x16.png",
      appleTouchIcon: "icons/apple-touch-icon-180x180.png",
      maskIcon: "icons/safari-pinned-tab.svg",
      msTileImage: "icons/mstile-144x144.png",
    },
    manifestOptions: {
      background_color: "#141B26",
    },
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};
