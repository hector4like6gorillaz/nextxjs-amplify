"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mapRoutes } from "~/shared/routes/routesMap";

const links = [
  { href: mapRoutes.home, label: "Home" },
  { href: mapRoutes.pokemon, label: "Pokémon" },
];

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 border-b border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-black">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`text-sm font-medium transition-colors ${
              isActive
                ? "text-black dark:text-white"
                : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default MainNav;
