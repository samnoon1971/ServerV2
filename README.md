

# Server v2

A portal for university management (Made as part of academic curriculum)


## Badges

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Features

- Admin Portal
- Student Portal
- Teacher Portal (Under Development)

## Tutorial (Installation & Setup)
[![Watch the video](https://img.youtube.com/vi/w5yzR-YInZs/maxresdefault.jpg)](https://youtu.be/w5yzR-YInZs)

## Tech Stack

**Client:** HTML, CSS, jQuery, Bootstrap

**Server:** Node, Express, MongoDB


## Authors

- [@samnoon1971](https://www.github.com/samnoon1971)


## Roadmap

- Additional browser support

- Add more integrations

- Add more mobile responsiveness support

- Add API Documentation


## Build using Docker

To build this project run

```bash
docker build . -t samnoon/server_v2
```

## Deployment using Docker

To deploy this project run

```bash
  docker run -d -p 3000:3000 samnoon/server_v2
```



## Run Locally without Docker

Clone the project

```bash
  git clone https://github.com/samnoon1971/ServerV2
```

Go to the project directory

```bash
  cd ServerV2
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server
```
Open web browser at following URL:

```
http://localhost:3000/views/login
```
Default Admin Username: `admin`

Default Admin Password: `pass`

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## FAQ

#### What is the project for?

It was developed as part of web developement sessional course


## Support

For support, email samnoonabrar@gmail.com


## Feedback

If you have any feedback, please reach out to us at samnoonabrar@gmail.com
  
