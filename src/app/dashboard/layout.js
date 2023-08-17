export const metadata = {
    title: 'Dashboard | PicxaBee',
    description: 'Generated by create next app',
  }

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div>
                <h2>Navbar</h2>
            </div>
            {children}
            <div>
                <h1>Footer</h1>
            </div>
        </div>
    );
};

export default DashboardLayout;