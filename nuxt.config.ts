// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["nuxt-oidc-auth"],
  oidc: {
    defaultProvider: "keycloak",
    providers: {
      keycloak: {
        audience: "account",
        baseUrl: process.env.NUXT_OIDC_PROVIDERS_KEYCLOAK_BASE_URL,
        clientId: process.env.NUXT_OIDC_PROVIDERS_KEYCLOAK_CLIENT_ID,
        clientSecret: process.env.NUXT_OIDC_PROVIDERS_KEYCLOAK_CLIENT_SECRET,
        redirectUri: "http://localhost:3000/auth/keycloak/callback",
        userNameClaim: "preferred_username",
        logoutRedirectUri: "http://localhost:3000", // Target of your post logout redirection
      },
    },
    middleware: {
      globalMiddlewareEnabled: true,
      customLoginPage: false,
    },
  },
});
