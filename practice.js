const nums = [7, 8, 2, 4];
// complex data structure
// [object]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Will", rating: 3.4 },
  { id: 2, title: "Mission Imposible 1", director: "Tom cruise", rating: 4.5 },
  { id: 3, title: "Little Miss Forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Imposible 2", director: "Tom cruise", rating: 4.4 },
];

// 
movies.map((movie) => {
    console.log(movie.title.toUpperCase(), movie.rating);
})
const topRatedMovie = movies.filter((movie) => {
    return movie.rating >= 4;
})
console.log(topRatedMovie);


// miss
const searchedMovie = movies.filter((movie) => movie.title.includes("miss"))
console.log(searchedMovie);

const searchMovies = (searchTeam) => {
    const converted = searchTeam.trim().toLowerCase()
    const movieSearched = movies.filter((movie) => movie.title.toLowerCase().includes(converted))
    return movieSearched;
}
console.log(searchMovies("di"));

// Get me movies directed by Tom Cruise
const movieDirector = movies.filter((movie) => movie.director.toLowerCase() === "Tom".toLowerCase())
console.log(movieDirector);

const thirdMovie = movies.find((movie)=> movie.id === 3)
console.log(thirdMovie);

const movieLessThan4 = movies.filter((movie) => {
    return movie.rating < 4
})
console.log(movieLessThan4);


const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];

const evenstPrice = events.filter((event) => event.price <= 15000)

console.log(evenstPrice);

const eventCartegory = events.filter((event) => event.category)
console.log(eventCartegory);

const arrangeEvent = events.sort((a, b) => a.title.localeCompare(b.title));
console.log(arrangeEvent);


const eventList = events.length
const randomEventList = Math.floor(Math.random(events) * eventList)
console.log(events[randomEventList]);


