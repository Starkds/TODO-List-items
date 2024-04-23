import noProjectImage from '../assets/logo.png';
import Button from './Button.jsx';
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-[8rem] text-center w-2/3">
      <img src={noProjectImage} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-stone-500 my-4'>No Project Selected</h2>
      <p className='text-stone-400 mb-4'>Selected a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
