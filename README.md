# Kanban Take-Home Challenge

## Installation

```
git clone git@github.com:localjo/kanban-takehome.git
cd kanban-takehome
npm install
```

## Usage

Start the app locally and open it in a browser

```
npm start
```

## Outline and Self-Critique

I started with building out the app's state and stubbing out the components I thought I'd need. Then I added some UI and a utility function for adding new cards. Then I added CSS and made the app look like the design specs before trying to implement the drag and drop functionality.

I used [`react-dnd`](https://github.com/react-dnd/react-dnd/) for drag and drop because it's one of the most popular libraries, and I didn't think I'd have time to implement drag and drop functionality from scratch. But it ended up having [a bug that prevents Jest tests from running correctly](https://github.com/react-dnd/react-dnd/issues/1540), and I wasted a bunch of time debugging and didn't solve in time to write as many tests as I'd like.

I chose to store the app's state (the cards and columns) in a single object for simplicity and used a composition pattern in the App component to pass state down into child components. This made development very easy, and kept the code mostly simple, but the downside is that any time that object changes, it causes any components that depend on it to re-render. I tried to memoize some functions to avoid this, but discovered near the end of my time that I didn't do this correctly, and that components were re-rendering too often. If I could do this again, I would use the `useReducer` hook and React Context to access the state instead, I think I would run into fewer problems that way. That didn't occur to me at the beginning because I underestimated the complexity of this exercise.

In the end, due to problems with `react-dnd` and my architectural decisions with how I handled the state, I didn't have time to optimize performance as much as I'd like and write more tests, but I did add three more commits after 3 hours was up to show the work I still had in progress: 1) What I was doing to debug the performance issues. 2) The enzyme tests I was working on and 3) this README update.

## Screenshots

Note: if these don't display in the README, they can be found in the `/screenshots/` directory of this repo.

### Adding a Card

![Adding a card](/screenshots/add-card.gif)

### Sorting Cards

![Sorting cards](/screenshots/sort-cards.gif)

### Completing a Task

![Completing a task](/screenshots/complete-task.gif)

## Tests

My submission has tests for four components. Due to [a bug with the library I used for drag and drop](https://github.com/react-dnd/react-dnd/issues/1540), I had to disable the tests for two components. Two of the components have more extensive tests. In the App component, I tested that the functions I'm using the mutate the app's state work correctly for the three critical functions of adding cards, sorting cards and changing card columns. In the AddCardForm component, I tested that the form contains all of the expected input elements when in renders.

## More Time

If I had more time, I would have continued working on the following:

1. Solving the problem of why the columns re-render when cards are moved. This is partially due to the decision I made to lift the state up to the App component, and partially due to not having time to properly memoize the values passed into components.

2. Adding more tests.

3. Improving accessibility and adding touch support.

## Thank you!
