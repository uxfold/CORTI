import { brands } from "@/lib/site";

export function BrandRow() {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {brands.map((brand) => (
        <li
          key={brand.name}
          className="grid h-28 place-items-center rounded-lg border border-line bg-paper px-6"
        >
          <img
            src={brand.img}
            alt={brand.name}
            className="max-h-12 w-auto object-contain"
          />
        </li>
      ))}
    </ul>
  );
}
