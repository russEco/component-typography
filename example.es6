import React from 'react';
import SampleText from './sampletext';
import Tabs from 'react-simpletabs';

const fonts = [
  [ 'sans', '300', '', 'EconSans' ],
  [ 'sans', '', '', 'EconSans' ],
  [ 'sans', '700', '', 'EconSans' ],
  [ 'sans', '', 'italic', 'EconSans' ],
  [ 'serif', '', '', 'MiloSerifPro' ],
  [ 'serif', '500', '', 'MiloSerifPro' ],
  [ 'serif', '', 'italic', 'MiloSerifPro' ],
];
const eachSample = fonts.map((fontFamily) => {
  const [ kind, modifier, fontStyle, family ] = fontFamily;
  const classes = [
    `example__${ kind }-text`,
    modifier && `example__${ kind }-text--${ modifier }`
  ].join(' ');
  const style = { fontFamily: family };
  if (modifier !== '') {
    style.fontWeight = modifier;
  }
  if (fontStyle !== '') {
    style.fontStyle = fontStyle;
  }
  return (
    <Tabs.Panel title={`${family} ${modifier} ${fontStyle}`} key={`typography-${fontFamily.join('x')}`}>
      <h2>Sample for font-family: {fontFamily.join(' ')}</h2>
      <div
        className={classes}
        style={style}
        data-font={family.toLowerCase().replace(/ /g, '-')}
      ><SampleText /></div>
      <hr/>
    </Tabs.Panel>
  );
});

export default (
  <Tabs className="library--example-tabs">
    {eachSample}
  </Tabs>
);
