# ReactJS Todo App

A small Todo List app in React + Vite, meant as a second Docker practice project.

## Run locally

```bash
npm install
npm run dev
```

## Build and run with Docker

```bash
docker build -t todoapp:v1 .
docker run --name todo-c1 -p 8082:80 todoapp:v1
```

Then open http://localhost:8082

## Practice ideas

Now that you've built one image already, try these to build muscle memory:

1. Build this image with a different tag, e.g. `todoapp:v2`, and compare `docker images` output.
2. Change the port mapping to `9090:80` instead of `8082:80` and see the app on a new port.
3. Stop and remove the container, then run it again in detached mode with `-d`.
4. Change a color in `src/App.css`, rebuild the image, and confirm the change appears after a fresh `docker run`.
5. Run `docker exec -it todo-c1 sh` while the container is running to look around inside the container's filesystem.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: todo app"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
