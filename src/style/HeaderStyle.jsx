import { styled } from "styled-components";

const HeaderComp = styled.header`
  width: 100vw;
  height: 80px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  border: 1px solid #ccc;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    //모바일 메뉴
    .m-menu {
      display: none;
      cursor: pointer;
    }
    //로고
    .logo {
      height: 100%;
      display: flex;
      flex-grow: 1;
      align-items: center;

      img {
        height: 80%;
      }
    }
    //메뉴
    nav {
      text-align: center;
      height: 100%;
      flex-grow: 2;
      .menu {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        > li {
          height: 100%;
          flex-grow: 1;
          position: relative;
          font-size: 1.6em;
          font-weight: 600;
          padding: 10px 20px;
          cursor: pointer;
          .m-title {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            cursor: pointer;
            transition: 0.2s ease-in;
          }
          .sub-menu {
            width: 100%;

            height: 0;
            overflow: hidden;

            position: absolute;
            top: 100%;
            left: 0;

            border-radius: 0 0 10px 10px;

            li {
              padding: 20px 0;
              background-color: var(--GREY);
              font-size: 1.3rem;
              font-weight: 400;
              color: #333;
              transition: 0.2s ease-in;
              &:hover {
                background-color: var(--MIDBLUE);
                color: white;
              }
            }
          }
          &:hover {
            color: var(--DARKBLUE);
            .m-title {
              color: var(--DARKBLUE);
            }
            .sub-menu {
              height: auto;
            }
          }
        }
      }
    }
    //로그인아이콘
    .log-icon {
      flex-grow: 1;
      display: flex;
      justify-content: right;
      font-size: 30px;
      svg {
        padding: 10px 10px;
        color: var(--GREY);
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          color: var(--LIGHTBLUE);
        }
      }
    }
    @media only screen and (max-width: 768px) {
      justify-content: space-between;
      height: 80px;
      .m-menu {
        display: block;
        flex-grow: 0;
        font-size: 40px;
      }

      nav {
        width: 100vw;
        height: calc(100vh - 80px);
        padding-bottom: 40px;
        position: absolute;
        top: 80px;
        left: -150%;
        background-color: var(--IVORY);
        overflow-y: scroll;
        transition: 0.5s ease-in;

        &.active {
          left: -1px;
        }
        .menu {
          height: auto;
          display: block;
          > li {
            padding: 0 20px;
            position: static;
            .m-title {
              padding: 20px 0;
              background-color: var(--IVORY);
            }
            .sub-menu {
              height: auto;
              position: static;
              border-radius: 0;
            }
          }
        }
      }
      .logo {
        display: flex;
        justify-content: center;
      }
      .log-icon {
        flex-grow: 0;
      }
    }
  }
`;
export default HeaderComp;
