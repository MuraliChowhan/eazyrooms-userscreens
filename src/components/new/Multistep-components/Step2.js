import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";
import ProfileAccountModal from "../../modals/ProfileAccountModal";
const Step2 = (props) => {
  const [lastReasonModal, setLastReasonModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });
  const { nextButton } = props;
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="d-flex justify-content-between align--items-center mt-3 mb-3">
              <div style={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px" }}>Fill Delivery Information</div>
              <div className="already-user"
                onClick={() => setLastReasonModal({ modal: true, action: 'Edit', modalType: 'Edit', details: '' })}
              >Already a user? Sing In</div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                <label className="lableNames mb-2">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                <div className="form-group">
                  <label className="lableNames mb-2">Mobile Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-transparent">
                        +91
                      </div>
                    </div>
                    <input type="text" className="form-control phone-number" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                <label className="lableNames mb-2">Pincode</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
                <div className="form-group">
                  <label className="lableNames mb-2">City</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <label className="lableNames mb-2">Address</label>
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card custom-margin-top">
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
      </div>

      <ProfileAccountModal
        show={lastReasonModal.modal}
        onHide={() => setLastReasonModal({ modal: false, action: "Edit Property Details", modalType: 'Edit Property Details', type: 'Edit Property Details', details: {} })}
        params={lastReasonModal}
      />
    </>
  );
};

export default Step2;
