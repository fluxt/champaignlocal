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
npm install
```

3. Run the Combined Project

Locally host the front-end

```sh
yarn start
```

In another terminal, start the Flask API

```sh
yarn start-api
```

## Credits

Project Structure and Deployment Instructions based on [How to Create a React Flask Project by Miguel Grinberg](https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project)
