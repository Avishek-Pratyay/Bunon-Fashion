import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import { useProducts } from "../hooks/useProducts";
import { categories } from "../data/products";

const categoryImages = {
  Panjabi:
    "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?auto=format&fit=crop&w=600&q=80",
  Kurta:
    "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80",
  Shirts:
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80",
  Trousers:
    "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80",
  Jackets:
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80",
  Sweaters:
    "https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=600&q=80",
};

export default function Home() {
  const { products, isLoading } = useProducts();
  const featured = products.filter((p) => p.isNew || p.oldPrice).slice(0, 8);
  const displayFeatured = featured.length ? featured : products.slice(0, 8);

  return (
    <div>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-night-950">
        <div
          className="absolute inset-0 bg-weave-lines opacity-60"
          aria-hidden="true"
        />
        <div className="container-bunon relative grid gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div className="max-w-xl">
            <span className="eyebrow text-mustard-400">Autumn Collection · 2026</span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-handloom-50 sm:text-5xl lg:text-[3.4rem]">
              Clothes woven with the same care as the story behind them.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-handloom-100/70">
              Bunon pairs handloom panjabis with everyday staples — cut for
              real life, priced so wearing them well isn't an occasion.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-mustard-500 px-6 py-3 text-sm font-semibold text-night-950 transition hover:bg-mustard-400"
              >
                Shop the collection
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                to="/products?category=Panjabi"
                className="text-sm font-semibold text-handloom-50 underline decoration-mustard-500/50 underline-offset-4 hover:decoration-mustard-400"
              >
                Explore panjabis
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm sm:max-w-md">
              <img
                src="https://images.unsplash.com/photo-1614251055880-ee96e4803393?auto=format&fit=crop&w=1000&q=80"
                alt="Handloom nakshi panjabi, folded on a wooden surface"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-40 rotate-[-4deg] overflow-hidden rounded-sm border-4 border-handloom-50 shadow-lift sm:block">
              <img
                src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80"
                alt="Oxford shirt detail"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Category strip ---------- */}
      <section className="container-bunon py-14 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl text-night-950">Shop by category</h2>
          <Link to="/products" className="hidden text-sm font-medium text-night-700 hover:text-night-950 sm:block">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products?category=${encodeURIComponent(cat)}`}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <img
                src={categoryImages[cat]}
                alt=""
                className="h-full w-full object-cover transition duration-700 ease-weave group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-950/80 via-night-950/10 to-transparent" />
              <span className="absolute bottom-2.5 left-3 text-sm font-semibold text-handloom-50">
                {cat}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="container-bunon">
        <div className="weave-divider" />
      </div>

      {/* ---------- Featured products ---------- */}
      <section className="container-bunon py-14 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <span className="eyebrow">Just in</span>
            <h2 className="mt-1 font-display text-2xl text-night-950">Featured pieces</h2>
          </div>
          <Link to="/products" className="text-sm font-medium text-night-700 hover:text-night-950">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : displayFeatured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </section>

      {/* ---------- Craft note / brand story ---------- */}
      <section className="bg-night-900">
        <div className="container-bunon grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="aspect-[16/10] overflow-hidden rounded-sm lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1000&q=80"
              alt="Close-up of handloom weaving detail"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="lg:order-1">
            <span className="eyebrow text-mustard-400">Why "Bunon"</span>
            <h2 className="mt-3 font-display text-2xl leading-snug text-handloom-50 sm:text-3xl">
              Bunon means "weave" — because every piece starts as thread,
              long before it's a design.
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-handloom-100/65">
              We work with small handloom units in Sirajganj and Tangail for
              our panjabis and kurtas, and pair them with everyday staples
              made for the rest of the week. No warehouses full of stock we
              hope sells — just fabric we trust and fits we test on real
              people first.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
