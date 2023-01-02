import React from "react";
import { Layout1 } from "../components/body/layout1";
import { Layout2 } from "../components/body/layout2";
import { SimpleSlider } from "../components/body/layout3";
import { Layout4 } from "../components/body/layout4";
import { Layout5 } from "../components/body/layout5/layout5";
import { Layout6 } from "../components/body/layout6/layout6";
import { Footer } from "../components/footer";
import { Menu } from "../components/header/menu";
import { Menu2 } from "../components/header/menu2";

export const MainFrame = () => {
  return (
    <div>
      <div>
        {" "}
        <Menu />
      </div>
      <div>
        {" "}
        <Menu2 />
      </div>
      <div>
        <Layout1 />
      </div>
      <div className="pt-5">
        <Layout2 />
      </div>
      <div>
        <SimpleSlider />
      </div>
      <div>
        <Layout4 />
      </div>
      <div>
        <Layout5 />
      </div>
      <div>
        <Layout6 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
