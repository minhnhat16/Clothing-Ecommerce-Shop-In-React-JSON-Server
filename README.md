# Kuzma Clothing & Shoes
## Giảng Viên: LÊ HÀ THANH
# Chuyên Đề Công nghệ phần mềm

# Here is the recorded step-by-step video instruction on how to run the app:
[https://www.youtube.com/watch?v=4VGZhDXticc](https://youtu.be/hLlI7eMLw3M)

# To Run Application normaly
1. To run the app you first need to download and install Node.js and npm on your computer. When you download them you need to configure path variables. Here is the link where you can install them: https://nodejs.org/en
2. When you install Node.js and npm on your computer you need to download the project. When you download the project, you need to extract it.
3. After you extract the project you need to open the project folder in your terminal of choice and write: 
```
npm install
```
3. After the installation is complete write:
```
npm start
```

# To build application

1. Extract feature in package.json
```
npm install
```
2. Install serve to run a build for project
```
npm install serve --save-dev
```
3. Install json server to host a port contain data json:
```
npm install -g json-server
```
4. Start the json server in port 9090 for app build
```
json-server --watch src/data/db.json --port 9090
```
5. Run build application
```
npm start buid 
```
the local port appearce after build done

# Deploying site: https://minhnhat16.github.io/Clothing-Ecommerce-Shop-In-React-JSON-Server/

# Script for CICD .yml 
- First of all I want to deploy the JSON data on a nother server using: render.com
- Follow step in this link to create a json server: https://www.youtube.com/watch?v=W9sbA1a2-Ag
- The JSON repo i has put on git an keeping it in public: https://github.com/minhnhat16?tab=repositories
- In this JSON server will give me a API address, for me it was :https://my-ecommerce-data.onrender.com
- Try to find all API in this project, defautl is: http://localhost:9090, the default local port for json-server, if you are using VSCode, use: 'Ctrl+Shift+F' to find all, after then replace it with JSON-server hosted by render.com.

- Choose branch 'main' which use the repository to build
- Deploy with Node 18.x 
- Use check out in git brach to check new pull features
- Action  'actions/setup-node@v3' to set up Node.js enviroment
- Run 'npm ci' to check dependencies on package
- Run 'npm install' install dependencies to enviroment
- Run   'npm install -g json-server' global to install  setup port for data.json
- Start 'json-server --watch src/data/db.json --port 9090 &' start a json server to hosting data, '&' symbols is go to next while '&' not appear the step will stuck in this step.
- Check json server is ON
- Start run build 'npm run build'
- Run test with Jest test 'npm test'
- Format all code file 'npm run format'
- Start deploy to gh-page with bot agent
- As I'm using Vite so the file build will be in dist: 'publish_dir: ./dist'

