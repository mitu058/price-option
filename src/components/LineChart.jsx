import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    
    
      const  students =  [
          { "id": 1, "name": "Alice", "physics": 82, "chemistry": 78, "math": 85 },
          { "id": 2, "name": "Bob", "physics": 75, "chemistry": 82, "math": 78 },
          { "id": 3, "name": "Charlie", "physics": 91, "chemistry": 89, "math": 92 },
          { "id": 4, "name": "David", "physics": 68, "chemistry": 74, "math": 74 },
          { "id": 5, "name": "Eve", "physics": 85, "chemistry": 80, "math": 88 },
          { "id": 6, "name": "Frank", "physics": 77, "chemistry": 79, "math": 81 },
          { "id": 7, "name": "Grace", "physics": 94, "chemistry": 91, "math": 95 },
          { "id": 8, "name": "Hannah", "physics": 70, "chemistry": 72, "math": 69 },
          { "id": 9, "name": "Isaac", "physics": 73, "chemistry": 78, "math": 76 },
          { "id": 10, "name": "Jack", "physics": 84, "chemistry": 86, "math": 84 }
        ]
      
      
      
      
    return (
        <div>
            <Lchart width={800} height={400} data={students}>
            <Line type="monotone" dataKey="math" stroke = "red" ></Line>
            <Line type="monotone" dataKey="physics" stroke='green'></Line>
            <Line type="monotone" dataKey="chemistry" stroke='blue'></Line>
            <XAxis dataKey="name" />
            <YAxis></YAxis>

            </Lchart>
            
        </div>
    );
};

export default LineChart;