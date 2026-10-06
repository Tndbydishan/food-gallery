# Custom Fonts Directory

Place your custom font files in this folder (`/public/fonts/custom/`).

### Supported Formats
- `.woff2` (Recommended for modern web)
- `.woff`
- `.ttf`
- `.otf`

### How to Use Your Custom Font

1. Add your font file here, for example:
   - `Custom-Regular.woff2`
   - `Custom-Bold.woff2`

2. Register the `@font-face` in `src/index.css`:
   ```css
   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/custom/Custom-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'CustomFont';
     src: url('/fonts/custom/Custom-Bold.woff2') format('woff2');
     font-weight: 700;
     font-style: normal;
     font-display: swap;
   }
   ```

3. Apply to your elements via CSS or Tailwind:
   ```css
   .font-custom {
     font-family: 'CustomFont', sans-serif;
   }
   ```
