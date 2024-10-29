import { Link } from "@repo/ui/link";
import { Hello } from "@repo/ui/hello";

export const metadata = {
  title: "Demo Page",
};

export default function DemoPage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">Demo Page</h1>
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        ,{" "}
        <Link href="https://expressjs.com" newTab>
          Express
        </Link>
        ,{" "}
        <Link href="https://nextjs.org" newTab>
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://react.dev/" newTab>
          React
        </Link>
        .
      </p>
      <Hello />
    </div>
  );
}
