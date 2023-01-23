function findMostOccurring(arr) {
const count = arr.reduce((acc, curr) => {
acc[curr] = (acc[curr] || 0) + 1;
return acc;
}, {});

    const sortedCount = Object.keys(count).sort((a, b) => count[b] - count[a]);
    return sortedCount.slice(0, 3);

}

he reduce() method is used to iterate over the array and create an object (count) where the keys are the elements of the array and the values are the number of occurrences of each element.

The Object.keys() method is used to get an array of the keys in the count object, which are the unique elements in the original array.

The sort() method is used to sort the keys array in descending order of their values in the count object, which gives the most occurring elements first.

The slice() method is used to return the first 3 elements of the sorted keys array, which are the 3 most occurring elements in the original array.

The function takes the array as an argument and returns the 3 most occuring values in an array.

const testArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(findMostOccurring(testArray));
