import React, { useState } from 'react';
import axios from 'axios';

const FigmaDesign = () => {
  const [figmaData, setFigmaData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [fileKey, setFileKey] = useState('');
  const [apiToken, setApiToken] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchFigmaData = async () => {
    setLoading(true); // Set loading state to true when data fetching starts

    const apiUrl = `https://api.figma.com/v1/files/${fileKey}`;
    try {
      const config = {
        headers: {
          'X-Figma-Token': apiToken
        }
      };
      const response = await axios.get(apiUrl, config);
      const data = response.data;
      setFigmaData(data);

      if (data) {
        // Find the ID of the first parent frame dynamically
        const firstParentFrameId = Object.keys(data.document.children[0].children)[0];
        console.log('First Parent Frame ID:', firstParentFrameId);

        // Get the first parent frame using its ID
        const firstParentFrame = data.document.children[0].children[firstParentFrameId];

        // Check if the first parent frame exists and has dimensions
        if (firstParentFrame && firstParentFrame.absoluteBoundingBox) {
          const { width, height } = firstParentFrame.absoluteBoundingBox;
          console.log('Width:', width, 'Height:', height);
          setDimensions({ width, height });
        } else {
          console.log('No frame or dimensions found.');
          setDimensions({ width: 0, height: 0 });
        }
      } else {
        console.log('No data fetched from Figma API');
        setDimensions({ width: 0, height: 0 });
      }
    } catch (error) {
      console.error('Error fetching data from Figma API:', error);
      setFigmaData(null);
      setDimensions({ width: 0, height: 0 });
    } finally {
      setLoading(false); // Set loading state to false when data fetching finishes
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Enter Figma File Key to convert Figma into code</h2>
      <input
        type="text"
        value={fileKey}
        onChange={(e) => setFileKey(e.target.value)}
        placeholder="Enter Figma File Key"
        className="mt-[40px] mb-[40px] p-2  border border-gray-300 rounded w-[60%]"
      />
      <h2 className="text-2xl font-bold mb-4">Enter Token</h2>
      <input
        type="text"
        value={apiToken}
        onChange={(e) => setApiToken(e.target.value)}
        placeholder="Enter Figma API Token"
        className=" mt-[40px] mb-[40px] p-2 border border-gray-300 rounded  w-[60%]"
      />
      <br></br>
      
      <button
        onClick={fetchFigmaData}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Fetch Figma Data
      </button>
      {figmaData ? (
        <>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Homepage Frame Dimensions</h3>
            <p>Width: {dimensions.width}px</p>
            <p>Height: {dimensions.height}px</p>
          </div>
          <div
            className="bg-gray-200 border border-black mx-auto"
            style={{
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`
            }}
          >
            This div matches the dimensions of the "Homepage" frame
          </div>
        </>
      ) : (
        <p>{loading ? 'Loading Figma data...' : 'Enter Figma File Key and Token To Load Data '}</p>
      )}
    </div>
  );
};

export default FigmaDesign;
