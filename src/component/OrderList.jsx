import OrderListComp from "../style/OrderListStyle";

const Order = ({ e }) => {
  return (
    <>
      <div className="orderContainer">
        <div className="orderBoder">
          <h3>주문번호 : {e.orderNumber}</h3>
          <div className="orderComp">
            <p className="orderTitle">파트너명</p>
            <p>{e.ptnName}</p>
          </div>
          <div className="orderComp">
            <p className="orderTitle">수선품목</p>
            <p>{e.repairItem}</p>
          </div>
          <div className="orderComp">
            <p className="orderTitle">요청사항</p>
            <p>{e.repairDetail}</p>
          </div>
          <div className="orderComp">
            <p className="orderTitle">수선요청날짜</p>
            <p>{e.requestDate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const OrderList = () => {
  const orderData = [
    {
      orderNumber: "231029101123",
      ptnName: "Attend",
      repairItem: "가방",
      repairDetail: "가죽 복원",
      requestDate: "2023.10.29",
    },
    {
      orderNumber: "231030100024",
      ptnName: "SILK ROAD",
      repairItem: "가방",
      repairDetail: "가죽 복원",
      requestDate: "2023.10.30",
    },
    // {
    //   orderNumber: "231016100010",
    //   ptnName: "SILK ROAD",
    //   repairItem: "지갑",
    //   repairDetail: "가죽 교체",
    //   requestDate: "2023.10.16",
    // },
  ];
  return (
    <>
      <OrderListComp>
        <div className="container">
          <div className="orderHeader">
            <h2>주문현황</h2>
            <img src="" alt="" />
            <div className="orderBox">
              <div className="couponBox">
                {orderData.map((e) => (
                  <Order key={e.orderNumber} e={e} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </OrderListComp>
    </>
  );
};

export default OrderList;
