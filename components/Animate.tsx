// import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

type Props = {
    jsonData: any,
    index2: number,
    // inputVisiblePaths: string[],
}

export function Animate({jsonData, index2}: Props) {
    const [visiblePaths, setVisiblePaths] = useState<string[]>([]);

    useEffect(() => {
      const paths = jsonData[index2].strokes;
  
      paths.forEach((path: string, i: number) => {
        setTimeout(() => {
          setVisiblePaths((prev) => [...prev, path]);
        }, 1000 + i * 1000); // Delay in milliseconds (1 second)
      });
    }, [jsonData, index2]);

  return (
    <>
    {visiblePaths.map((item, i) => (
        <path key={i} transform="scale(1, -1) translate(0, -900)" d={item} fill="black" stroke="black" opacity={0.75}/>
      ))}
    {/* {setVisiblePaths([])} */}
    
    </>
    
  );
}
