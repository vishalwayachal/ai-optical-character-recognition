# Building an Optical Character Recognition API 


### Prerequisites

- Installed local [Node.js](https://nodejs.org/) environment
- Package manager to install packages.  [npm](https://www.npmjs.com/)

Clone the repo in your environment


### Installing

```bash
# move into project folder
cd ai-optical-character-recognition

# install the dependencies
npm install

# rename the .env.sample
mv .env.sample .env

# add your variables
nano .env
```

#### Running the server

```bash
npm start
```

## Example

```bash
# POST - /detection
curl -H "Content-Type: application/octet-stream" --data-binary "@image/bicycle 300x300.jpg" "http://localhost:3000/detection"
```

##### Response

```json
{
  "duration": 171,
  "result": "Account Details\n\nUSERNAME PASSWORD STATUS\nif0_35706895 4EB2GFQLbjqTu [ Active |\n\nLABEL WEBSITE IP HOSTING VOLUME\nWebsite for 185.27.134.34 vol17_2\nvishalw.infinityfreeapp.com\n\nHOME DIRECTORY CREATION DATE\n\n/home/vol17_2/infinityfree.com/if0_35 2024-01-01\n\n706895\n"
}
```

## Running the tests

```bash
npm test
```
