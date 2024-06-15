# comp-sci

A visual demonstration of CompSci concepts that serves as a showcase of my understanding of these topics. By visualizing and explaining these concepts, I aim to reinforce my knowledge and address any gaps in my understanding. This process not only helps me but also offers a valuable resource for others learning these concepts.

Concepts to cover:

- Sorting algorithms
- Data structures
- Graph algorithms
- Dynamic Programming
- String Algorithms

## Bugs / Challenges

1. In it's present form if you run a sorting algorithm and then generate an array of a smaller size then the array will contine to add extra bars.

Key Changes
State Initialization: Initialised localArray and localAnimations with empty arrays to avoid stale data.
Sync State with Props: Ensured the useEffect hook updates the localArray and localAnimations states whenever the array or animations props change.
Reset Animations: Clear any leftover animation states when generating a new array.
Force Update with New Instances: Use spread syntax ([...array] and [...animations]) to ensure new instances are used, preventing potential reference issues.

2. Visualising different algorithms

Implementing sorting algorithms in a visualiation tool presents several challenges, particularly when dealing with different types of algorithms like selection sort and merge sort. Each algorithm has unique characteristics that require specific handling in the visualiser.

**Selection Sort Challenges**:
Selection sort involves finding the minimum element in the unsorted portion of the array and swapping it with the first unsorted element. This often results in swaps between non-adjacent elements, which can be complex to visualise. The visualiser must handle and animate these swaps correctly. Additionally, each comparison needs to be recorded in the animations array, ensuring that the visualiser can differentiate between comparisons and swaps to animate them appropriately.

**Merge Sort Challenges**:
Merge sort, a divide-and-conquer algorithm, splits the array into smaller subarrays, sorts them, and then merges them back together. The merging process involves overwriting elements, which differs from the simple swaps seen in bubble sort or selection sort. This requires the visualiser to handle overwrite operations. Each operation, whether a comparison or an overwrite, must be recorded in the animations array with a type indicator, ensuring the visualiser can accurately animate each step.

**Standardized Animation Format**:
To ensure compatibility across different sorting algorithms, a standardized format for the animations array is essential. This format includes type indicators for comparisons, swaps, and overwrites, allowing the visualiser to interpret and animate each operation correctly.

**visualiser Adaptations**:
The visualiser is adapted to handle these different types of animations by highlighting the relevant bars for comparisons, swaps, and overwrites. It updates the array and animations based on the current operation, ensuring accurate and synchronized visual representation of the sorting process.

By addressing these challenges and ensuring a consistent animation format, the visualiser can effectively display the sorting process for various algorithms, providing a clear and educational visual experience.
