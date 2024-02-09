// Lists of common Indian first names and last names
const indianFirstNames = [
    "Aarav", 
    "Aria", 
    "Arya", 
    "Diya",
    "Ishaan",
    "Krishna",
    "Mira",
    "Neha",
    "Raj",
    "Sofia",
    "Aarav",
  "Aishwarya",
  "Akshay",
  "Ananya",
  "Arjun",
  "Chetan",
  "Divya",
  "Harshita",
  "Ishaan",
  "Kriti",
  "Manish",
  "Neha",
  "Pranav",
  "Radhika",
  "Rahul",
  "Sakshi",
  "Sanjay",
  "Shreya",
  "Sushant",
  "Tanvi",
  "Varun",
  "Vidya"
 ];
  
  
  // Function to generate a random Indian name
  export function generateRandomIndianName() {
    return  indianFirstNames[Math.floor(Math.random() * indianFirstNames.length)];
  }
  

 
const comments = [
    "Great video! Thanks for sharing.",
    "This video changed my life!",
    "I've been looking for this information. ",
    "You explain things so clearly. Awesome job!",
    "I wish I had found this video earlier.",
    "Not my cup of tea, but still a well-made video.",
    "Thumbs up if you agree!",
    "This is the best channel on YouTube!",
    "Can you make more videos like this?",
    "Subscribed and liked. Keep up the good work!",
    "I can't believe how helpful this is I ",
  ];
  
  
  export function generateRandomComment() {
    return comments[Math.floor(Math.random() * comments.length)];
  }
  
 