import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class SlackToast extends Component {
    notify = () => toast.success(' New Slack Submission!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
        });

    render() {
        return (
            <div>
                <h3 className="white-text">There is a Slack Button below</h3>
                <button onClick={this.notify}>Notify !</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            </div>
        );
    }
}

export default SlackToast