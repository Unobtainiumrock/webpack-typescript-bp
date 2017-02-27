#Webpack with Typescript Boiler Plate

##Description
This essentially swaps out `babel` and `babel-loader` as the compiler and loaders in favor of `typescript` and `ts-loader`. 

##Prerequisites
Have node and npm installed https://nodejs.org/en/download/


###Getting Started 
It comes down to preference, but I prefer to have TypeScript installed globally and just use npm link for projects
that utilize TypeScript. If you choose to do this, follow `2A.)`, otherwise follow `2B.)` in the Getting Started.

1.) cd into `webpack-typescript-bp`

2A.) Run `npm install -g typescript`, then run `npm link typescript`

2B.) Run `npm install --save-dev typescript`

2.) Run `npm install` to install the other included dependencies

3.) To ts-compile and webpack bundle all of your files, type `npm run build` into your terminal

note: This assumes that you have knowledge of module patterns and loading various dependencies into a project.

####Useful info on declaration files for third part modules
https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/

