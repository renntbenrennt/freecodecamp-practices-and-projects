/**
 * Find the Symmetric DifferencePassed
 * 
 * Create a function that takes two or more arrays and returns an array of the symmetric difference 
 * (△ or ⊕) of the provided arrays.
 * 
 * Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
 * the mathematical term "symmetric difference" of two sets 
 * is the set of elements which are in either of the two sets, 
 * but not in both (A △ B = C = {1, 4}). 
 * For every additional symmetric difference you take (say on a set D = {2, 3}), 
 * you should get the set with elements which are in either of the two the sets 
 * but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). 
 * The resulting array must contain only unique values (no duplicates).
 * 
 * sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
 * sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
 * sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
 * sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
 * sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
 * sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
 * sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
 * sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
 * sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
 * 
 * *TWO IMPORTANT THINGS TO POINT OUT*
 * 1. The symmetric difference is the union without the intersection
 * 2. The symmetric difference is commutative and associative 
 * (and consequently the leftmost set of parentheses 
 * in the previous expression were thus redundant)
 * 
 */

function intersection(arr1, arr2) {
    let bigger = arr1.length > arr2.length ? arr1.slice() : arr2.slice();
    let smaller = arr1.length > arr2.length ? arr2.slice() : arr1.slice();
    return bigger.filter(ele => smaller.includes(ele));
}

function union(arr1, arr2) {
  let set = new Set();
  arr1.concat(arr2).forEach(ele => set.add(ele));
  return [...set];
}

function diff(a, b) {
  return union(a, b).filter(ele => !intersection(a, b).includes(ele));
}

function sym(args) {
  let arr = Array.from(arguments);
  return arr.reduce(diff);
}
