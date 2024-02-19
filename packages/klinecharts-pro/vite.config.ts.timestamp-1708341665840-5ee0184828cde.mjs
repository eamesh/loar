// vite.config.ts
import { defineConfig } from "file:///Users/emesh/emesh/loar/node_modules/.pnpm/vite@4.5.2_@types+node@20.11.16_less@4.2.0/node_modules/vite/dist/node/index.js";
import solidPlugin from "file:///Users/emesh/emesh/loar/node_modules/.pnpm/vite-plugin-solid@2.9.1_@testing-library+jest-dom@5.17.0_solid-js@1.8.14_vite@4.5.2/node_modules/vite-plugin-solid/dist/esm/index.mjs";
var vite_config_default = defineConfig({
  plugins: [solidPlugin()],
  build: {
    cssTarget: "chrome61",
    sourcemap: true,
    rollupOptions: {
      external: ["klinecharts"],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === "style.css") {
            return "klinecharts-pro.css";
          }
        },
        globals: {
          klinecharts: "klinecharts"
        }
      }
    },
    lib: {
      entry: "./src/index.ts",
      name: "klinechartspro",
      fileName: (format) => {
        if (format === "es") {
          return "klinecharts-pro.js";
        }
        if (format === "umd") {
          return "klinecharts-pro.umd.js";
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZW1lc2gvZW1lc2gvbG9hci9wYWNrYWdlcy9rbGluZWNoYXJ0cy1wcm9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9lbWVzaC9lbWVzaC9sb2FyL3BhY2thZ2VzL2tsaW5lY2hhcnRzLXByby92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZW1lc2gvZW1lc2gvbG9hci9wYWNrYWdlcy9rbGluZWNoYXJ0cy1wcm8vdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGUvY2xpZW50XCIgLz5cblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBzb2xpZFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zb2xpZCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3NvbGlkUGx1Z2luKCldLFxuICBidWlsZDoge1xuICAgIGNzc1RhcmdldDogJ2Nocm9tZTYxJyxcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsna2xpbmVjaGFydHMnXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGNodW5rSW5mbykgPT4ge1xuICAgICAgICAgIGlmIChjaHVua0luZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpIHtcbiAgICAgICAgICAgIHJldHVybiAna2xpbmVjaGFydHMtcHJvLmNzcydcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICBrbGluZWNoYXJ0czogJ2tsaW5lY2hhcnRzJ1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6ICcuL3NyYy9pbmRleC50cycsXG4gICAgICBuYW1lOiAna2xpbmVjaGFydHNwcm8nLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IHtcbiAgICAgICAgaWYgKGZvcm1hdCA9PT0gJ2VzJykge1xuICAgICAgICAgIHJldHVybiAna2xpbmVjaGFydHMtcHJvLmpzJ1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3JtYXQgPT09ICd1bWQnKSB7XG4gICAgICAgICAgcmV0dXJuICdrbGluZWNoYXJ0cy1wcm8udW1kLmpzJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8saUJBQWlCO0FBRXhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxZQUFZLENBQUM7QUFBQSxFQUN2QixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxXQUFXO0FBQUEsSUFDWCxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsYUFBYTtBQUFBLE1BQ3hCLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFNBQVMsYUFBYTtBQUNsQyxtQkFBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVztBQUNwQixZQUFJLFdBQVcsTUFBTTtBQUNuQixpQkFBTztBQUFBLFFBQ1Q7QUFDQSxZQUFJLFdBQVcsT0FBTztBQUNwQixpQkFBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
