import LayoutNew from '../../../components/layoutNew';

const NewExercise = () => {
    return ( 
        <div>
            add exercise
        </div>
     );
}
 
export default NewExercise;

NewExercise.getLayout = function getLayout(page) {
    return (
      <LayoutNew>
        {page}
      </LayoutNew>
    )
  }