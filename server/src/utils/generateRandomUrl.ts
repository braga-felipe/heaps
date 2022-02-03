export default function generateRandomImage() {
  const urls = ['https://ca.slack-edge.com/T0WU5R8NT-U02H237NTS8-89b683c9ba66-512',
                'https://ca.slack-edge.com/T0WU5R8NT-U02GWRVJERW-72846fc663f1-512',
                'https://ca.slack-edge.com/T0WU5R8NT-U02DKNK1TT3-e3dafd62d60e-512',
                'https://ca.slack-edge.com/T0WU5R8NT-U02H9L5D6BE-2ccf95d509b2-512'  
              ];
              
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return urls[getRandomInt(urls.length)];            
}