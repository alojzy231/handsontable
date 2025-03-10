import { FC } from 'react';
import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// register Handsontable's modules
registerAllModules();

interface Person {
  id: number;
  name?: { first: string; last: string };
  address: string;
}

const data: Person[] = [
  { id: 1, name: { first: 'Ted', last: 'Right' }, address: '' },
  { id: 2, address: '' }, // Handsontable will create missing properties on demand
  { id: 3, name: { first: 'Joan', last: 'Well' }, address: '' },
];

const ExampleComponent: FC = () => (
  <HotTable
    data={data}
    colHeaders={true}
    height="auto"
    width="auto"
    columns={[
      { data: 'id' },
      { data: 'name.first' },
      { data: 'name.last' },
      { data: 'address' },
    ]}
    minSpareRows={1}
    autoWrapRow={true}
    autoWrapCol={true}
    licenseKey="non-commercial-and-evaluation"
  />
);

export default ExampleComponent;
