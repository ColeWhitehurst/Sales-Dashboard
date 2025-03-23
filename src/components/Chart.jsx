import Grid from "@mui/material/Grid2";
import { ScatterChart } from '@mui/x-charts';
import { mockTransactions } from "../data/mockData";
import { parseISO } from 'date-fns';

const Chart = () => {
    const items = mockTransactions;

    const parsedItems = items.map((item) => ({
        ...item,
        date: parseISO(item.date)
    }))


    const chartSetting = {
        yAxis: [
        {
            label: 'cost',
        },
        ],
        xAxis: [{
            dataKey: 'date',
            type: "number",
            scale: "time",
            tickFormatter: (date) => date.toLocaleDateString(),
            domain: ["auto", "auto"]
        }],
        height: 400,
    };

    return ( 
        <Grid size={7} className="smallGrid">
            <ScatterChart
                {...chartSetting}
                dataset={parsedItems}
                series={[
                    { datasetKeys: { id: 'txId', x: 'date', y: 'cost' }, label: 'Transactions' },
                ]}
                />
        </Grid>
     );
}
 
export default Chart;