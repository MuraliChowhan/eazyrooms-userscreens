import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ApplyCouponModal from "../modals/ApplyCouponModal";
import "../list.css";
import ItemSlider from "./slider/ItemSlider";

const Step1 = props => {
  const [productCount, setProductCount] = useState(0);
  const [itemSliderModal, setItemSliderModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

  const [applyCoupon, setApplyCoupon] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
  if (props.currentStep !== 1) {
    return null;
  }

  const handleIncrement = () => {
    setProductCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setProductCount(prevCount => prevCount - 1);
  };


  return (
    <>
      <div className="container">
        <div className="d-md-flex mb-3 justify-content-between col-md-8 col-lg-8">
          <div className="lists-item-heading">
            My shopping bag asas<span style={{ color: "#000", fontSize: "16px" }}>(1 Item)</span>
          </div>
          <div className="lists-item-heading">
            &#8377; Total : 120
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 mb-3 mb-md-0 mb-lg-0">
            <div className="card" style={{ padding: "10px" }}>
              <div className="media d-md-flex">
                <img className="mr-3 border rounded" width="190px" height="200px" src="./item.jpg" alt="Generic placeholder image"
                  onClick={() => setItemSliderModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
                />
                <div className="media-body w-100" style={{ marginLeft: "12px", marginTop: "20px" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="media-heading" style={{ fontWeight:"bold" }}>Sweet Corn Soup</span>
                    {/* <span className="media-remove cursor-pointer">REMOVE</span> */}
                  </div>
                  <div className="cost-text mb-2">$2</div>
                  <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-between align-items-center bid-plus-minus">
                    <div className="bid-minus cursor-pointer"
                      onClick={handleDecrement}
                    >-</div>
                    <div className="bid-money mt-1 cursor-pointer">
                      {
                        productCount < 0 ? 0 : productCount
                      }
                    </div>
                    <div className="bid-plus cursor-pointer"
                      onClick={handleIncrement}
                    >+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div style={{ padding: "18px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="apply-coupon-text"><i className="fas fa-percent "></i> Apply Coupon</div>
                  <div className="apply-coupon-btn"
                    onClick={() => setApplyCoupon({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}

                  >Apply</div>
                </div>
              </div>
              <div className="border-top" style={{ padding: "18px" }}>
                <div className="d-flex mb-2 justify-content-between">
                  <span className="item-heading">
                    Item Total
                  </span>
                  <span className="item-cost">
                    $3
                  </span>

                </div>
                <div className="d-flex mb-2 justify-content-between">
                  <span className="item-heading">
                    Delivery Free
                    <div style={{ color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>Free delivery above <span style={{ color: "#000", fontWeight: "500" }}>	&#8377;50</span> </div>
                  </span>
                  <span className="item-cost">
                    $3
                  </span>
                </div>
              </div>
              <div className="border-top" style={{ padding: "18px" }}>
                <div className="d-flex justify-content-between">
                  <div className="items-total">Grand Total
                    <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Inclusive of all taxes</div>
                  </div>
                  <div className="items-total">&#8377; 120</div>
                </div>
              </div>
              <div className="border-top" style={{ padding: "18px" }}>
                <div className="d-flex justify-content-between">
                  <div className="items-total">
                    <div style={{ color: "#808080", fontWeight: "400", fontSize: "14px" }}>Average delivery time
                    </div>
                  </div>
                  <div className="items-total">5-10 days</div>
                </div>
              </div>

              {/* <div className="card-footer bg-transparent">
                <div className="custom-btn">Select Address</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <ItemSlider
        show={itemSliderModal.modal}
        onHide={() => setItemSliderModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
        params={itemSliderModal}
      />

      <ApplyCouponModal
        show={applyCoupon.modal}
        onHide={() => setApplyCoupon({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
        params={applyCoupon}
      />
    </>
  );
};

export default Step1;
