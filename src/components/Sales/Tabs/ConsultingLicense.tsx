import Image from "next/image";
import { useState } from "react";

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

const regions: FilterOption[] = [
  { id: "global", label: "Global", checked: false },
  { id: "north-america", label: "North America", checked: false },
  { id: "europe", label: "Europe", checked: false },
  { id: "asia-pacific", label: "Asia Pacific", checked: false },
  { id: "middle-east-africa", label: "Middle East & Africa", checked: false },
  { id: "latin-america", label: "Latin America", checked: false },
];

const countries: FilterOption[] = [
  { id: "usa", label: "United States", checked: false },
  { id: "canada", label: "Canada", checked: false },
  { id: "mexico", label: "Mexico", checked: false },
  { id: "uk", label: "United Kingdom", checked: false },
  { id: "germany", label: "Germany", checked: false },
  { id: "france", label: "France", checked: false },
  { id: "italy", label: "Italy", checked: false },
  { id: "spain", label: "Spain", checked: false },
  { id: "netherlands", label: "Netherlands", checked: false },
  { id: "sweden", label: "Sweden", checked: false },
  { id: "china", label: "China", checked: false },
  { id: "india", label: "India", checked: false },
  { id: "japan", label: "Japan", checked: false },
  { id: "south-korea", label: "South Korea", checked: false },
  { id: "australia", label: "Australia", checked: false },
  { id: "indonesia", label: "Indonesia", checked: false },
  { id: "singapore", label: "Singapore", checked: false },
  { id: "thailand", label: "Thailand", checked: false },
  { id: "malaysia", label: "Malaysia", checked: false },
  { id: "new-zealand", label: "New Zealand", checked: false },
  { id: "uae", label: "United Arab Emirates", checked: false },
  { id: "saudi-arabia", label: "Saudi Arabia", checked: false },
  { id: "israel", label: "Israel", checked: false },
  { id: "egypt", label: "Egypt", checked: false },
  { id: "qatar", label: "Qatar", checked: false },
  { id: "brazil", label: "Brazil", checked: false },
  { id: "argentina", label: "Argentina", checked: false },
  { id: "chile", label: "Chile", checked: false },
  { id: "colombia", label: "Colombia", checked: false },
  { id: "peru", label: "Peru", checked: false },
];

const segmentations: FilterOption[] = [
  { id: "product-type", label: "By Product Type", checked: false },
  { id: "technology", label: "By Technology", checked: false },
  { id: "application", label: "By Application", checked: false },
  { id: "deployment-type", label: "By Deployment Type", checked: false },
];

const researchObjective: FilterOption[] = [
  { id: "market-entry", label: "Market Entry Strategy", checked: false },
  { id: "competitor-analysis", label: "Competitor Analysis", checked: false },
  {
    id: "product-development",
    label: "Product Development Insights",
    checked: false,
  },
  { id: "market-size", label: "Market Size and Forecasting", checked: false },
  { id: "pricing-strategy", label: "Pricing Strategy", checked: false },
  { id: "demand-analysis", label: "Demand Analysis", checked: false },
  { id: "others", label: "Others", checked: false },
];

