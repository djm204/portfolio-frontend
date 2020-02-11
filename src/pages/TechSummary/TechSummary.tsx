import React from 'react';
import { InfoSection } from '../../components/layout/InfoSection';
import Project from '../../components/Project';
import StatsBar from './StatsBar';
import '../../stylesheets/TechSummary.css'


const TechSummary = () => {
    const projects = [
        {
            className: 'Projects_Cashier',
            name: 'Cashier',
            role: 'Developer Team Lead / Full Stack Developer',
            points: [
                'Responsible for pair programming / mentoring and unblocking reports.',
                'Delegation and prioritization of tasks with a workload of about 25-45 tickets per week.',
                'React/Redux App on frontend for Admin and Checkout.',
                'Hybrid PHP / Go backend.',
                '4 years on the team working to deliver features and bug fixes for both the frontend and backend.'
            ],
            dataAos: 'fade-right',
            dataAosDuration: '1000',
            dataAosEasing: 'ease-in-out',
            dataAosOnce: 'true'
        },
        {
            className: 'Projects_Staples',
            name: 'Staples Project',
            role: 'Developer Team Lead / Full Stack Developer',
            points: [
                'React/Redux App.',
                'Customized the current functionality of Cashier to allow for Staples business requirements to be met.',
                'Successful delivery on tight timeline.'
            ],
            dataAos: 'fade-up',
            dataAosDuration: '1000',
            dataAosEasing: 'ease-in-out',
            dataAosOnce: 'true'
        },
        {
            className: 'Projects_MultiCurrency',
            name: 'Bold MultiCurrency',
            role: 'Completed the first iteration of the frontend of the app in its entirety.',
            points: [
                'React/Redux App converting prices in a Shopify / BigCommerce store, by currency and ruleset define by the merchant.',
                'Customized the current functionality of Cashier to allow for Staples business requirements to be met.',
                'Helped write the integration for Cashier to allow for charging in specific currencies.'
            ],
            dataAos: 'fade-up',
            dataAosDuration: '1000',
            dataAosEasing: 'ease-in-out',
            dataAosOnce: 'true'
        },
        {
            className: 'Projects_DeepRoots',
            name: 'Deep Roots Strong Dance - Website',
            role: 'Designed and built entire site',
            points: [
                'React/Redux App.',
                'API endpoint for adding to mailing list.',
            ],
            dataAos: 'fade-left',
            dataAosDuration: '1000',
            dataAosEasing: 'ease-in-out',
            dataAosOnce: 'true'
        }
    ];

    const skills = [
        {
            name: 'HTML',
            percentage: 95
        },
        {
            name: 'CSS',
            percentage: 90
        },
        {
            name: 'JavaScript',
            percentage: 90
        },
        {
            name: 'React',
            percentage: 90
        },
        {
            name: 'Redux',
            percentage: 85
        },
        {
            name: 'TypeScript',
            percentage: 75
        },
        {
            name: 'NodeJS',
            percentage: 65
        },
        {
            name: 'Go',
            percentage: 65
        },
        {
            name: 'K8s',
            percentage: 55
        },
        {
            name: 'GCP',
            percentage: 55
        },
    ];

    return (
        <div className="TechSummaryPage">
            <InfoSection
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
                classnames="TechSummaryPage__InfoSection"
                >
                <div className="TechSummaryPage__Introduction">
                    <h2>A Brief History</h2>
                    <p>David has been intrigued with Technology from a very small age. He was first introduced by his parents via a IBM PS/2 486 Desktop PC.</p>
                    <p>He managed to brick the Windows installation within a week, pretty sure it was <code>FORMAT C:</code></p>
                    <p>When David's parents brought the PC to get fixed, he asked the person fixing the PC if he could watch.</p>
                    <p>After watching what he did to re-install Windows, David was now equipped to corrupt the OS as much as he pleased as long as he reinstalled it.</p>
                    <p>Little did David know that this interaction would spark a life long journey into technology.</p>
                </div>
                <div className="TechSummaryPage__Introduction__StatBars">
                    {skills.map(skill => <StatsBar key={JSON.stringify(skill)} {...skill} />)}
                </div>
            </InfoSection>
            <InfoSection classnames="TechSummaryPage__Projects">
                <h2>Projects</h2>
                {projects.map(project => <Project key={JSON.stringify(project)} {...project} />)}
            </InfoSection>
        </div>
    );
}

export default TechSummary;