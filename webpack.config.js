module.exports={
	entry:'./src/main.js',
	output:{
		path:__dirname,
		filename:'dist/App.js'
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.(jpj|png|jpeg|ttf|gif)$/,loader:'file-loader'}
		]
		
		
	}
	
	
	
	
}
