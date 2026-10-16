# Security remediation — 2026-10-16

Both npm projects now audit clean. The frontend migrates from Angular 10 to Angular 21.2.25 with aligned CLI/build 21.2.27 and TypeScript 5.9. The application remains NgModule-based. The new application builder replaces Webpack, and Angular's Vitest runner replaces deprecated Karma/Protractor/TSLint tooling. Use Node >=22.12.0.

Preserved album loading, routing, gallery selection and price requests. Added FormsModule for gallery controls and initialized async album/gallery data. Updated bootstrap stylesheet resolution for the modern builder. Four integration tests cover the root outlet, authorized API request, album-to-gallery navigation and price selection. Production build and all four tests pass. The backend compiles and the existing wallet price calculation passes after dependency updates. Removed unused Axios, vulnerable nodemon, and committed node_modules; Node's built-in watch mode preserves development reloads.

Run npm ci separately in ImgurApp and backend. Frontend: npm start, npm run build, npm test. Backend: npm run dev, npm run build. The frontend application builder writes dist/ImgurApp/browser; update any static-host path accordingly. The old Protractor targets are replaced by the maintained tests. External Imgur integration was mocked during testing.
