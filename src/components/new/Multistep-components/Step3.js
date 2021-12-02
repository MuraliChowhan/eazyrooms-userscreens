import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <div className="row" style={{ marginTop: "25px" }}>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <FormGroup>
            <Label style={{ fontSize: "16px", fontWeight: "500", marginBottom: "8px" }} for="password">Fill Additional Information</Label>
            <Input
              type="text"
              name="infp"
              id="password"
              placeholder="Enter text here"
              value={props.password} // Prop: The username input data
              onChange={props.handleChange} // Prop: Puts data into the state
            />
          </FormGroup>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 offset-md-4 offset-lg-4">
          <div className="card" style={{ marginTop: "8px" }}>
            {/* <div style={{ padding: "10px" }}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="apply-coupon-text"><i className="fas fa-percent "></i> Apply Coupon</div>
                  <div className="apply-coupon-btn">Apply</div>
                </div>
              </div> */}
            <div style={{ padding: "18px" }}>
              <div className="d-flex mb-1 justify-content-between">
                <span className="item-heading">
                  Item Total
                </span>
                <span className="item-cost">
                  $3
                </span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="item-heading">
                  Delivery Free
                  <div style={{ marginTop: "3px", color: "#808080", fontSize: "13px", lineHeight: "16px", fontWeight: "400" }}>Free delivery above <span style={{ color: "#000", fontWeight: "500" }}>	&#8377;50</span> </div>
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
                <div className="custom-btn">Continue</div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
