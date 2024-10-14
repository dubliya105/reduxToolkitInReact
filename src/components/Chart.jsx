import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { ResponsiveContainer,LineChart,Line,XAxis,YAxis, Pie, BarChart, PieChart, Cell, Tooltip, Bar, CartesianGrid, Legend, PolarRadiusAxis, PolarGrid, PolarAngleAxis, RadarChart, Radar } from 'recharts';
function Chart() {
    const [statedata,setStateData]=useState([]);
    const getdata=async()=>{
    const result= await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    console.log(result.data.data);
    
    setStateData(result.data.data);
    
}
const pdata= [
    { name: 'js', students: 400 },
    { name: 'MERN', students:700 },
    { name: 'c&c++', students: 200 },
    { name: 'others', students:600}
];
const pdata1     = [
    {
        name: "MongoDb",
        student: 11,
        fees: 3,
    },
    {
        name: "Javascript",
        student: 15,
        fees: 12,
    },
    {
        name: "PHP",
        student: 5,
        fees: 10,
    },
    {
        name: "Java",
        student: 10,
        fees: 5,
    },
    {
        name: "C#",
        student: 9,
        fees: 4,
    },
    {
        name: "C++",
        student: 10,
        fees: 8,
    },
];
 
useEffect(()=>{
    getdata()
},[]);
const [activeIndex, setActiveIndex] = useState(-1);
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const onPieEnter = (_, index) => {
//     setActiveIndex(index);
// };
  return (
    <div className='pt-5'>
            <ResponsiveContainer width={700} height={300} aspect={3}>
                <LineChart data={pdata}>
                <CartesianGrid stroke="#ccc" strokeDasharray={'8 8'}/>
                    <XAxis dataKey='name'  />
            <Tooltip />
                    <Line dataKey='students'></Line>
                <YAxis/>

                </LineChart>
            </ResponsiveContainer>

            <PieChart width={700} height={700}>
                <Pie
                    activeIndex={activeIndex}
                    data={pdata}
                    dataKey="students"
                    outerRadius={250}
                    fill="green"
                    // onMouseEnter={onPieEnter}
                    style={{ cursor: 'pointer', outline: 'none' }} // Ensure no outline on focus
                >
                    {pdata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>

        <BarChart width={900} height={600} data={statedata}>
            <CartesianGrid stroke="#ccc" strokeDasharray={'8 8'}/>
            <XAxis dataKey="Year"/>
            <YAxis />   
            <Tooltip></Tooltip>
            <Bar dataKey="Population" fill="blue"/>
            {/* <Bar dataKey="Population" fill="blue"/> */}
        </BarChart>

        <h1 className="text-heading">Line Chart Using Rechart</h1>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={pdata1} margin={{ right: 300 }}>
                    <CartesianGrid  strokeDasharray={'8 8'} />
                    <XAxis dataKey="name" interval={"preserveStartEnd"} />
                    <YAxis/>
                    <Legend />
                    <Tooltip />
                    <Line
                        dataKey="student"
                        stroke="black"
                        activeDot={{ r: 8 }}
                    />
                    <Line dataKey="fees" stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            <RadarChart height={500} width={500} 
            outerRadius="80%" data={pdata}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="students" stroke="green"
                fill="green" fillOpacity={0.5} />
                <Tooltip/>
        </RadarChart>
    </div>

  )
}

export default Chart