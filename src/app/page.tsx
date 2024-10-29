import { Banner, FooterNav, GameList, Header } from "@/components";

export default function Home() {
  return (
    <div className="h-[100vh] w-full overflow-y-hidden flex flex-col relative no-scrollbar">
      <Header />
      <div className="flex-1 overflow-scroll no-scrollbar">
        <Banner />
        <GameList />
      </div>
      <FooterNav />
    </div>
  );
}
