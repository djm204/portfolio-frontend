import React from 'react';
import { InfoSection } from '../../components/layout/InfoSection';
import NextButton from '../../components/NextButton';

const TechSummary = () => {
    return (
        <div className="tech-summary-page">
            <h1>Technical Summary</h1>
            <InfoSection classnames="tech-bio">
                <div className="introduction">
                    <p>David has been intrigued with Technology from a very small age. He was first introduced by his parents via a IBM PS/2 486 Desktop PC.</p>
                    <p>David proceeded to brick the Windows installation within a week, pretty sure it was <code>FORMAT c:</code>.</p>
                    <p>When David's parents brought the PC to get fixed, he asked the person fixing the PC if he could watch.</p>
                    <p>After watching what he did to re-install Windows, David was now equipped to corrupt the OS as much as he pleased as long as he reinstalled it.</p>
                    <p>Little did David know that this interaction would spark a life long journey into technology.</p>
                </div>
                <div className="section-picture"></div>
            </InfoSection>
            <InfoSection classnames="teamlead">
                <h2>Developer Team Lead</h2>
                <div>Responsible for leading the team to deliver the front-end custom-theme react app</div>
                <ul>
                    <li>
                        Responsible for pair programming and unblocking reports.
                    </li>
                    <li>
                        Delegation and prioritization of tasks.
                    </li>
                    <li>
                        Adept time management required.
                    </li>
                </ul>
                <div className="section-picture"></div>
            </InfoSection>
            <InfoSection classnames="staples">
                <h2>Staples Project</h2>
                <div>Responsible for leading the team to deliver the frontend custom theme React/Redux App</div>
                <ul>
                    <li>
                        React/Redux App.
                    </li>
                    <li>
                        Customized the current functionality of Cashier to allow for Staples business requirements to be met.
                    </li>
                    <li>
                        Successful delivery on tight timeline.
                    </li>
                </ul>
                <div className="section-picture"></div>
            </InfoSection>
            <InfoSection classnames="cashier">
                <h2>Bold - Cashier</h2>
                <div>Fullstack Developer on Cashier</div>
                <ul>
                    <li>
                        React/Redux App on frontend for Admin and Checkout.
                    </li>
                    <li>
                        Hybrid PHP / Go backend.
                    </li>
                    <li>
                        4 years on the team working to deliver features and bug fixes for both the frontend and backend.
                    </li>
                </ul>
                <div className="section-picture"></div>
            </InfoSection>
            <InfoSection classnames="multicurrency">
                <h2>Bold - Multi-Currency on Shopify / BigCommerce</h2>
                <div>Completed the first iteration of the frontend of the app in its entirety.</div>
                <ul>
                    <li>
                        React/Redux App for converting prices in a Shopify store, by currency and ruleset define by the merchant.
                    </li>
                    <li>
                        Helped write the integration for Cashier to allow for charging in specific currencies.
                    </li>
                </ul>
                <div className="section-picture"></div>
            </InfoSection>
            <InfoSection classnames="go">
                <h2>GoLang</h2>
                <div>Completed the first iteration of the frontend of the app in its entirety.</div>
                <ul>
                    <li>
                        React/Redux App for converting prices in a Shopify store, by currency and ruleset define by the merchant.
                    </li>
                    <li>
                        Integrates with Cashier to allow for charging in specific currencies.
                    </li>
                </ul>
                <div className="section-picture"></div>
            </InfoSection>
            <NextButton
                linkUrl="/contact"
                buttonLabel="Contact Me"
                title="Contact Me Button" />
        </div>
    );
}

export default TechSummary;