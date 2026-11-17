# TestSDKPro — Next.js Starter

Next.js App Router + TypeScript starter derived from the official `create-next-app` template structure for testing **ai-sdk.pro** GitHub Import → Build → Deploy.

## Test modes
- **Static smoke:** framework `static`, output `public`, verify `/_aisdk-smoke.json`. This validates artifact deployment without compiling Next.js.
- **Next.js build:** framework `nextjs`, output `out`, executes `npm ci --ignore-scripts` then `npm run build` in the Cloudflare Sandbox. Requires a committed `package-lock.json` and an explicitly enabled staging build policy.

No production credentials, private keys, database data or user source are included. The project uses `output: "export"` in `next.config.ts`.

## Run

```sh
npm ci
npm run typecheck
npm run build
```

Next.js build emits `out/`. This is a disposable public test repository, not a production application.
