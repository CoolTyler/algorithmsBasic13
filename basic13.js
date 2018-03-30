<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script>
        // Print 1 to 255;
        // Print all the integers between 1-255;
        function print1To155(){
            for (var i = 0; i < 256; i++){
                console.log(i);
            }
        }

        // Print odds from 1-255;
        // Print all odd integers from 1 to 255;
        function printOdds1To255(){
            for (var i = 0; i < 256; i++){
                if ( i % 2 != 0){
                    console.log(i);
                }
            }
        }

        // Print max value of an array;
        // Given an array, find and print its largest value;
        function printMaxOfArray(arr){
            var max = -Infinity;
            for (var i = 0; i < arr.length; i++){
                if (arr[i] > max){
                    max = arr[i];
                }
            }
            return max;
        }

        // Print ints and sum 0-255;
        // Print integers from 0 to 255, and with each integer print the sum so far;
        function printIntsAndSumTo255(){
            var sum = 0;
            for (var i = 0; i < 256; i++){
                sum += i;
                console.log(i, sum);
            }
        }

        // Print array values;
        // Iterate through a given array, printing each value;
        function printValues(arr){
            for (var i = 0; i < arr.length; i++){
                console.log(arr[i]);
            }
        }

        // Print average of array;
        // Analyze an arrays values, and print the average value;
        function printAverageOfAray(arr){
            var sum = 0;
            for (var i =0; i < arr.length; i++){
                sum += arr[i];
            }
            var avg = sum/arr.length;
            console.log(avg);
        }

        // Return odds array 1-255;
        // Create an array with all the odd integers betwen 1 and 255 (inclusive);
        function returnOddsArray1To255(){
            var oddsArr = [];
            for (var i = 0; i < 256; i++){
                if (i % 2 !== 0){
                    oddsArr.push(i);
                }
            }
            return oddsArr;
        }

        // Square array values;
        // Square each value in a given array, returning that same array with changed values;
        function squareArrayVals(arr){
            for (var i = 0; i < arr.length; i++){
                arr[i] *= arr[i];
            }
            return arr;
        }

        // Return array count greater than Y;
        // Given an array and a value Y, count and print the number of array values greater than Y;
        function greaterThanY(arr, y){
            var counter = 0;
            for (var i = 0; i < arr.length; i++){
                if (arr[i] > y){
                    counter ++;
                }
            }
            return counter;
        }

        // Zero out array negative numbers;
        // Return the given array, after setting any negative values to zero;
        function zeroOutNegatives(arr){
            for (var i = 0; i < arr.length; i++){
                if (arr[i] < 0){
                    arr[i] = 0;
                }
            }
            return arr;
        }

        // Print max, min, average array values;
        // Given an array, print the max, min and average values for that array;
        function printMaxMinAvg(arr){
            var sum = 0;
            var max = -Infinity;
            var min = Infinity;
            for (var i = 0; i < arr.length; i++){
                if (arr[i] < min){
                    min = arr[i];
                }
                if (arr[i] > max){
                    max = arr[i];
                }
                sum += arr[i];
            }
            var avg = sum/arr.length;
            console.log(avg, min ,max);
        }

        // Shift array values left;
        // Given an array, move all values forward (to the left) by one inde, dropping the first value and leaving a 0 at the end of th array;
        function shiftArrayValsLeft(arr){
            for (var i = 0; i < arr.length; i++){
                arr[i] = arr[i+1];
            }
            arr[arr.length-1] = 0;
            return arr;
        }

        // Swap string for array negative values;
        // Given an array of numbers, replace any negative values with the string 'Dojo';
        function swapStringsForNegVals(arr){
            var dojoString = 'dojo';
            for (var i = 0; i < arr.length; i++){
                if (arr[i] < 0){
                    arr[i] = dojoString;
                }
            }
            return arr;
        }

        // Given an array of multiple values, write a program that removes any negative values in that array.
        // Once your program is done, they array should be composed of only the non negative numbers, in their original order.  Do this without creating a temporary array.  Use only .pop();
        function removeNegatives(arr){
            let count = 0;
            for (let idx = 0; idx < arr.length; idx++){
                if (arr[idx] < 0){
                    count++;
                }
                else {
                    arr[idx - count] = arr[idx];
                }
            }
            while (count--){
                arr.pop();
            }
            return arr;
        }
    </script>
</body>
</html>

