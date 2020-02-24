import React from 'react';
// import logo from './logo.svg';
import { Breadcrumb ,Button,DatePicker,version,message,Alert } from 'antd';
// import 'antd/dist/antd.css';
// import { DatePicker } from 'antd';
import './App.css';

function App() {
  const [ date,setdate ] = React.useState(null);

  const handleChange = date => {
    // message.info(`You Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);
    setdate(date);
  };

  return (
    <div className="App">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Application List</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    <h1>antd version: {version}</h1>
    <DatePicker onChange={handleChange} />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
    <div style={{ marginTop: 20 }}>
      {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
      <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type="success" />
    </div>
    
  </div>
  );
}

export default App;
