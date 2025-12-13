import { Separator } from "../../components/ui/separator";
import { Hero } from "./components/hero";
import { CreateAccount } from "./components/create-account";
import { CreateBrand } from "./components/create-brand";
import { Links } from "./components/links";

export default function CriarContaSellerTikTokPage() {
  return (
    <div>
      <Hero />
      <Separator className="my-10" />
      <CreateAccount />
      <Separator className="my-10" />
      <CreateBrand />
      <Separator className="my-10" />
      <Links />
    </div>
  );
}
