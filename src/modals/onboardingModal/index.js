
import { useRef } from 'react';
import ImageContainer from 'components/common/imgContainer';
import Modal from 'components/layout/modal';
import { uploadFile } from 'shared/api';

const OnboardingModal = (props) => {
    const inputRef = useRef();
    const { isOpen = false, setIsOpen = () => {} } = props;

    const handleUploadClick = (event) => {
        event.preventDefault();
        initiateImport(event.target.files[0]);
    }

    const validateFile = (file) => {
        return true;
    }

    const initiateImport = (file) => {
        const isFileValid = validateFile(file);
        if (isFileValid) {
            uploadFile(file)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    if(isOpen) {
        return(
            <Modal setIsOpen={setIsOpen}>
                <h1 className='w-1/2 mx-auto px-10'>How would you like to start?</h1>
                <div className='w-3/4 mx-auto px-10 mt-10 flex flex-row'>
                    <div
                        onClick={() => inputRef.current.click()} 
                        className='w-1/2 p-16 rounded-lg cursor-pointer transition-all duration-200 hover:bg-light'
                    >
                        <ImageContainer className='w-20 h-20 mx-auto rounded-lg bg-accent'/>
                        <h5 className='mt-6'>Create a new Quiz</h5>
                        <p className='mt-3'>Custom rounds with advanced control help take your quiz to a whole new level.</p>
                    </div>
                    <div className='w-1/2 p-16 rounded-lg cursor-pointer transition-all duration-200 hover:bg-light'>
                        <ImageContainer className='w-20 h-20 mx-auto rounded-lg bg-accent'/>
                        <h5 className='mt-6'>Upload your own Quiz</h5>
                        <p className='mt-3'>Use your own file for the presentation. Just configure your rounds and you’re good to go.</p>
                    </div>
                </div>
                <input onChange={(e) => handleUploadClick(e)} ref={inputRef} id="selfSign" type="file" name="file" multiple={false} hidden/>
            </Modal>
        );
    }
    else return null;
}

export default OnboardingModal;