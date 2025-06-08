
# [Reel-Reviews](https://reel-reviews-pd2k.onrender.com)

## Description

Reel Reviews is a web application that lets users search for movies and view trailers, trends, and location-based insights. What sets this app apart is its ability to categorize movies by genre and generation, helping users find content that resonates with different age groups.

## Technology Stack

- React (frontend)
- Node.js (backend)
- Bootstrap (styling)
- TMDb API (movie data)

## Team Members

- Julian V Apparicio – <Jvapparicio@csu.fullerton.edu>
- Terrell D. Lemons – <LemonsTerrell@csu.fullerton.edu>
- Leung Wang Chan – <lchan2021@csu.fullerton.edu>
- James D Owens – <jamesowens@csu.fullerton.edu>


## Navigation

| Page             | Features                                                                 |
|------------------|--------------------------------------------------------------------------|
| Home             | Search trailers, view generational movie gap charts, trending content    |
| Review           | Review movies by generation, region, or trend                            |
| Movie Location   | Discover movie locations and view images                                 |
| About            | Learn about the team and our mission                                     |
| Contact          | Submit suggestions or report inaccurate data                             |

## Deployment

Visit the live app: [https://reel-reviews-pd2k.onrender.com](https://reel-reviews-pd2k.onrender.com)

## 🐳 Docker Setup

To build and run the app using Docker:

### Build the image
```bash
make create-image
```

### Run the container
```bash
make run-image
```

This will start the app and bind it to [http://localhost:9999](http://localhost:9999)

### Makefile Commands
- `make create-image` — Builds the Docker image  
- `make run-image` — Runs the container on port 9999  
- `make start-server` — Runs server manually (non-Docker)

> Ensure Docker Desktop is running.

## License

This project is licensed under the MIT License.

## Acknowledgments

- TMDb for providing movie data
- Bootstrap for UI framework

## Contact

- GitHub: [Reel-Reviews Repo](https://github.com/JUJU-APP/Reel-Reviews)