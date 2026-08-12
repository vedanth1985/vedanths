# Sample ReactJS App

A minimal React + Vite app, ready to push to GitHub and build as a Docker image.

## Run locally

```bash
npm install
npm run dev
```

## Build and run with Docker

```bash
docker build -t sample-reactjs-app .
docker run -p 8080:80 sample-reactjs-app
```

Then open http://localhost:8080

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: sample React app"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```
