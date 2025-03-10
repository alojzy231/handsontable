import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

const ExampleComponent = () => {
  return (
    <HotTable
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
      data={[
        ['BMW', 2017, 'black', 'black'],
        ['Nissan', 2018, 'blue', 'blue'],
        ['Chrysler', 2019, 'yellow', 'black'],
        ['Volvo', 2020, 'white', 'gray'],
      ]}
      colHeaders={['Car', 'Year', 'Chassis color', 'Bumper color']}
      columns={[
        {
          type: 'autocomplete',
          source(_query, process) {
            fetch('{{$basePath}}/scripts/json/autocomplete.json')
              .then((response) => response.json())
              .then((response) => process(response.data));
          },
          strict: true,
        },
        {},
        {},
        {},
      ]}
    />
  );
};

export default ExampleComponent;
