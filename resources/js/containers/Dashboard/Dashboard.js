import React from 'react'
import './Dashboard.css'

const Dashboard = () => (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Dashboard</div>

                    <div className="card-body">
                        Alert session

                        You are logged in!
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;