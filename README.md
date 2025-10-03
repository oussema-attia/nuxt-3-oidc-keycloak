# Nuxt 3 OIDC Keycloak Starter

A minimal Nuxt 3 starter template with OpenID Connect (OIDC) authentication using Keycloak.  
Ideal for quickly bootstrapping secure Vue 3 applications with modern authentication.

## Features

- ⚡️ Nuxt 3 (Vue 3, Vite, TypeScript)
- 🔐 OIDC authentication via [Keycloak](https://www.keycloak.org/)
- 🪪 [nuxt-oidc-auth](https://github.com/sidebase/nuxt-oidc-auth) composable integration
- 🛠️ TypeScript support
- 🏗️ Ready for local development and production deployment

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/oussema-attia/nuxt-3-oidc-keycloak.git
cd nuxt-3-oidc-keycloak
```

### 2. Install Dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 3. Configure Environment

Copy `.env.example` to `.env` and update with your Keycloak and OIDC settings:

```bash
cp .env.example .env
```

| Variable                | Description                        |
|-------------------------|------------------------------------|
| `OIDC_CLIENT_ID`        | Keycloak client ID                 |
| `OIDC_ISSUER`           | Keycloak issuer URL                |
| `OIDC_REDIRECT_URI`     | Redirect URI after login           |
| `OIDC_LOGOUT_REDIRECT`  | Redirect URI after logout          |

### 4. Run Development Server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Usage

- The main authentication logic is in [`app.vue`](app.vue).
- Use the `useOidcAuth` composable for login, logout, and user state.
- Example usage:

```ts
const { loggedIn, user, login, logout } = useOidcAuth();
```

## Customization

- Update [`nuxt.config.ts`](nuxt.config.ts) for additional modules or runtime config.
- Add your own pages and components as needed.
- See [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) for more info.

## License

MIT

---

Inspired by the official Nuxt and Keycloak docs.