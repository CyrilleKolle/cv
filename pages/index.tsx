import React, { useEffect, useState } from "react";
import { FullPageWrapper } from "../components/layout/FullPageWrapper";
import { LeftContent } from "../components/layout/LeftContent";
import { RightContent } from "../components/layout/RightContent";
import { HeaderContent } from "../components/layout/HeaderContent";
import { Divider } from "../components/layout/Divider";
import { ImageContent } from "../components/layout/ImageContent";
import { ContactContent } from "../components/layout/ContactContent";
import { IntroContent } from "../components/layout/IntroContent";
import { SecondContent } from "../components/layout/SecondContent";
import { CompetencyContent } from "../components/layout/CompetencyContent";
import { ReferenceContent } from "../components/layout/ReferenceContent";
import { SvgContent } from "../components/layout/SvgContent";
import { IntroContainer } from "../components/layout/IntroContainer";
import { SegmentContainer } from "../components/layout/SegmentContainer";
import { Footer } from "../components/layout/Footer";
import Modal from "../components/layout/Modal";
import tw from "twin.macro";
import styled from "styled-components";

const Row = styled.div`
  ${tw`flex flex-col`}
  @media only screen and (min-width: 1020px) {
    ${tw`flex-row`}
  }
`;

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;

    if (bottom) {
      setTimeout(() => {
        setIsModalVisible(true);
      }, 400);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FullPageWrapper>
        <HeaderContent
          name={"Cyrille Ngide Kolle"}
          description={"Frontend och backend-utvecklare"}
        />
        <Divider marginTop={false} />
        <Row>
          <LeftContent>
            <IntroContainer>
              <ImageContent />
              <ContactContent
                title="Kontakt"
                email="ngidekollecyrille@gmail.com"
                linkedin="LinkedIn"
                tel="+46(0)737-66 82 28"
                github="Github"
              />
            </IntroContainer>
          </LeftContent>
          <RightContent>
            <Divider largeHiden={false} midHidden={false} />
            <IntroContent
              reference={"Eric Ellersten, Kreativt ansvarig på Itiden:"}
              mainText={"”Han är positiv, intresserad och mycket trevlig”"}
              description={
                "Att bli programmerare är ett av de bästa besluten jag någonsin har tagit. Att ständigt få bli utmanad och hitta nya lösningar, gör att jobbet alltid är spännande. Jag är en ödmjuk och ambitiös kille med väldig stor passion för programmering. Under dem senaste månaderna har jag jobbat som praktikant hos itiden AB, där jag har arbetat med en mängdt olika projekt byggt med react, typescript, javascript, nextjs, för att nämna några. Men har också jobbat agilt och enligt olika design. Jag är även intresserad att lära mig nya språk och tekniker som .Net, laravel, php, python, cms, wordpress, adonis."
              }
            />
            <Divider hidden={false} largeHiden={false} midHidden={false} />
            <SegmentContainer>
              <SecondContent
                title={"Arbetslivserfarenhet"}
                primaryItem1={"Itiden AB (LIA)"}
                primaryItem2={"Dagab"}
                primaryItem3={"Frode Laursen"}
                primaryItem4={"Postnord terminalen"}
                secondaryItem1={"Praktikant"}
                secondaryItem2={"Lagerarbetare"}
                secondaryItem3={"Lagerarbetare"}
                secondaryItem4={"Largerarbetare"}
                tertiaryItem1={"Feb 2021–Jun 2021"}
                tertiaryItem2={"2020–Pågående"}
                tertiaryItem3={"2018–2020"}
                tertiaryItem4={"2018–2019"}
              />
              <Divider hidden={false} largeHiden={false} midHidden={false} />
              <SecondContent
                marginLeft={false}
                maxWidth={false}
                title={"Utbildningar"}
                primaryItem1={"It-Högskolan"}
                primaryItem2={"University of Buea"}
                primaryItem3={"Lycée Bilingue Buea"}
                secondaryItem1={"Applikationsutvecklare"}
                secondaryItem2={"Accounting"}
                secondaryItem3={"Certificate, 2006–2008 "}
                tertiaryItem1={"Göteborg, 2019–2021"}
                tertiaryItem2={"Buea, Cameroon, 2008–2011"}
                tertiaryItem3={"Buea, Cameroon, 2006–2008"}
              />
            </SegmentContainer>

            <Divider />
            <CompetencyContent
              title={"Kompetenser"}
              competencies={[
                "Javascript",
                "Java",
                "React",
                "Responsive Designn",
                "Typescript",
                "Swift",
                "Objective-C",
                "SQL",
                "Figma",
                "Next js",
                "Tailwind",
                "Styled Components",
                "git",
                "Terminal",
                "Android Studio",
                "Xcode",
                "Firebase",
                "HTML",
                "CSS",
                "React Native",
                "Vue.js",
                "Agile methodologies",
                "Scrum",
                "Project Management",
              ]}
            />
            <Divider hidden={false} largeHiden={false} midHidden={false} />
            <SegmentContainer>
              <SecondContent
                title={"Språkkunskaper"}
                primaryItem1={"Engelska"}
                primaryItem2={"Franska"}
                primaryItem3={"Svenska"}
                secondaryItem1={"Skriver: Flytande"}
                secondaryItem2={"Skriver: Väldigt bra"}
                secondaryItem3={"Skriver: Väldigt bra"}
                tertiaryItem1={"Talar: Flytande"}
                tertiaryItem2={"Talar: Flytande"}
                tertiaryItem3={"Talar: Väldigt bra"}
              />
              <Divider hidden={false} largeHiden={false} midHidden={false} />
              <ReferenceContent
                title={"Referenser"}
                description={"Referenser lämnas på begäran"}
              />
            </SegmentContainer>
          </RightContent>
        </Row>
        <SvgContent />
        <Divider bottomMargin={false} marginTop={false} />
        {isModalVisible === true && <Modal />}
        <Footer />
      </FullPageWrapper>
    </>
  );
}
