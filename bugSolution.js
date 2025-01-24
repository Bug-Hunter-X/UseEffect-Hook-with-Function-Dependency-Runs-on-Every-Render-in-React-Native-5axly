import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the function
  const myFunction = useCallback(() => {
    // Perform some action
    console.log('My function ran!');
  }, []);

  useEffect(() => {
    // Effect will only run if count changes, not on every render
    console.log('useEffect ran!');
  }, [count, myFunction]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default MyComponent;