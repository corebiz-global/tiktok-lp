import Image from "next/image";
import Link from "next/link";
import logoSrc from "../../public/assets/images/logo-corebiz.png";
import { LanguageToggle } from "./components/language-toggle";
import { ThemeToggle } from "./components/theme-toggle";

export function Header() {
  return (
    <header className="h-16 w-full bg-neutral-900 z-10  shadow fixed top-0 right-0 z">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Logo da Corebiz"
              width={120}
              className="h-8 w-auto object-contain invert-100"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-neutral-100 hover:text-white transition-colors">
              Início
            </Link>

            <Link href="/docs" className="text-sm font-medium text-neutral-100 hover:text-white transition-colors">
              Documentação
            </Link>
          </nav>
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
