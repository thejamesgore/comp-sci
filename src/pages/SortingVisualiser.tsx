import React, { useState, useEffect } from 'react';
import '../App.css';
import { ControlPanel, Visualiser } from '../components';
import { bubbleSort, selectionSort, mergeSort, Animation } from '../utils/algos';
import { generateRandomArray } from '../utils/utils';

const SortingVisualiser: React.FC = () => {
  const [array, setArray] = useState<number[]>([50, 40, 30, 20, 10]);
  const [animations, setAnimations] = useState<Animation[]>([]);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('bubbleSort');
  const [speed, setSpeed] = useState<number>(10);

  useEffect(() => {
    const initialArray = generateRandomArray(50);
    setArray(initialArray);
  }, []);

  const generateNewArray = (newArray: number[]) => {
    setArray(newArray);
    setAnimations([]);
  };

  const startSort = () => {
    let animations: Animation[];
    switch (selectedAlgorithm) {
      case 'bubbleSort':
        animations = bubbleSort(array);
        break;
      case 'selectionSort':
        animations = selectionSort(array);
        break;
      case 'mergeSort':
        animations = mergeSort(array);
        break;
      default:
        animations = bubbleSort(array);
    }
    setAnimations(animations);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  return (
    <div className="App">
      <ControlPanel
        onGenerateNewArray={generateNewArray}
        onStartSort={startSort}
        onAlgorithmChange={setSelectedAlgorithm}
        onSpeedChange={handleSpeedChange}
      />
      <Visualiser array={array} animations={animations} speed={speed} />
    </div>
  );
};

export default SortingVisualiser;
