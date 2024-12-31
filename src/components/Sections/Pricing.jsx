import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nos Programmes</h1>
            <p className="font13">
              Explorez nos différents programmes conçus pour répondre à vos besoins professionnels et personnels.
              <br />
              Apprenez, développez et excellez avec nos formations de qualité.
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$29,99/mo"
                title="Initiation"
                text="Approfondissez vos connaissances de base avec notre programme d'introduction."
                offers={[
                  { name: "Accès au contenu", cheked: true },
                  { name: "Support communautaire", cheked: true },
                  { name: "Exercices pratiques", cheked: false },
                  { name: "Certificat d'achèvement", cheked: false },
                  { name: "Ressources supplémentaires", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$49,99/mo"
                title="Avancé"
                text="Progressez avec des cours approfondis et des ressources supplémentaires."
                offers={[
                  { name: "Accès au contenu", cheked: true },
                  { name: "Support prioritaire", cheked: true },
                  { name: "Exercices pratiques", cheked: true },
                  { name: "Certificat d'achèvement", cheked: true },
                  { name: "Ressources supplémentaires", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Expert"
                text="Devenez un expert grâce à un apprentissage avancé et des projets pratiques."
                offers={[
                  { name: "Accès à tous les contenus", cheked: true },
                  { name: "Support dédié", cheked: true },
                  { name: "Exercices pratiques", cheked: true },
                  { name: "Certificat professionnel", cheked: true },
                  { name: "Ressources supplémentaires", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}




const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




