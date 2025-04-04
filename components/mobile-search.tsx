import { useState } from "react";
import { Input } from "./ui/input";
import { format, isBefore, startOfDay } from "date-fns";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "./ui/button";
import { Search } from "lucide-react";
// import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";

export const MobileSearch = () => {
  const [recentSearches, setRecentSearches] = useState("");
  const [recentPlaces, setRecentPlaces] = useState("");
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [showRecentPlaces, setShowRecentPlaces] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const isDisabled = (date: Date) => {
    const today = startOfDay(new Date()); // Get today's date at 00:00
    return isBefore(date, today); // Disable dates before today
  };
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col gap-4 mx-6 w-full min-w-[300px]">
      <div className="border-b border-[#1A1A1A14]">
        <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
          What are you planning?
        </p>
        <Input
          type="text"
          placeholder="Enter your activity"
          value={recentSearches}
          onChange={(e) => setRecentSearches(e.target.value)}
          className="border-transparent shadow-none text-[15px] font-medium p-0 placeholder:text-[#434242B2]"
        />
      </div>
      <div className="border-b border-[#1A1A1A14]">
        <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
          When?
        </p>
        <Popover>
          <PopoverTrigger asChild>
            <p
              className={cn(
                "text-sm mt-2 font-medium bg-transparent shadow-none p-0 h-fit text-[#434242B2] cursor-pointer",
                !date && "text-muted-foreground"
              )}
            >
              {date ? (
                format(date, "PPP")
              ) : (
                <span className="text-sm font-medium text-[#434242B2]">
                  Select Date
                </span>
              )}
            </p>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 rounded-[19px]" align="start">
            {/* <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={isDisabled}
            /> */}
          </PopoverContent>
        </Popover>
      </div>
      <div className="">
        <p className="text-[13px] text-[#434242CC] font-medium leading-[21px]">
          Where?
        </p>
        <Input
          type="text"
          placeholder="Enter the area"
          value={recentPlaces}
          onChange={(e) => setRecentPlaces(e.target.value)}
          onKeyUp={() => setShowRecentPlaces(true)}
          className="border-transparent shadow-none text-[15px] font-medium p-0 placeholder:text-[#434242B2]"
        />
      </div>
      <Button className="bg-[#FDF1C3] h-11 rounded-[32px]">
        <Search className="text-[#001224] size-5 hover:text-[#FDF1C3]" />
      </Button>
    </div>
  );
};
