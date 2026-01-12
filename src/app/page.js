import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = getServerSession()
  return (
    <div className="space-y-20">
      <Banner />
      <section>
        <Products />
      </section>
    </div>
  );
}
