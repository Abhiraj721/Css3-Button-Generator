import "./App.css";
import Button from "./components/Button";
import covertfromCamelcase from "./components/CamelCase";
import Inputs from "./components/Inputs";
import { useState,useEffect } from "react";
import Fonttext from "./components/InputSections/Font&text";
import Background from "./components/InputSections/Background";
import Border from "./components/InputSections/Border";
import Box from "./components/InputSections/Box";
import Hover from "./components/InputSections/Hover";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  
  const [btntext, Setbtntext] = useState("Button");
  const [fontfamily, Setfontfamily] = useState("Lucida sans unicode");
  const [fontcolor, Setfontcolor] = useState("#FFFFFF");
  const [fontsize, Setfontsize] = useState(20);
  const [textshadowcolor, Settextshadowcolor] = useState("#666666");
  const [toggletextshadow, Settoggletextshadow] = useState(true);
  const [xtextshadow, Setxtextshadow] = useState(1);
  const [ytextshadow, Setytextshadow] = useState(1);
  const [blurtextshadow, Setblurtextshadow] = useState(3);

  //section3
  const [borderRadius, SetBorderRadius] = useState(28);
  const [borderColor, SetBorderColor] = useState("#1f628d");
  const [borderStyle, SetBorderStyle] = useState("solid");
  const [borderWidth, SetBorderWidth] = useState(2);
  //section2
  const [boxShadowColor, setBoxShadowColor] = useState("#1A9CFF");
  const [boxShadowX, setBoxShadowX] = useState(0);
  const [boxShadowY, setBoxShadowY] = useState(0);
  const [boxShadowBlur, setBoxShadowBlur] = useState(0);
  const [togglepadding, Settogglepadding] = useState(true);
  const [padding, setPadding] = useState(3);
  const [paddingTop, setPaddingTop] = useState(3);
  const [paddingRight, setPaddingRight] = useState(25);
  const [paddingLeft, setPaddingLeft] = useState(25);
  const [paddingBottom, setPaddingBottom] = useState(5);
  const str = "{}";
  //section4
  const [startcolor, Setstartcolor] = useState("#3D97DB");
  const [endcolor, Setendcolor] = useState("#23B3FB");
  const [backcolor, Setbackcolor] = useState("#3498db");
  const [backtheme, Setbacktheme] = useState("gradiant");

  //section5
  const [starthovercolor, Setstarthovercolor] = useState("#38AFFF");
  const [endhovercolor, Setendhovercolor] = useState("#078BE4");
  const [backhovercolor, Setbackhovercolor] = useState("#36AAF7");
  const [backhovertheme, Setbackhovertheme] = useState("gradiant");
  const styleforButton = {
    ...(backtheme === "gradiant" && {
      background: startcolor,
      backgroundImage: `linear-gradient(to bottom, ${startcolor}, ${endcolor})`,
    }),
    ...(backtheme === "solid" && {
      background: backcolor,
    }),
    ...(toggletextshadow === false && {
      textShadow:
      "" +
      xtextshadow +
      "px " +
      ytextshadow +
      "px " +
      blurtextshadow +
      "px " +
      textshadowcolor +
      "",
    }),

    borderRadius: borderRadius + "px",
    fontFamily: fontfamily,
    
    boxShadow:
      "" +
      boxShadowX +
      "px " +
      boxShadowY +
      "px " +
      boxShadowBlur +
      "px " +
      boxShadowColor +
      "",
    color: fontcolor,
    fontSize: fontsize + "px",
    border: "" + borderStyle + " " + borderColor + " " + borderWidth + "px",
    padding: togglepadding
      ? `${paddingTop}px ${paddingLeft}px ${paddingBottom}px ${paddingRight}px`
      : `${padding}px`,

    textDecoration: "none",
  };
  const hoverstyles = {
    btnHover: {
      ...(backhovertheme === "gradiant" && {
        background: starthovercolor,
        backgroundImage:
          "linear-gradient(to bottom, " +
          starthovercolor +
          ", " +
          endhovercolor +
          ")",
        textDecoration: "none",
      }),
      ...(backhovertheme === "solid" && {
        background: backhovercolor,
      }),
    },
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <styleforButton startcolor={startcolor} />
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          
          <Button
            btntext={btntext}
            styleforButton={styleforButton}
            hoverstyles={hoverstyles}
          ></Button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <Inputs title="+Font/Text">
            <Fonttext
              btntext={btntext}
              Setbtntext={Setbtntext}
              fontFamily={fontfamily}
              Setfontfamily={Setfontfamily}
              fontcolor={fontcolor}
              Setfontcolor={Setfontcolor}
              fontsize={fontsize}
              Setfontsize={Setfontsize}
              toggletextshadow={toggletextshadow}
              Settoggletextshadow={Settoggletextshadow}
              textshadowcolor={textshadowcolor}
              Settextshadowcolor={Settextshadowcolor}
              xtextshadow={xtextshadow}
              Setxtextshadow={Setxtextshadow}
              ytextshadow={ytextshadow}
              Setytextshadow={Setytextshadow}
              blurtextshadow={blurtextshadow}
              Setblurtextshadow={Setblurtextshadow}
            ></Fonttext>
          </Inputs>
          <Inputs title="+Box">
            <Box
              boxShadowColor={boxShadowColor}
              setBoxShadowColor={setBoxShadowColor}
              boxShadowX={boxShadowX}
              setBoxShadowX={setBoxShadowX}
              boxShadowY={boxShadowY}
              setBoxShadowY={setBoxShadowY}
              boxShadowBlur={boxShadowBlur}
              setBoxShadowBlur={setBoxShadowBlur}
              togglepadding={togglepadding}
              Settogglepadding={Settogglepadding}
              padding={padding}
              setPadding={setPadding}
              paddingTop={paddingTop}
              setPaddingTop={setPaddingTop}
              paddingRight={paddingRight}
              setPaddingRight={setPaddingRight}
              paddingBottom={paddingBottom}
              setPaddingBottom={setPaddingBottom}
              paddingLeft={paddingLeft}
              setPaddingLeft={setPaddingLeft}
            />
          </Inputs>
          <Inputs title="+Border">
            <Border
              borderRadius={borderRadius}
              SetBorderRadius={SetBorderRadius}
              borderColor={borderColor}
              SetBorderColor={SetBorderColor}
              borderStyle={borderStyle}
              SetBorderStyle={SetBorderStyle}
              borderWidth={borderWidth}
              SetBorderWidth={SetBorderWidth}
            ></Border>
          </Inputs>

          <Inputs title="+Background">
            <Background
              startcolor={startcolor}
              Setstartcolor={Setstartcolor}
              endcolor={endcolor}
              Setendcolor={Setendcolor}
              backcolor={backcolor}
              Setbackcolor={Setbackcolor}
              backtheme={backtheme}
              Setbacktheme={Setbacktheme}
            ></Background>
          </Inputs>
          <Inputs title={"+Hover"}>
            <Background
              startcolor={starthovercolor}
              Setstartcolor={Setstarthovercolor}
              endcolor={endhovercolor}
              Setendcolor={Setendhovercolor}
              backcolor={backhovercolor}
              Setbackcolor={Setbackhovercolor}
              backtheme={backhovertheme}
              Setbacktheme={Setbackhovertheme}
            ></Background>
          </Inputs>
        </div>
      </div>
      <h3 style={{textAlign:"left",marginLeft:"12px"}}>Copy the code </h3>
      <div className="code">
            <p>.btn {str[0]}</p>
            {Object.entries(styleforButton).map(([key, val]) => (
              <p key={key}>
                {covertfromCamelcase(key)} : {val};
              </p>
            ))}
            <p>{str[1]}</p>
            <br />
            <p>.btn:hover {str[0]}</p>
            {Object.entries(hoverstyles.btnHover).map(([key, val]) => (
              <p key={key}>
                {covertfromCamelcase(key)} : {val};
              </p>
            ))}
            <p>{str[1]}</p>

      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
