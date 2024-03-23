import SideNavigation from "./side/page";
import BottomNavigation from "./bottom/page";
import RailNavigation from "./rail/page";

export default async function () {
  return (
    <div className="flex flex-col" style={{ height: 500 }}>
      <div className="flex overflow-hidden">
        <div className="border border-dashed">
          <RailNavigation />
        </div>
        <div className="border border-dashed border-l-0">
          <SideNavigation />
        </div>
      </div>
      <div>
        <div className="border border-dashed">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
}
