### ImageProcessingAPI ###
Udacity Image processing API project


### Project Description ###

--This project presents a simple API that can be used to resize images through the NPM package sharp. Resized images are also also stored in cases where a re-equest of the same image is made.

### Usage ###

-- The node_modules folder was ignored in the making of this repository because of its massive size, so in order to make use of the scripts and the packages, you have to install the required packages using npm i packagename command. Packages can be found in the package.json file.

-- Endpoints 

To use this API, first, run the script "npm run start", then navigate to any web browser and write a URL with the following format:
 localhost:3000/ -This is the main render page.
 localhost:3000/images?filename=FILENAME&width=WIDTH&height=HEIGHT - This is the main api route

The main route is "/images" where you can pass three parameters: "filename","width","height".


-- The test cenarials include:
    √ Testing the main render route.
    √ Testing the main image routes
    √ Passing empty filename in the url parameters.
    √ Passing a filename that does not exist.

### Dependencies And About The Project ###

This is a list of the dependencies and scripts that were used to power this nodeJS typescript  API.


-- Scripts included in this project:
   "scripts": {
    "lint": "eslint . --ext .ts",
    "prettier": "prettier --config .prettierrc **/*.js --write",
    "build": "npx tsc",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine",
    "start": "nodemon src/index.ts"
  },

-- Dependencies and type definitions were also added:
    
  "dependencies": {
    "express": "^4.18.2",
    "sharp": "^0.31.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.15",
    "@types/jasmine": "^3.10.7",
    "@types/sharp": "^0.31.0",
    "@types/supertest": "^2.0.12",
    "@types/typescript": "^2.0.0",
    "@typescript-eslint/eslint-plugin": "^5.47.1",
    "@typescript-eslint/parser": "^5.47.1",
    "eslint": "^8.30.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "fs-extra": "^11.1.0",
    "jasmine": "^4.5.0",
    "jasmine-spec-reporter": "^7.0.0",
    "nodemon": "^2.0.20",
    "prettier": "^2.8.1",
    "supertest": "^6.3.3",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.4"
  }

### END ###

