import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import UserStore from "./context/UserStore";
import Header from "./pages/Header";
import Footer from "./component/Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --DARKBLUE : #4682A9;
    --MIDBLUE : #749BC2;
    --LIGHTBLUE : #91C8E4;
    --IVORY : #F6F4EB;
    --GREY : #E0E4E9;
  }

  * {
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    font-family: 'Noto Sans KR', sans-serif;
  }
  h2 {
    font-size: 2.4em;
  }
  h3 {
    font-size: 1.6em;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  @media only screen and (max-width:768px) {
    body {
      font-size: 14px;
    }
    h2 {
      font-size: 2em;
    }
    .container {
      width: 90vw;
    }
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Header />}></Route>
          </Routes>
        </Router>
        <Footer />
      </UserStore>
    </>
  );
}

export default App;
