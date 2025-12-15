import { Separator } from "../../components/ui/separator";
import { Hero } from "./components/hero";
import { CreateAccount } from "./components/create-account";

export default function CriarContaSellerTikTokPage() {
  return (
    <div>
      <Hero />
      <Separator className="my-8" />
      <CreateAccount />
    </div>
  );
}
