import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";
import Test from "@/Components/Test";
import { AuthOption } from "@/lib/AuthOption";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(AuthOption);
  return (
    <div className="space-y-20">
      <Test />
      <p>{JSON.stringify(session)}</p>
      <Banner />
      <section>
        <Products />
      </section>
    </div>
  );
}
