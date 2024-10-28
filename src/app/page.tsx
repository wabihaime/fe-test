import { Banner, FooterNav, GameList, Header } from "@/components";

export default function Home() {
  return (
    <div className="h-full relative">
      <Header />
      <Banner />
      <GameList />
      <FooterNav />
    </div>
  );
}
