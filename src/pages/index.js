import MelodyCategores from "@/components/allInOne/homepage/categores/MelodyCategores";
import DramaProfile from "@/components/allInOne/homepage/drama-profile/DramaProfile";
import GlobalMusic from "@/components/allInOne/homepage/global-music/GlobalMusic";
import HighlightMostView from "@/components/allInOne/homepage/highlight-most-view/HighlightMostView";
import HighlightRecentBlog from "@/components/allInOne/homepage/highlight-recent-blog/HighlightRecentBlog";
import JoinUs from "@/components/allInOne/homepage/join-us/JoinUs";
import KDramaUpdates from "@/components/allInOne/homepage/k-drama-updates/KDramaUpdates";
import ShoppingAtMelody from "@/components/allInOne/homepage/shopping-at-melody/ShoppingAtMelody";
import TopChannelMelody from "@/components/allInOne/homepage/top-channel-melody/TopChannelMelody";
import Trendingkdrama from "@/components/allInOne/homepage/trending-kdrama/Trendingkdrama";


export default function Home() {
  return (
    <div className="w-full">
      {/* most view blogs */}
      <div className="lg:mb-10 mb-5">
        <HighlightMostView />
      </div>
      {/* Recent blogs */}
      <div className="lg:mb-10 mb-5">
        <HighlightRecentBlog />
      </div>
      {/* double section */}
      <div className="grid lg:grid-cols-[69.8%,28.3%] grid-cols-1 gap-5 ">
        <div className="w-full h-auto lg:h-[2110px] overflow-y-auto no-scrollbar">
          {/* K drama updates */}
          <div className="my-6">
            <KDramaUpdates />
          </div>
          {/* Global Music */}
          <div className="my-6">
            <GlobalMusic />
          </div>
          {/* drama profile */}
          <div className="my-6">
            <DramaProfile />
          </div>
          {/* shopping */}
          <div className="my-0">
            <ShoppingAtMelody />
          </div>
        </div>
        <div className="w-full h-auto">
          {/* Trending k-drama */}
          <div className="my-6">
            <Trendingkdrama />
          </div>
          {/* Melody Categorys */}
          <div className="my-6">
            <MelodyCategores />
          </div>
          {/* Melody Channels */}
          <div className="my-6">
            <TopChannelMelody />
          </div>
          {/* Join Us */}
          <div className="my-6">
            <JoinUs />
          </div>
        </div>
      </div>
    </div>
  );
}
