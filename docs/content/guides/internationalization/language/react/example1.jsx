import { HotTable } from '@handsontable/react-wrapper';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, deDE } from 'handsontable/i18n';
import 'handsontable/dist/handsontable.full.css';

// register Handsontable's modules
registerAllModules();
registerLanguageDictionary(deDE);

const ExampleComponent = () => {
  return (
    <HotTable
      data={[
        ['Lorem', 'ipsum', 'dolor', 'sit', '12/1/2015', 23],
        ['adipiscing', 'elit', 'Ut', 'imperdiet', '5/12/2015', 6],
        ['Pellentesque', 'vulputate', 'leo', 'semper', '10/23/2015', 26],
        ['diam', 'et', 'malesuada', 'libero', '12/1/2014', 98],
        ['orci', 'et', 'dignissim', 'hendrerit', '12/1/2016', 8.5],
      ]}
      contextMenu={true}
      height="auto"
      language="de-DE"
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};

export default ExampleComponent;
