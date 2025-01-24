## React Native useEffect Hook Bug
This repository demonstrates a common bug in React Native related to the `useEffect` hook and function dependencies. The bug arises when a function is included in the dependency array of `useEffect`, causing the effect to run unnecessarily on every render.

The `bug.js` file showcases the problematic code, while `bugSolution.js` offers a corrected implementation.

**Problem:** The function's reference changes on each render, triggering the effect repeatedly. 

**Solution:** Use `useCallback` to memoize the function and prevent unnecessary re-renders.