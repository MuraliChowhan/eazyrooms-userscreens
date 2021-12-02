import React, { Component } from "react";
import {
    Form,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter
} from "reactstrap";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

// import styled from "styled-components";
import MultiStepProgressBar from "./MultiStepProgressBar";
import ProjectLogo from "./ProjectLogo";
import MultiSelectFormHeader from "../MultiSelectForm";
import Header from "../../Header/Header";

class MasterForm extends Component {
    constructor(props) {
        super(props);
        // Set the intiial input values
        this.state = {
            currentStep: 1,
            email: "",
            username: "",
            password: ""
        };

        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);

        // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    // Trigger an alert on form submission
    handleSubmit = event => {
        event.preventDefault();
        const { email, username, password } = this.state;
        alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`);
    };

    // Test current step with ternary
    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep;

        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 3 ? 4 : currentStep + 1;
        this.setState({
            currentStep: currentStep
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep
        });
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;

        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <Button className="previousOutlineBtn px-4" color="float-left" onClick={this._prev}>
                    Previous
                </Button>
            );
        }

        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 4) {
            return (
                <Button className="custom-btn px-4" color="primary float-right" onClick={this._next}>
                    Next
                </Button>
            );
        }
        // ...else render nothing
        return null;
    }

    get submitButton() {
        let currentStep = this.state.currentStep;

        // If the current step is the last step, then render the "submit" button
        if (currentStep > 3) {
            return <Button className="custom-btn px-4" color="primary float-right">Submit</Button>;
        }
        // ...else render nothing
        return null;
    }

    render() {
        return (
            <>

                {/* <div className=" border-bottom pb-3" style={{ marginTop: "5px" }}>
                    <div className="">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 mb-md-0 mb-lg-0">
                                <ProjectLogo />
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 mb-4 mb-md-0 mb-lg-0">
                                <div style={{ marginLeft: "12px", marginRight: "20px" }}>
                                    <MultiStepProgressBar currentStep={this.state.currentStep} />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4">
                                <MultiSelectFormHeader />
                            </div>
                        </div>
                    </div>
                </div> */}
                <Header />
                <div className="container">
                    <Form onSubmit={this.handleSubmit}>
                        <Card className="border-0">
                            <CardBody className="p-0">

                                <CardText />
                                <Step1
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.email}
                                />
                                <Step2
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.username}
                                // nextButton = { thsnextButton }
                                />
                                <Step3
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.password}
                                />
                                <Step4
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    email={this.state.password}
                                />
                            </CardBody>
                            <CardFooter className="bg-transparent border-0">
                                <div className="mt-4 d-flex justify-content-end align-items-center">
                                    <div style={{ marginRight: "10px" }}>
                                        {this.previousButton}
                                    </div>

                                    <div style={{ marginLeft: "10px" }}>
                                        {this.nextButton}
                                        {this.submitButton}
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    </Form>
                </div>
            </>
        );
    }
}

export default MasterForm;
