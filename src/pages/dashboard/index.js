import Sidebar from 'components/layout/sidebar';
import MainContent from 'components/layout/mainContent';
import { useState } from 'react';
import Navbar from 'components/layout/navbar';
import ViewWrapper from 'components/layout/viewWrapper';
import OnboardingModal from 'modals/onboardingModal';

const Dashboard = (props) => {
    const [viewOnboardingModal, setViewOnboardingModal] = useState(false);

    return(
        <ViewWrapper>
            <Navbar/>
            <Sidebar setImportModal={setViewOnboardingModal}/>
            <MainContent/>
            <OnboardingModal isOpen={viewOnboardingModal} setIsOpen={setViewOnboardingModal}/>
        </ViewWrapper>
    );
}

export default Dashboard;