# Zoopla Full Stack Technical Interview

Hello, hola, bonjour, ciao, nǐ hǎo!

This project is the starting point for the technical interview for the Full Stack Developer role at Zoopla. Please download it, get it running and familiarise yourself with the codebase before the interview. Note that if you're not comfortable with TypeScript, you can use JavaScript instead - it will still compile, you'll just get a bunch of linting errors.

You might also want to read the docs for any of the frameworks used in the project that you are not familiar with - but honestly this isn't required! If you can show us your thinking, fallback to pseudo code where useful, ask questions and use tools like Stack Overflow or Copilot where you're unsure, that's all we need. We're aiming to create a collaborative environment as close as possible to what you'd be doing in your day-to-day role at Zoopla.

## Getting Started

To get started, you'll need to have a relatively recent version of Node.js installed on your machine (check [package.json](./package.json) for minimum requirements). You can download it from [here](https://nodejs.org/en/download/), or use a tool like [NVM](https://github.com/nvm-sh/nvm) or [Volta](https://volta.sh/).

Once you have Node.js installed, you can run the following commands to get the project up and running:

```bash
# Clone the repository
git clone

# Navigate into the project directory
cd tech-interview

# Install dependencies
npm install

# Run the development server
npm run dev
```

At this point, you should be able to see a working page at [http://localhost:3002](http://localhost:3002). You can also check the API at the healthcheck endpoint at [http://localhost:5001/status](http://localhost:5001/status). And you can try the other commands in the [package.json](./package.json) - check that tests run and pass for instance.

## What's Inside?

You'll find a monorepo setup using [Turborepo](https://turbo.build/repo/docs), which we're using to help us manage multiple packages, a frontend and an api in a single repository. You'll be working in the following places (and shouldn't really have to touch anything else):

- [`/apps/api/src`](./apps/api/src) (Express API)
- [`/apps/frontend/src/app`](./apps/frontend/src/app) (Next.js frontend)
- [`/packages/ui`](./packages/ui) (React UI component library)

#### Creating new packages/components/libs

Just a quick note here, as the setup may look unfamiliar. Turborepo isn't a fan of barrel files ([for good reasons](https://turbo.build/repo/docs/guides/tools/typescript#creating-entrypoints-to-the-package)) and uses explicit exports. So in order to export your new component (something like the [Hello](packages/ui/src/hello/index.tsx) component), you need to add it to the [package.json](packages/ui/package.json) exports array, to the [tsup.config.ts](packages/ui/tsup.config.ts) entry array, and then import it where you need it with: `import { Another } from "@repo/ui/another";`.

Likewise, if you delete something without removing it from this array, or are only exporting a single component, you might get `Module not found` or `Unsupported Server Component type: undefined` sorts of errors. You'll also need to run `npm run dev` again to see your changes reflected.

## Additional Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/en/starter/installing.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)

Feel free to reach out if you have any questions or run into any issues. Good luck with your interview!
