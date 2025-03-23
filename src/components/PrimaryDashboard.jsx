import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import Heading from './Heading';
import Sidebar from './Sidebar';
import TransactionBar from './TransactionBar';
import Chart from './Chart';
import { mockTransactions } from '../data/mockData';

const PrimaryDashboard = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const menuItems = ['Home', 'About', 'Services', 'Contact'];
    
      const handleSidebarOpen = () => {
        setIsSidebarOpen(true);
      };
    
      const handleSidebarClose = () => {
        setIsSidebarOpen(false);
      };

    return ( 
        <div className="dashboard">
            <Heading />
            <Grid container spacing={2} sx={{
                justifyContent: "flex-start"
            }}>
                <Chart />
                <TransactionBar />  
            </Grid>
        </div>
     );
}

export default PrimaryDashboard;
