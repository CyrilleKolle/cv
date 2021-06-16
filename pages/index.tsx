import React, { useEffect, useState } from "react";
import TheLeftContent from "../components/layout/TheLeftContent";
import TheRightContent from "../components/layout/TheRightContent";
import TheHeader from "../components/layout/TheHeader";
import Seperator from "../components/layout/Seperator";
import TheImage from "../components/layout/TheImage";
import ContactsContent from "../components/layout/ContactsContent";
import TheIntroContent from "../components/layout/TheIntroContent";
import TheSecondContent from "../components/layout/TheSecondContent";
import CompetencyContent from "../components/layout/CompetencyContent";
import TheReference from "../components/layout/TheReference";
import TheSvgContent from "../components/layout/TheSvgContent";
import TheIntroContainer from "../components/layout/TheIntroContainer";
import Segments from "../components/layout/Segments";
import TheFooter from "../components/layout/TheFooter";
import ThePageContent from "../components/layout/ThePageContent";
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
      <ThePageContent>
        <TheHeader
          name={"Cyrille Ngide Kolle"}
          description={"Frontend och backend-utvecklare"}
        />
        <Seperator marginTop={false} />
        <Row>
          <TheLeftContent>
            <TheIntroContainer>
              <TheImage />
              <ContactsContent
                title="Kontakt"
                email="ngidekollecyrille@gmail.com"
                linkedin="LinkedIn"
                tel="+46(0)737-66 82 28"
                github="Github"
              />
            </TheIntroContainer>
          </TheLeftContent>
          <TheRightContent>
            <Seperator largeHiden={false} midHidden={false} />
            <TheIntroContent
              reference={"Eric Ellersten, Kreativt ansvarig på Itiden:"}
              mainText={"”Han är positiv, intresserad och mycket trevlig”"}
              description={
                "Att bli programmerare är ett av de bästa besluten jag någonsin har tagit. Att ständigt få bli utmanad och hitta nya lösningar, gör att jobbet alltid är spännande. Jag är en ödmjuk och ambitiös kille med väldig stor passion för programmering. Under dem senaste månaderna har jag jobbat som praktikant hos itiden AB, där jag har arbetat med en mängdt olika projekt byggt med react, typescript, javascript, nextjs, för att nämna några. Men har också jobbat agilt och enligt olika design. Jag är även intresserad att lära mig nya språk och tekniker som .Net, laravel, php, python, cms, wordpress, adonis."
              }
            />
            <Seperator hidden={false} largeHiden={false} midHidden={false} />
            <Segments>
              <TheSecondContent
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
              <Seperator hidden={false} largeHiden={false} midHidden={false} />
              <TheSecondContent
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
            </Segments>

            <Seperator />
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
            <Seperator hidden={false} largeHiden={false} midHidden={false} />
            <Segments>
              <TheSecondContent
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
              <Seperator hidden={false} largeHiden={false} midHidden={false} />
              <TheReference
                title={"Referenser"}
                description={"Referenser lämnas på begäran"}
              />
            </Segments>
          </TheRightContent>
        </Row>
        <TheSvgContent />
        <Seperator bottomMargin={false} marginTop={false} />
        {isModalVisible === true && <Modal />}
        <TheFooter />
      </ThePageContent>
    </>
  );
}
