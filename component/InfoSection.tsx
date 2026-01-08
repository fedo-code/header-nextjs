import React from "react";

const sections = [
  {
    label: "Trending",
    color: "",
    border: "border-[#929292]",
    icon: (
      <img
        src="/logos/vector.png" // image source
        alt="Trending Icon" // alt text
        style={{ width: "10px", height: "11px" }} // width 10px, height 11px
        className="inline-block align-middle" // inline-block, vertical align middle, no margin
      />
    ),
    text: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    customClass:
      "w-full md:w-[433px] h-[36px] rounded-[4px] border bg-white/30",
    textClass:
      "text-[#161B22] font-medium text-[12px] leading-[19px] font-inter ml-2",
    trendingClass:
      "text-[#F33FDE] font-inter font-medium text-[12px] leading-[19px]",
  },
  {
    label: "Latest",
    color: "",
    border: "border-[#929292]",
    icon: (
      <img
        src="/logos/vector.png"
        alt="Latest Icon"
        style={{ width: "10px", height: "11px", position: "relative", top: "-1px" }} // nudged up by 1px for alignment
        className="inline-block align-middle"
      />
    ),
    text: "Borem ipsum dolor sit amet, consectetur elit.",
    customClass: "w-[387px] h-[36px] rounded-[4px] border bg-white/30",
    textClass: "text-[#161B22] font-inter font-medium text-[12px] leading-[19px] ml-2",
    latestClass: "text-[#F33FDE] font-inter font-medium text-[12px] leading-[19px]",
  },
  {
    label: "Hot Topics",
    color: "",
    border: "border-[#929292]", // changed border to black/gray
    icon: (
      <img
        src="/logos/vector.png"
        alt="Hot Topics Icon"
        style={{ width: "10px", height: "11.3px" }} // updated to 10x11.3px
        className="inline-block align-middle ml-1"
      />
    ),
    text: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
    customClass: "w-full md:w-1/3 h-[36px] rounded-[4px] border bg-white/30",
    textClass: "text-[#161B22] font-inter font-medium text-[12px] leading-[19px] ml-2",
    hotTopicsClass: "text-[#F33FDE] font-inter font-medium text-[12px] leading-[19px] whitespace-nowrap",
  },
];

const InfoSection: React.FC = () => {
  return (
    <div
      className="w-full h-auto rounded-[4px] bg-white/30 flex flex-col lg:flex-row gap-4 justify-between mt-4"
      style={{
        maxWidth: "1310px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full">
        {/* First row: 1st and 2nd sections together on md screens */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full md:w-2/3 lg:w-auto">
          <div
            className={`flex items-center border ${sections[0].border} px-4 py-2 bg-white rounded-md ${sections[0].customClass}`}
            style={{
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <span className={sections[0].trendingClass}>
              {sections[0].label}
            </span>
            <span className="ml-1">{sections[0].icon}</span>
            <span className={`${sections[0].textClass} truncate`}>{sections[0].text}</span>
          </div>
          <div
            className={`flex items-center border ${sections[1].border} px-4 py-2 bg-white rounded-md ${sections[1].customClass} w-full md:w-auto`}
            style={{
              minWidth: 0,
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <span className={sections[1].latestClass}>
              {sections[1].label}
            </span>
            <span className="ml-1">{sections[1].icon}</span>
            <span className={`${sections[1].textClass} truncate`}>{sections[1].text}</span>
          </div>
        </div>
        {/* Second row: 3rd section alone on md screens */}
        <div
          className={`flex items-center border ${sections[2].border} px-4 py-2 bg-white rounded-md ${sections[2].customClass}`}
          style={{
            minWidth: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <span className={sections[2].hotTopicsClass}>
            {sections[2].label}
          </span>
          {sections[2].icon}
          <span className={`${sections[2].textClass} truncate`}>{sections[2].text}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
