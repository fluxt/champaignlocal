# ChampaignLocal

This is a website that provides customers a locally owned business alternative to products/stores that they are looking to purchase.

## Run Locally

Prerequisites:

* python (version 3.8.x) & pip
* node (version 12) & npm

0. Edit and rename config.json

Set up the configuration file for a local or remote SQL database

After the edit, rename config.json.sample to config.json

```sh
mv config.json.sample config.json
```

1. Create virtualenv and install dependencies for Flask API

```sh
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

2. Install React Dependencies

```sh
npm install
```

3. Start Flask

```sh
npm run start-flask
```

Flask is located at http://localhost:5000 (try http://localhost:5000/api/time)

4. Build/Start React

Option 1: Build React to be served by Flask (no browser debugging)

```sh
npm run build
```

Flask is already configured to serve static files at /build.

App is located at http://localhost:5000

To reset,

```sh
npm run clean
```

Option 2: Use react-scripts to debug React (browser debugging)

```sh
npm run start-react
```

React is located at http://localhost:3000

All api requests are proxied to http://localhost:5000

## Credits

Project Structure and Deployment Instructions based on [How to Create a React Flask Project by Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
