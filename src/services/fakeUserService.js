
const users = [
        {
            "id": 1,
            "name": "Josiane Jast",
            "email": "reta.parisian@example.com",
            "photo": "22.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 2,
            "name": "Tyreek Bruen",
            "email": "schowalter.jo@example.com",
            "photo": "19.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 3,
            "name": "Tremaine Bins",
            "email": "rkoepp@example.net",
            "photo": "9.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 4,
            "name": "Dr. Eino Gorczany",
            "email": "rodriguez.eden@example.org",
            "photo": "13.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 5,
            "name": "Dr. Shirley Spencer",
            "email": "qreichert@example.net",
            "photo": "17.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 6,
            "name": "Ms. Fleta Kassulke",
            "email": "tgorczany@example.org",
            "photo": "8.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 7,
            "name": "Lawson Feil DVM",
            "email": "tyson.champlin@example.com",
            "photo": "3.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 8,
            "name": "Dr. Ronny Bins",
            "email": "audra06@example.net",
            "photo": "14.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        },
        {
            "id": 9,
            "name": "Joanny Zemlak",
            "email": "huel.waino@example.com",
            "photo": "10.jpg",
            "created_at": "2019-08-07 06:20:49",
            "updated_at": "2019-08-07 06:20:49"
        }
    ];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find(m => m.id === id);
}
/*
export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
*/