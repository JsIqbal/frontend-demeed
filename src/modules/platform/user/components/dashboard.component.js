import DashboardItem from "./dashboard-item.component";

const Dashboard = (props) => {
    return (
        <div className="d-flex flex-wrap justify-content-start">
            <DashboardItem title="Platform" link="/admin/platform" />
            <DashboardItem title="Customer" link="/admin/customer" />
            <DashboardItem title="Shop" link="/admin/shop" />
            <DashboardItem title="Complaint" link="/admin/complaint" />
        </div>
    );
};

export default Dashboard;