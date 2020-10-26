# ChampaignLocal

This is a website that provides customers a locally owned business alternative to products/stores that they are looking to purchase.

## Run Locally

Prerequisites:

* Node (version 12)
* Python (version 3.8.x) & Pip
* Yarn

1. Create virtualenv and install dependencies for Flask API

```sh
cd api
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cd ..
```

2. Install React Dependencies

```sh
yarn install
```

3. Start Flask

```sh
yarn start-flask
```

Flask is located at http://localhost:5000 (try http://localhost:5000/api/time)

4. Start/Build React

Option 1: Use react-scripts to debug React (browser debugging)

```sh
yarn start-react
```

React is located at http://localhost:3000

All api requests are proxied to http://localhost:5000

Option 2: Build React to be served by Flask (no browser debugging)

```sh
yarn build
```

Flask is already configured to serve static files at /build.

App is located at http://localhost:5000

To reset,

```sh
yarn clean
```

## Credits

Project Structure and Deployment Instructions based on [How to Create a React Flask Project by Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
