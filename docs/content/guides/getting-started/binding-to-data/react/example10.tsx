import { useEffect, useRef, FC } from 'react';
import { HotTable, HotTableRef } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

// Register Handsontable's modules
registerAllModules();

const data: Array<Array<string | number>> = [
  ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
  ['2017', 10, 11, 12, 13, 15, 16],
  ['2018', 10, 11, 12, 13, 15, 16],
  ['2019', 10, 11, 12, 13, 15, 16],
  ['2020', 10, 11, 12, 13, 15, 16],
  ['2021', 10, 11, 12, 13, 15, 16],
];

const ExampleComponent: FC = () => {
  const hotRef = useRef<HotTableRef>(null);

  useEffect(() => {
    const hot = hotRef.current?.hotInstance;

    if (hot) {
      hot.setDataAtCell(0, 1, 'Ford');
    }
  }, []); // run once

  return (
    <HotTable
      ref={hotRef}
      data={data}
      height="auto"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