const ResearchFilter = () => {
  const [selectedRegions, setSelectedRegions] = useState(regions);
  const [selectedCountries, setSelectedCountries] = useState(countries);
  const [selectedSegmentations, setSelectedSegmentations] =
    useState(segmentations);

  const handleFilterChange = (id: string, category: string) => {
    if (category === "region") {
      setSelectedRegions((prev) =>
        prev.map((region) =>
          region.id === id ? { ...region, checked: !region.checked } : region
        )
      );
    }
    if (category === "country") {
      setSelectedCountries((prev) =>
        prev.map((country) =>
          country.id === id
            ? { ...country, checked: !country.checked }
            : country
        )
      );
    }
    if (category === "segmentation") {
      setSelectedSegmentations((prev) =>
        prev.map((seg) =>
          seg.id === id ? { ...seg, checked: !seg.checked } : seg
        )
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full mb-16 px-24">
        <h2 className="text-[24px] font-roboto-serif text-black leading-[33px] font-medium mb-12 uppercase">
          Select Your Research Criteria
        </h2>
        <div className="flex flex-row justify-between items-start  gap-6">
          <div>
            <h3 className="font-normal font-roboto-serif text-[#666666] text-[18px] leading-[25px] mb-8">
              Regions
            </h3>
            {selectedRegions.map((region) => (
              <div
                key={region.id}
                className="flex items-center mb-2 cursor-pointer"
              >
                <input
                  id={region.id}
                  type="checkbox"
                  checked={region.checked}
                  onChange={() => handleFilterChange(region.id, "region")}
                  className="mr-2"
                />
                <label
                  className="font-roboto font-normal text-black text-[18px] leading-[25px]"
                  htmlFor={region.id}
                >
                  {region.label}
                </label>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-center font-normal font-roboto-serif text-[#666666] text-[18px] leading-[25px] mb-8">
              Countries
            </h3>
            <div className="relative flex flex-row items">
              <input
                type="text"
                placeholder="Search Country"
                className="mb-4 pl-8 bg-white w-full rounded-[7px] border-[3px] border-[#C4C4C4] px-2 py-1 font-roboto-condensed font-normal text-[16px] text-[#AAAAAA] leading-[18px]"
              />
              <div className="w-[13px] h-[17px] absolute left-3 top-[36%] transform -translate-y-1/2">
                <Image
                  src="/icons/search-thin.svg"
                  alt="search"
                  width={13}
                  height={17}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 mt-2">
              {selectedCountries.map((country) => (
                <div
                  key={country.id}
                  className="flex items-center mb-2 cursor-pointer"
                >
                  <input
                    id={country.id}
                    type="checkbox"
                    checked={country.checked}
                    onChange={() => handleFilterChange(country.id, "country")}
                    className="mr-2"
                  />
                  <label
                    className="font-roboto font-normal text-black text-[18px] leading-[25px]"
                    htmlFor={country.id}
                  >
                    {country.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-row items-center justify-center cursor-pointer">
              <span className="underline text-[#0DAFBF] text-[16px] font-semibold font-inter">
                see more
              </span>
              <div className="w-[18px] h-[18px]">
                <Image
                  src="/icons/arrow-drop-down-lightblue.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-normal font-roboto-serif text-[#666666] text-[18px] leading-[25px] mb-8">
              Segmentation
            </h3>
            {selectedSegmentations.map((segmentation) => (
              <div
                key={segmentation.id}
                className="flex items-center mb-2 cursor-pointer"
              >
                <input
                  id={segmentation.id}
                  type="checkbox"
                  checked={segmentation.checked}
                  onChange={() =>
                    handleFilterChange(segmentation.id, "segmentation")
                  }
                  className="mr-2"
                />
                <label
                  className="font-roboto font-normal text-black text-[18px] leading-[25px]"
                  htmlFor={segmentation.id}
                >
                  {segmentation.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-24">
        <div className="bg-[#3B4ACC] px-24 py-16 relative">
          <div className="w-[280px] h-[90px] absolute top-0 right-0">
            <Image
              src={"/images/research-cover.png"}
              alt="cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <p className="font-roboto-serif font-semibold text-white text-[24px] leading-[33px] mb-12">
              SPECIFY YOUR RESEARCH GOALS
            </p>
            <div className="flex flex-row w-full items-center justify-between">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col">
                  <p className="font-roboto-serif font-normal text-[18px] text-[#EAEAEA] leading-[21px]">
                    What are your <span className="font-bold">primary</span>{" "}
                    objectives from this research project?
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    <span className="font-roboto-condensed font-normal text-[16px] leading-[18px] text-[#EAEAEA]">
                      Select all that apply
                    </span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {researchObjective.map((segmentation) => (
                        <div
                          key={segmentation.id}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            id={segmentation.id}
                            type="checkbox"
                            checked={segmentation.checked}
                            onChange={() =>
                              handleFilterChange(
                                segmentation.id,
                                "segmentation"
                              )
                            }
                            className="mr-2"
                          />
                          <label
                            className="font-roboto font-normal text-white text-[18px] leading-[25px]"
                            htmlFor={segmentation.id}
                          >
                            {segmentation.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-roboto-serif font-normal text-[18px] text-[#EAEAEA] leading-[21px]">
                    Research Methodology Preferences
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    <span className="font-roboto-condensed font-normal text-[16px] leading-[18px] text-[#EAEAEA]">
                      Select all that apply
                    </span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {researchObjective.map((segmentation) => (
                        <div
                          key={segmentation.id}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            id={segmentation.id}
                            type="checkbox"
                            checked={segmentation.checked}
                            onChange={() =>
                              handleFilterChange(
                                segmentation.id,
                                "segmentation"
                              )
                            }
                            className="mr-2"
                          />
                          <label
                            className="font-roboto font-normal text-white text-[18px] leading-[25px]"
                            htmlFor={segmentation.id}
                          >
                            {segmentation.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12">
                <div className="flex flex-col">
                  <p className="font-roboto-serif font-normal text-[18px] text-[#EAEAEA] leading-[21px]">
                    What are your{" "}
                    <span className="font-bold">secondary objectives</span> from
                    this research project?
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    <span className="font-roboto-condensed font-normal text-[16px] leading-[18px] text-[#EAEAEA]">
                      Select all that apply
                    </span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {researchObjective.map((segmentation) => (
                        <div
                          key={segmentation.id}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            id={segmentation.id}
                            type="checkbox"
                            checked={segmentation.checked}
                            onChange={() =>
                              handleFilterChange(
                                segmentation.id,
                                "segmentation"
                              )
                            }
                            className="mr-2"
                          />
                          <label
                            className="font-roboto font-normal text-white text-[18px] leading-[25px]"
                            htmlFor={segmentation.id}
                          >
                            {segmentation.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-roboto-serif font-normal text-[18px] text-[#EAEAEA] leading-[21px]">
                    Timeline Preferences
                  </p>
                  <div className="flex flex-col gap-2 mt-5">
                    <span className="font-roboto-condensed font-normal text-[16px] leading-[18px] text-[#EAEAEA]">
                      Select all that apply
                    </span>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {researchObjective.map((segmentation) => (
                        <div
                          key={segmentation.id}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            id={segmentation.id}
                            type="checkbox"
                            checked={segmentation.checked}
                            onChange={() =>
                              handleFilterChange(
                                segmentation.id,
                                "segmentation"
                              )
                            }
                            className="mr-2"
                          />
                          <label
                            className="font-roboto font-normal text-white text-[18px] leading-[25px]"
                            htmlFor={segmentation.id}
                          >
                            {segmentation.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items">
          <div className="w-full px-12 flex flex-col gap-6">
            <div className="flex flex-row items-end justify-between">
              <div className="flex flex-col items-start justify-between mt-6">
                <p className="font-roboto-serif font-light text-[#666666] text-[16px] leading-[18px] w-[90%] mb-2">
                  Verified Market Research is a member of:
                </p>
                <div className="w-[235px] h-[70px]">
                  <Image
                    src={"/images/ESOMAR-2024-logo.png"}
                    alt="esomar"
                    width={235}
                    height={70}
                  />
                </div>
              </div>
              <div className="w-[92px] h-[73px]">
                <Image
                  src={"/images/pci-logo.png"}
                  alt="pci"
                  width={92}
                  height={73}
                />
              </div>
              <div className="w-[184px] h-[70px]">
                <Image
                  src={"/images/secure-payment-logo.png"}
                  alt="secure-payment"
                  width={184}
                  height={70}
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between">
              <div className="w-[122px] h-[104px]">
                <Image
                  src={"/images/iso-logo.png"}
                  alt="iso"
                  width={122}
                  height={104}
                />
              </div>
              <div className="w-[122px] h-[104px]">
                <Image
                  src={"/images/iso-logo-2.png"}
                  alt="iso-2"
                  width={104}
                  height={104}
                />
              </div>
              <div className="w-[180px] h-[70px]">
                <Image
                  src={"/images/digicert-logo.png"}
                  alt="digicert"
                  width={180}
                  height={70}
                />
              </div>
            </div>
          </div>
          <div className="w-full bg-[#3B4ACC] rounded-br-[20px] rounded-bl-[20px] px-16 py-8 flex flex-col justify-end">
            <div className="flex flex-row justify-between border-b border-dotted mb-4">
              <p className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                Base Price
              </p>
              <span className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                $7,550
              </span>
            </div>
            <div className="flex flex-row justify-between border-b border-dotted mb-8">
              <p className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white">
                + Customization
              </p>
              <span className="font-roboto-condensed font-medium text-[24px] leading-[28px] text-white blur-sm">
                $7,550
              </span>
            </div>
            <button className="text-white text-[16px] font-bold font-inter leading-[19px] w-full rounded-5px bg-[#0DAFBF] py-4 shadow-table-content">
              Request Final Price
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-[442px] bg-[#72bf0f] rounded-[10px] mx-24 py-16 bg-cover bg-center flex flex-row"
        style={{ backgroundImage: "url('/images/sales-benefits-cover.png')" }}
      >
        <div className="flex flex-col">
          <p className="font-inter text-white font-extrabold text-[36px] leading-[54px] mb-4 pl-10 w-[70%]">
            BENEFITS OF LICENSE TYPES
          </p>
          <div className="flex flex-col items-start gap-1">
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[24px] leading-[36px]">
                1-Report License
              </p>
            </div>
            <div className="pr-2 pl-10 py-1">
              <p className="text-white font-inter font-normal text-[24px] leading-[36px]">
                Bundled License
              </p>
            </div>
            <div className="bg-white shadow-table-content px-2 py-1 w-full">
              <p className="text-[#71BF0D] font-inter font-semibold text-[24px] leading-[36px] pl-10">
                Consulting License
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-6 pr-10">
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-1 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/tap.svg"}
                alt="tap"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Client-specific Insights
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get segmentation and market analysis insights based on your
              research objectives.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/target-audience.svg"}
                alt="target-audience.svg"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Strategic Competitor Analysis
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get business, operations, financial & customer intel on your
              selected competitors.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center py-6 px-2 shadow-table-content w-[250px] h-[324px] text-center">
            <div className="w-[100px] h-[100px] mb-4">
              <Image
                src={"/icons/help.svg"}
                alt="help"
                width={100}
                height={100}
              />
            </div>
            <p className="text-black text-[20px] leading-[30px] font-normal font-roboto-serif mb-2 mx-6">
              Ongoing Analyst Support
            </p>
            <p className="font-roboto-condensed font-light text-[16px] leading-[24px] text-black">
              Get post-purchase support throughout the duration of the
              consulting project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchFilter;
