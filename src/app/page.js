import Banner from "@/Components/home/Banner";
import Products from "@/Components/home/Products";

export default async function Home() {
  return (
    <div className="space-y-20">
      <Banner />
      <section>
        <Products />
      </section>
    </div>
  );
}
