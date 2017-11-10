module.exports = {
    "globDirectory": "dist\\",
    "globPatterns": [
        "**/*.{js,txt,ttf,scss,ico,html,log,css}"
    ],
    "swDest": "dist/sw.js",
    "globIgnores": [
        "..\\workbox-cli-config.js"
    ],
    "runtimeCaching": [{
            "urlPattern": "https://us-central1-pwa-demo-25ad5.cloudfunctions.net/pwaServer/posts",
            "handler": "cacheFirst",
            "options": {
                "cacheName": "posts",
                "cacheExpiration": { "maxEntries": 20 }
            }
        },
        {
            "urlPattern": "https://pwa-demo-25ad5.firebaseapp.com/*",
            "handler": "cacheFirst",
            "options": {
                "cacheName": "routes",
                "cacheExpiration": { "maxEntries": 20 }
            }
        }

    ]
};