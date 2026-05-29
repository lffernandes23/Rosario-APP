import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({

  plugins: [

    react(),

    VitePWA({

      registerType: "autoUpdate",

      includeAssets: [
        "favicon.svg",
        "apple-touch-icon.png"
      ],

      manifest: {

        name: "Rosário App",

        short_name: "Rosário",

        description:
          "Aplicativo para oração do Santo Rosário",

        theme_color: "#111827",

        background_color: "#000000",

        display: "standalone",

        orientation: "portrait",

        scope: "/",

        start_url: "/",

        icons: [

          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }

        ]

      }

    })

  ]

});