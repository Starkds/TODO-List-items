import { useState } from "react";
import NewProject from "./Component/NewProject.jsx";
import NoProjectSelected from "./Component/NoProjectSelected.jsx";
import ProjectsSidebar from "./Component/ProjectsSidebar.jsx";
import SelectedProject from "./Component/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //did not select any project
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask,...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) =>task.id !== id ),
      };
    });
  }


  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, //we adding a new project
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //we adding a new project
      };
    });

  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) =>project.id !== prevState.selectedProjectId),
      };
    });
  }

  function handleCancelAddProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]
      };
    });

    }

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId)
 
  let content = <SelectedProject  
  project={selectedProject}  
  onDelete={handleDeleteProject}  
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask} 
  tasks={projectsState.tasks}
  />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }



  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject={handleStartAddProject}
       projects={projectsState.projects}
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectsState.selectedProjectId}
        />
      {content}
    </main>
  );
}

export default App;
