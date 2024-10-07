/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md"
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll('.item')


/**
 * @task
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
const sortBtn = document.querySelectorAll('.sortBtn')


/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...
const sortData = (str) => {
  const container = document.getElementById('main')
  const btnArr = container.children
  const allItemsArr = Array.from(allItems);
  let sortedArr
  console.log('allItemsArr', allItemsArr)
  //local compare
  //querysecectors

  // console.log('btnarr', btnArr)
  if (str === 'desc') {
    sortedArr = allItemsArr.sort((a, b) => {
      if (a.innerHTML < b.innerHTML) return 1
      else if (a.innerHTML > b.innerHTML) return -1
      else return 0
    })

  }
  if (str === 'asc') {
    sortedArr = allItemsArr.sort((a, b) => {
      if (a.innerHTML < b.innerHTML) return -1
      else if (a.innerHTML > b.innerHTML) return 1
      else return 0
    })

  }
  let newArr = sortedArr.forEach((el) => {
    container.append(el)
  })
  console.log('allItemsArr sorted: ', allItemsArr)
  return newArr
}


/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...


for (let btn of sortBtn) {
  btn.addEventListener('click', () => {
    const btnClick = btn.dataset.sortdir
    // console.log(btnClick)
    // if (btnClick === 'asc') {
    //   return sortData('asc')
    // }
    // if (btnClick === 'desc') {
    //   return sortData('desc')
    // }
    return sortData(btn.dataset.sortdir);
  })

}
