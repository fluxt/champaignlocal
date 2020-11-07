# ChampaignLocal

This is a website that provides customers a locally owned business alternative to products/stores that they are looking to purchase.

## Run Locally

Prerequisites:

* python (version 3.8.x) & pip
* node (version 12) & npm

1. Install Frontend Dependencies

```sh
cd static
npm install
```

2. Build Frontend Resources

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
npm run start
```

React is located at http://localhost:3000

All api requests are proxied to http://localhost:5000

3. Edit and rename config.json

Set up the configuration file for a local or remote SQL database

After the edit, rename config.json.sample to config.json

```sh
cd ..
mv config.json.sample config.json
```

4. Create virtualenv and install dependencies for Flask API

```sh
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

5. Start Flask

```sh
python application.py
```

Flask is located at http://localhost:5000 (try http://localhost:5000/api/time)

## Credits

Project Structure and Deployment Instructions based on [How to Create a React Flask Project by Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
