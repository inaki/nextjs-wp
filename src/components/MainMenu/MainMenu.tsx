import Link from "next/link";
import React from "react";
import { ButtonLink } from "../ButtonLink";

interface MenuItem {
  id: string;
  label: string;
  destination: string;
  subMenuItems?: MenuItem[];
}

interface MainMenuProps {
  mainMenuItems: MenuItem[];
  callToActionLabel: string;
  callToActionDestination: string;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  mainMenuItems,
  callToActionLabel,
  callToActionDestination,
}) => {
  return (
    <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20 flex justify-between">
      <div className="py-4 pl-5 flex">The Unfixed Mind</div>
      <div className="py-4 pl-5 flex">
        {(mainMenuItems || []).map((item) => (
          <div
            key={item.id}
            className="px-5 hover:bg-slate-700 cursor-pointer relative group"
          >
            <Link href={item.destination} className="p-1 block">
              {item.label}
            </Link>
            {!!item.subMenuItems?.length && (
              <div>
                {item.subMenuItems.map((subMenuItem) => (
                  <Link
                    key={subMenuItem.id}
                    href={item.destination}
                    className="hidden bg-slate-800 text-right absolute right-0 top-full -mt-3"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
          <ButtonLink
            label={callToActionLabel}
            destination={callToActionDestination}
          />
        </div>
      </div>
    </div>
  );
};
