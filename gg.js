


/*function loadProj(projName){
	console.log("Loading project " + projName);
	projName = "OnlineProjects/" + projName
	var projectDescDiv = document.getElementById("projDesc");
	var projectDiv = document.getElementById("projDiv");

	while(projectDescDiv.firstChild){
		projectDescDiv.removeChild(projectDescDiv.firstChild)
	}
	while(projectDiv.firstChild){
		projectDiv.removeChild(projectDiv.firstChild)
	}


	//var projectDescription = readFile(projName + ".txt");
	//var projDesc = document.createTextNode(projectDescription);

	//projectDescDiv.appendChild(projDesc);
	var projectDesc = document.createElement("div");
	projectDesc.id = "fullDesc"
	projectDescDiv.appendChild(projectDesc);
	$("#fullDesc").load(projName + ".txt");



	var project = document.createElement("iframe");
	project.src = "http://localhost3000/" + projName + ".html";
	projectDiv.appendChild(project);

	


}*/


