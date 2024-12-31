import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nos Histoires Inspirantes</h1>
            <p className="font13">
              Découvrez des récits captivants et des expériences enrichissantes qui vous inspireront à atteindre vos objectifs.
              <br />
              Plongez dans des histoires de transformation et d'innovation.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Nouveau Chapitre !"
                text="Découvrez comment nous avons inauguré une nouvelle ère pour notre entreprise."
                tag="entreprise"
                author="Jean Dupont, il y a 2 jours"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Histoires de Succès"
                text="Lisez les témoignages de ceux qui ont atteint de nouveaux sommets grâce à nos programmes."
                tag="succès"
                author="Marie Curie, il y a 3 jours"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Innovation et Créativité"
                text="Comment nous repoussons les limites de l'innovation pour un avenir meilleur."
                tag="innovation"
                author="Albert Einstein, il y a 5 jours"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Collaboration Gagnante"
                text="Découvrez comment nos partenariats ont transformé des défis en opportunités."
                tag="collaboration"
                author="Isaac Newton, il y a 6 jours"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Développement Personnel"
                text="Explorez les outils et techniques pour atteindre votre plein potentiel."
                tag="développement"
                author="Simone de Beauvoir, il y a 1 semaine"
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Impact Positif"
                text="Apprenez comment nos actions créent un impact durable sur la société."
                tag="impact"
                author="Martin Luther King, il y a 2 semaines"
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Charger Plus" action={() => alert("clicked")} />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ce Qu'ils Disent</h1>
            <p className="font13">
              Laissez-vous inspirer par les retours et témoignages de nos participants.
              <br />
              Vos histoires sont au cœur de notre mission.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;