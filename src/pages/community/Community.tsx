import useReadingProgress from "../../hooks/useReadingProgress";

import Community from "../../components/Community";
import CommunityBody from "../../components/community/Body";
import CommunityHero from "../../components/community/Hero";

const CommunityPage = () => {
  const completion = useReadingProgress();
  return (
    <div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="fixed z-[100] w-full h-1 bg-primary top-0 max-lg:hidden"
      />
      <CommunityHero />
      <CommunityBody />
      <Community />
    </div>
  );
};

export default CommunityPage;
