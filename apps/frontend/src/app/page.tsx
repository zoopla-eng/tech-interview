import { Link } from "@repo/ui/link";
import { CounterButton } from "@repo/ui/counter-button";
import { MealsList } from '@repo/ui/hello'


export const metadata = {
  title: "Store | Kitchen Sink",
};

export default function Store(): JSX.Element {

  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description">
        Built With{" "}
        <Link href="https://turbo.build/repo" newTab>
          Turborepo
        </Link>
        {" & "}
        <Link href="https://nextjs.org/" newTab>
          Next.js
        </Link>
      </p>
        <MealsList />
    </div>
  );
}
