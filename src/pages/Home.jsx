// Home.js
import React from "react";
import Box from "../components/Box";
import Footer from "../components/Footer";
// import firstimg from "../assets/images/bachground-img1.png";
// import secondimg from "../assets/images/background-img2.png";
import Navbar from "../components/Navbar";
import VisualWebAppSs from "../components/Home/VisualWebAppSs.jsx";
import VisualFeature from "../components/Home/VisualFeature.jsx";
import VisualCodebase from "../components/Home/VisualCodebase.jsx";
import VisualUITools from "../components/Home/VisualUITools.jsx";
import VisualIntegrations from "../components/Home/VisualIntegrations.jsx";
import VisualTestimonial from "../components/Home/VisualTestimonial.jsx";
import VisualCommunity from "../components/Home/VisualCommunity.jsx";
import VisualCommunityHead from "../components/Home/VisualCommunityHead.jsx";
import HighlightedCode from "../components/Home/HighlightedCode.jsx";
import VisualHome from "../components/Home/VisualHome.jsx";
// import CardList from "../components/Home/CardList.jsx";

const carddata = [
  {
    id: 1,
    title: "GitHub",
    description: "GitHub Repo"
  },
  {
    id: 2,
    title: "DisCord",
    description: "Discord Server"
  },
  {
    id: 3,
    title: "Twitter",
    description: "Twitter.....",
  },
];

const Home = () => {
  return (
    <div>
      <Box>
        {/* VisualHome start */}
        <VisualHome />
        {/* <StickyHeader /> */}
        {/* VisualHome end */}
        {/* VisualWebAppSs start */}
        {/* <VisualWebAppSs firstimg={firstimg} secondimg={secondimg} /> */}
        {/* VisualWebAppSs end */}
        {/* VisualFeature start */}
        <VisualFeature />
        {/* VisualFeature end */}
        {/* VisualCodebase start */}
        {/* <VisualCodebase /> */}
        {/* VisualCodebase end */}
        {/* VisualUITools start */}
        <VisualUITools />
        {/* VisualUITools end */}
        {/* VisualIntegrations start */}
        <VisualIntegrations />
        {/* VisualIntegrations end */}
        {/* VisualTestimonial start */}
        <VisualTestimonial />
        {/* VisualTestimonial end */}
        {/* VisualCommunity start */}
        {/* <VisualCommunity /> */}
        <VisualCommunityHead />
        <div className="community-card">{carddata.map((card) => (
        <VisualCommunity
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}</div>
        {/* VisualCommunity end */}
        {/* <HighlightedCode /> */}
      </Box>
    </div>
  );
};

export default Home;
