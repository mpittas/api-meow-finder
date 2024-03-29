import React from "react";
import { Lora } from "next/font/google";
import { Breed } from "@/types/Breed";
import ExternalLink from "@/components/widgets/ExternalLink";
import IconBox from "@/components/widgets/IconBox";
import BadgeRounded from "@/components/widgets/BadgeRounded";
import CounterView from "@/components/widgets/CounterView";

const lora = Lora({ subsets: ["latin"] });

type BreedsContentProps = {
  breed: Breed;
};

const BreedsContent: React.FC<BreedsContentProps> = ({ breed }) => {
  const temperamentArray = breed.temperament.split(", ");

  return (
    <div className="breed-cnt">
      <div>
        <div className="flex gap-2 flex-wrap pb-5">
          {temperamentArray.map((temperament, index) => (
            <BadgeRounded key={index} text={temperament} />
          ))}
        </div>
        <h1 className={`${lora.className} text-4xl md:text-6xl pb-5`}>
          {breed.name}
        </h1>
        <div className="text-sm md:text-md text-gray-700 pb-6">
          {breed.description}
        </div>

        <div className="flex gap-x-2 flex-wrap">
          <ExternalLink href={breed.wikipedia_url} text="Wikipedia" />
          <ExternalLink href={breed.vetstreet_url} text="Vetstreet" />
          <ExternalLink href={breed.vcahospitals_url} text="VCA Hospitals" />
        </div>
      </div>

      <div className="h-[1px] w-full bg-slate-200 my-12"></div>

      <div className="pb-14">
        <h2 className="text-xs font-semibold pb-5 text-slate-400 uppercase">
          Characteristics
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <IconBox title="Origin" subtitle={breed.origin} />
          </div>
          <div>
            <IconBox
              title="Lifespan"
              subtitle={`${breed.life_span} years`}
              image={"/heart-icon.svg"}
            />
          </div>
          <div>
            <IconBox
              title="Weight"
              subtitle={`${breed.weight.metric} kg`}
              image={"/phone-icon.svg"}
            />
          </div>
        </div>
      </div>

      <div className="pb-14">
        <h2 className="text-xs font-semibold pb-5 text-slate-400 uppercase">
          Key Characteristics
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-14 gap-y-10">
          <CounterView count={breed.adaptability} title="Adaptability" />
          <CounterView count={breed.intelligence} title="Intelligence" />
          <CounterView count={breed.affection_level} title="Affection level" />
          <CounterView count={breed.child_friendly} title="Child friendly" />
          <CounterView count={breed.dog_friendly} title="Dog friendly" />
          <CounterView
            count={breed.stranger_friendly}
            title="Stranger friendly"
          />
          <CounterView count={breed.energy_level} title="Energy level" />
          <CounterView count={breed.grooming} title="Grooming" />
          <CounterView count={breed.health_issues} title="Health issues" />
          <CounterView count={breed.shedding_level} title="Shedding level" />
          <CounterView count={breed.social_needs} title="Social needs" />
          <CounterView count={breed.vocalisation} title="Vocalisation" />
        </div>
      </div>
    </div>
  );
};

export default BreedsContent;
