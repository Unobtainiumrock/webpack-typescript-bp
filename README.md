#Webpack with Typescript Boiler Plate

##Description
This configuration in short, essentially swaps out babel and babel-loader as the compiler and loaders 
for typescript and ts-loader. 

##Prerequisites
This just comes down to preference, but I prefer to have TypeScript installed globally and just use npm link for projects
that utilize TypeScript. If you choose to do this, follow `2A.)`, otherwise follow `2B.)` in the Getting Started.

###Getting Started 
####All the following commands are run in the terminal
1.) cd into `webpack-typescript-bp`.

2A.) Run `npm install -g typescript`, then run `npm link typescript`

2B.) Run `npm install --save-dev typescript`

2.) Run `npm install`

3.) To ts-compile and webpack bundle all of your files, type `npm run build` into your terminal

note: This assumes that you are using node.js with npm, OSX, and have knowledge of module patterns and loading various dependencies into a project.