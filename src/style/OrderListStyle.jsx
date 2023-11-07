import styled from "styled-components";

const OrderListComp = styled.div`
  width: 100%;
  /* background-color: var(--IVORY); */

  .container {
    padding: 50px 0;
    .orderHeader {
      .orderBox {
        .couponBox {
          /* display: flex; */
          width: auto;
          .orderContainer {
            /* display: flex; */
            .orderBoder {
              background-color: var(--DARKBLUE);
              border-radius: 15px;
              font-size: 1.4em;
              padding: 0 0 5% 0;
              margin: 30px 0 50px 0;
              h3 {
                /* position: absolute; */
                /* background-color: gray; */
                width: 80%;
                color: white;
                font-weight: 600;
                padding-bottom: 5%;
              }
              .orderComp {
                font-size: 1.1em;
                padding: 10px 40%;
                display: flex;
                margin-bottom: 30px;
                color: white;

                .orderTitle {
                  /* background-color: red; */
                  outline: 1px solid black;
                  color: white;
                  width: 1000px;
                  font-weight: 600;
                  width: 600px;
                  white-space: nowrap;
                }
                p {
                  width: 500px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default OrderListComp;
