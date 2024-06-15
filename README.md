# comp-sci

A visual demonstration of CompSci concepts and demo of my knowledge/understanding of those concepts.

# bugs to fix / that have been fixed

1. In it's present form if you run a sorting algorithm and then generate an array of a smaller size then the array will contine to add extra bars.

Key Changes
State Initialization: Initialised localArray and localAnimations with empty arrays to avoid stale data.
Sync State with Props: Ensured the useEffect hook updates the localArray and localAnimations states whenever the array or animations props change.
Reset Animations: Clear any leftover animation states when generating a new array.
Force Update with New Instances: Use spread syntax ([...array] and [...animations]) to ensure new instances are used, preventing potential reference issues.
