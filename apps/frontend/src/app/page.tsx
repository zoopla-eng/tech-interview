import { Hello } from "@repo/ui/hello";

export const metadata = {
  title: "Demo Page",
};

export default function DemoPage(): JSX.Element {
  return (
    <div className="container">
      <h1 className="title">Demo Page</h1>
      <p className="description">
        Built With Turborepo, Express, Next.js and React.
      </p>
      <Hello />
    </div>
  );
}
