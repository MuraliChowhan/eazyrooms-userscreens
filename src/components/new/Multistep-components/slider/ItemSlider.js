import React from "react";
import { Modal, Button, Carousel } from 'react-bootstrap';
import './modelSlider.css';

function ItemSlider(props) {
    const {
        setLastReasonModal,
        params
    } = props;

    const slider = [
        {
            name: "Chicken",
            subItem: "Rice",
            img: "./food5.jpg",
            qnty: "1",
            price: "200",
            itemName: "Chicken pualo"
        },
        {
            name: "Mutton",
            subItem: "Rice",
            img: "./food6.jpg",
            qnty: "2",
            price: "250",
            itemName: "Mutton pualo"
        },
        // {
        //     name: "Fish",
        //     subItem: "Rice",
        //     img: "./1.jpg"
        // }
    ]
    return (
        <>
            <div className="custom-bid-modal-height">
                <Modal className="custom-modl"
                    {...props}
                    size="lg"
                    keyboard={false} >
                    <Modal.Header style={{ marginLeft: "3px" }} className="border-0 pb-0 bg-transparent close-modal h5 mb-0 p-3" closeButton>
                        <div style={{ fontSize: "18px", lineHeight: "26px", fontWeight: "500" }}>
                            Details
                        </div>
                    </Modal.Header>
                    <Modal.Body className="p-2">
                        <form>
                            <Carousel>
                                {
                                    slider.map((item, index) =>
                                        <Carousel.Item key={index}>
                                            <img
                                                width="40px"
                                                height="500px"
                                                className="d-block p-3 w-100 custom-img-properties"
                                                src={item.img}
                                                alt="First slide"
                                            />
                                            <Carousel.Caption style={{ marginTop: "30px" }}>
                                                <h3>{item.name} {item.subItem} </h3>
                                                {/* <p></p> */}
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )
                                }
                            </Carousel>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default ItemSlider;
