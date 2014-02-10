content-api-docs
================

Documentation for Content API V2


## Build instructions for rendering

### Install npm
OSX: 
```
brew install npm
```
Linux:
[Installing Node.js via package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

### Install gulp
```
npm install -g gulp
```

### Run gulp
```
cd rendering/build
gulp
```

### Start server
From the root of the repository, run:

```
python -m SimpleHTTPServer
```

Browse to
```
http://localhost:8000/rendering/start.html
```
