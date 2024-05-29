# FIGMA TO REACT CODE CONVERTER
# FigmaDesign Component

This component allows users to fetch data from Figma using the Figma API by providing a file key and API token. It then displays the dimensions of the first parent frame and a div matching its dimensions,Because its a prototype and there will be further updates in this and this is prepared in one day only for an intership submition at rajgm1722@gmail.com

## Usage

1. Clone this repository to your local machine.
2. Navigate to the directory containing the `FigmaDesign.js` file.
3. Install the necessary dependencies by running `npm install` or `yarn install`.
4. Start your React application.
5. Use the `FigmaDesign` component in your React application.


## Inputs

- **Figma File Key:** Enter the Figma file key to convert Figma designs into code.
- **API Token:** Enter the Figma API token for authentication.

## Outputs

- **Homepage Frame Dimensions:** Displays the width and height of the homepage frame.
- **Matching Div:** Shows a div that matches the dimensions of the homepage frame.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

```jsx
import React from 'react';
import FigmaDesign from './FigmaDesign';

function App() {
  return (
    <div className="App">
      <FigmaDesign />
    </div>
  );
}

export default App;



