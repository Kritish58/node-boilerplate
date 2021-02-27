# Starting Steps

## udpate package.json to latest dependencies

install npm-check-updates globally `npm install -g npm-check-updates` <br><br> run `ncu -u` to upgrade to latest
versions <br><br> source: https://github.com/raineorshine/npm-check-updates

## edit environment variables

-  create a new .env file inside config folder with reference to .env.example

# Recommendations

-  No database operations in controllers
-  one service class for one controller
-  //@VALIDATION and //@SERVICES
-  buiseness logic resides inside controllers with easily readable service functions
