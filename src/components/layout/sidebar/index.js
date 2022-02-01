import ImageContainer from 'components/common/imgContainer';
import Zap from 'assets/icons/zap-dark.svg';
import Done from 'assets/icons/check-circle.svg';
import Bookmark from 'assets/icons/bookmark.svg';
import File from 'assets/icons/file.svg';
import Trash from 'assets/icons/trash.svg';
import leftChevron from 'assets/icons/chevron-left.svg';
import React, { useState } from 'react';
import './style.css';

const Sidebar = (props) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const { size = '', name = '', className = '', setImportModal = () => {}} = props;

    const toggleSidebarSize = () => {
        setIsMinimized(isMinimized => !isMinimized);
    }

    if(props.children) {
        return(
            <div 
                id={name}
                className={(size == 'large' ? 'sidebar large ' : 'sidebar ') + className}
            >
                {props.children}
            </div>
        );
    }

    else {
        return(
            <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
                <div className='collapse-border'>
                    <span onClick={() => toggleSidebarSize()}><ImageContainer className={`minimize ${isMinimized ? 'rotate' : ''}`} src={leftChevron}/></span>
                </div>
                <div className='w-full'>
                    <button
                        type='submit'
                        className='btn-primary'
                        onClick={() => setImportModal(true)}
                    >
                        Start New Quiz
                    </button>
                </div>
                <ul className='sidebar-links'>
                    <li><ImageContainer src={Zap}/><span>All Quizzes</span></li>
                    <li><ImageContainer src={Done}/><span>Completed</span></li>
                    <li><ImageContainer src={Bookmark}/><span>Saved</span></li>
                    <li><ImageContainer src={File}/><span>Drafts</span></li>
                    <li><ImageContainer src={Trash}/><span>Trash</span></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;