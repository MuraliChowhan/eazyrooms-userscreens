import './dashboard.css';
function QuickLinks() {
   
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <div className="normal-text text-dark">Quick Links</div>

                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <button className="btn normal-text outline-buttons">
                        <i className="fas fa-calendar-alt"></i> Client Schedule
                    </button>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <button className="btn normal-text outline-buttons">
                        <i className="far fa-plus-square"></i> Add Lead
                    </button>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <button className="btn normal-text outline-buttons">
                        <i className="far fa-plus-square"></i> Add Task
                    </button>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <button className="btn normal-text outline-buttons">
                        <i className="fas fa-money-check-alt"></i> Payments
                    </button>
                </div>
                <div className="col-sm-12 col-md-2 col-lg-2">
                    <button className="btn normal-text outline-buttons">
                        <i className="far fa-calendar-check"></i> Appointments
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuickLinks;
