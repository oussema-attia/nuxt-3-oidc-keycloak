export default defineNuxtRouteMiddleware(() => {
  const { loggedIn, login } = useOidcAuth();

  if (!loggedIn.value) {
    login(); // Starts OIDC redirect flow
  }
});
