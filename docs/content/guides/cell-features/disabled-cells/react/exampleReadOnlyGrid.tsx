import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      data={[
        { car: 'Tesla', year: 2017, chassis: 'black', bumper: 'black' },
        { car: 'Nissan', year: 2018, chassis: 'blue', bumper: 'blue' },
        { car: 'Chrysler', year: 2019, chassis: 'yellow', bumper: 'black' },
        { car: 'Volvo', year: 2020, chassis: 'white', bumper: 'gray' },
      ]}
      height="auto"
      colHeaders={['Car', 'Year', 'Chassis color', 'Bumper color']}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      readOnly={true}
    />
  );
};

export default ExampleComponent;
