
import TeamCard from "~/components/common/TeamCard/teamcard";


const ExecutiveTeam = () => {
    return (
        <div className="" style={{ backgroundImage: "url('/images/about-us/background.svg')" }}>
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 pt-20">
                <h3 className="text-center text-[32px] font-[600] text-neutral-600 md:text-[44px] mt-5">
                    The Executive Team
                </h3>

                <p className="text-center text-[16px] leading-[19px] text-neutral-600 md:text-[18px] md:leading-[22px]">
                    Meet Our Exclusive team that have been trained to meet your needs.
                </p>

            <div className=" mx-auto mt-20 flex flex-wrap justify-center xl:justify-between gap-[20px] pb-10">
                <div className=" ">
                    <TeamCard
                        name="John Abraham"
                        imageAlt="john image"
                        imageSrc="/images/about-us/team1.svg"
                        role="Business Developer"
                        description="John is a strategic product manager with a keen eye for market trends."
                        facebookURL="/"
                        twitterURL="/"
                        instagramURL="/"
                    />
                </div>
                <div className=" ">
                    <TeamCard
                        name="Addison Mark"
                        imageAlt="Addison Image"
                        imageSrc="/images/about-us/team2.svg"
                        role="Software Engineer"
                        description="Addison our skilled frontend developer, brings websites to life with clean code."
                        facebookURL="/"
                        twitterURL="/"
                        instagramURL="/"
                    />
                </div>
                <div className=" " data-testid="Joy tony">
                    <TeamCard
                        name="Joy Tony"
                        imageAlt="Joy Image"
                        imageSrc="/images/about-us/team3.svg"
                        role="Product Manager"
                        description="Joy is a passionate product manager driven by user experience."
                        facebookURL="/"
                        twitterURL="/"
                        instagramURL="/"
                    />
                </div>
                <div className=" " data-testid="Joshua Philip">
                    <TeamCard
                        name="Joshua Philip"
                        imageAlt="Joshua Image"
                        imageSrc="/images/about-us/team4.svg"
                        role="Data Analyst"
                        description="Joshua, our data analyst, uses user data to optimize our boilerplates for performance."
                        facebookURL="/"
                        twitterURL="/"
                        instagramURL="/"
                    />
                </div>
            </div>

        </div>
        </div>
    );
};

export default ExecutiveTeam;